class DomainurlsController < ApplicationController
  # GET /domainurls
  # GET /domainurls.json
  load_and_authorize_resource
  skip_authorize_resource :only => :domainupdate
  helper_method :sort_column, :sort_direction
  skip_before_filter :authenticate_user!, :only => [:index]
  def index
    if signed_in?
      @domainurls =Domainurl.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 20, :page => params[:page])
      @domaincount="#{Domainurl.find_all_by_user_id(current_user.id).count}/100"
      @domaincount_for_page=Domainurl.find_all_by_user_id(current_user.id).count
      @url=Domainurl.find_all_by_user_id(current_user.id)
      @histories=History.find_all_by_domainurl_id(@url)
    end
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: Domainurl.find_all_by_user_id(current_user.id) }
      format.csv { send_data History.to_csv(@histories) }
    end
  end

  # GET /domainurls/1
  # GET /domainurls/1.json
  def show
    @domainurl = Domainurl.find(params[:id])
    @history=History.find_all_by_domainurl_id(@domainurl.id)
    #redirect_to root_path
    # respond_to do |format|
    #   format.html # show.html.erb
    #   format.json { render json: @domainurl }
    # end
    data_table = GoogleVisualr::DataTable.new

    # Add Column Headers
    data_table.new_column('date', 'Date' )
    data_table.new_column('number', 'Yahoo')
    data_table.new_column('number', 'Bing')
    data_table.new_column('number', 'Google')
    
    # Add Rows and Values
    data_table.add_row([Domainurl.find(params[:id]).updated_at.to_date, Domainurl.find(params[:id]).yahoo_rank, Domainurl.find(params[:id]).bing_rank, Domainurl.find(params[:id]).google_rank ])
    @history.each do |f|
    data_table.add_row(
        [f.created_at.to_date, f.yahoo_rank, f.bing_rank, f.google_rank ])
    end

    option = { width: 600, height: 450, colors: ['purple', 'orange', 'blue'], vAxis: {direction: -1, minValue: 1, maxValue: 100 }, pointSize: 7, lineWidth: 3 }
    @chart = GoogleVisualr::Interactive::LineChart.new(data_table, option)

  end

  # GET /domainurls/new
  # GET /domainurls/new.json
  def new
    @domainurl = Domainurl.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @domainurl }
    end

  end

  # GET /domainurls/1/edit
  def edit
    @domainurl = Domainurl.find(params[:id])
    
  end

  # POST /domainurls
  # POST /domainurls.json
  def create
    @domainurl = Domainurl.new(params[:domainurl])
    if Domainurl.find_all_by_user_id(current_user.id).count<100
      respond_to do |format|
        if @domainurl.save
          format.html { redirect_to root_path, notice: 'URL was successfully created.' }
          format.json { render json: @domainurl, status: :created, location: @domainurl }
        else

          #format.html { render action: "new" }
          format.html { redirect_to root_path, notice: 'Please enter a valid URL, keyword, and country' }
          format.json { render json: @domainurl.errors, status: :unprocessable_entity }
          
        end
      end
    else
      flash[:notice] = 'You have reached the limit of available URLs. Please delete some URLs to add more'
      redirect_to root_path
    end
  
  end

  # PUT /domainurls/1
  # PUT /domainurls/1.json
  def update
    @domainurl = Domainurl.find(params[:id])
    #flash[:notice]="#{@domainurl.domainurl} updated!"

    respond_to do |format|
      if @domainurl.update_attributes(params[:domainurl])
        #format.html { redirect_to @domainurl, notice: 'URL was successfully updated.' }
        format.html { redirect_to root_path, notice: 'URL was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @domainurl.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /domainurls/1
  # DELETE /domainurls/1.json
  def destroy
    @domainurl = Domainurl.find(params[:id])
    @domainurl.destroy
    flash[:notice]="#{@domainurl.domainurl} deleted!"
    respond_to do |format|
      format.html { redirect_to domainurls_url }
      format.json { head :no_content }
    end
  end


  def domainupdate
    @domainurl = Domainurl.find_all_by_user_id(current_user.id)
    uid=current_user.id
    if @domainurl.first.refreshed==nil || Time.now.utc>(@domainurl.first.refreshed)+1800
    # if Time.now.utc>(@domainurl.first.updated_at+1800) ||
    #  @domainurl.first.created_at==(@domainurl.first.updated_at) || 
    #  @domainurl.first.created_at==(@domainurl.first.updated_at+1) || 
    #  @domainurl.first.created_at==(@domainurl.first.updated_at-1)
      Domainurl.find_all_by_user_id(uid).each do |f|
        f.refreshed=Time.now.utc
        f.save
      end
        Domainurl.delay.domainupdatenow(uid)
        flash[:notice] = 'Updating. Refresh your browser in a few minutes'
        redirect_to root_path 
    else 
      flash[:notice] = 'Please wait at least 30 minutes between refreshes.'
      redirect_to root_path 
    end
  end

  

  

  private
    @urlcount    

    def sort_column
      Domainurl.column_names.include?(params[:sort]) ? params[:sort] : "created_at"
    end

    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end
end
