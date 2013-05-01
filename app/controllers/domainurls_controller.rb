class DomainurlsController < ApplicationController
  # GET /domainurls
  # GET /domainurls.json
  before_filter :authenticate_user!
  helper_method :sort_column, :sort_direction

  def index
    if signed_in?
      @domainurls =Domainurl.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 20, :page => params[:page])
      @domaincount="#{Domainurl.find_all_by_user_id(current_user.id).count}/50"
      @domaincount_for_page=Domainurl.find_all_by_user_id(current_user.id).count
      #@domainurl=Domainurl.find_all_by_user_id(current_user.id)
    end
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @domainurls }
    end
  end

  # GET /domainurls/1
  # GET /domainurls/1.json
  def show
    @domainurl = Domainurl.find(params[:id])
    redirect_to root_path
    # respond_to do |format|
    #   format.html # show.html.erb
    #   format.json { render json: @domainurl }
    # end

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
    if Domainurl.find_all_by_user_id(current_user.id).count<50
      respond_to do |format|
        if @domainurl.save
          format.html { redirect_to @domainurl, notice: 'Domainurl was successfully created.' }
          format.json { render json: @domainurl, status: :created, location: @domainurl }
        else
          format.html { render action: "new" }
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
    flash[:notice]="#{@domainurl.domainurl} updated!"
    respond_to do |format|
      if @domainurl.update_attributes(params[:domainurl])
        format.html { redirect_to @domainurl, notice: 'Domainurl was successfully updated.' }
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
    
    if Time.now.utc>(Domainurl.find_all_by_user_id(current_user.id).first.updated_at+3600)
      Domainurl.find_all_by_user_id(current_user.id).each.delay do |f|
         sleep 1
         f.yahoo_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit =>100).from_yahoo
         sleep 1
         f.bing_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit =>100).from_bing
         sleep 1
         f.alexa_global=PageRankr.ranks("#{f.domainurl}", :alexa_global)
         f.alexa_global=f.alexa_global[:alexa_global] 
         sleep 8
         f.google_rank=Ranking.new(:keyword => "#{f.keyword}", :url =>  "#{f.domainurl}", :limit =>100).from_googleUS
         f.save 
        end
        flash[:notice] = 'Updating. Refresh your browser in a few minutes'
        redirect_to root_path 
    else 
      flash[:notice] = 'Please wait at least 60 minutes between refreshes'
      redirect_to root_path 
    end
  end


  private


    def sort_column
      Domainurl.column_names.include?(params[:sort]) ? params[:sort] : "created_at"
    end

    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end
end
