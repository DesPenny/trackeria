class DomainurlsController < ApplicationController
  # GET /domainurls
  # GET /domainurls.json
  helper_method :sort_column, :sort_direction
  def index
    if signed_in?
      @domainurls =Domainurl.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 20, :page => params[:page])
      @domaincount="#{Domainurl.find_all_by_user_id(current_user.id).count} / 10"
      @domaincount_for_page=Domainurl.find_all_by_user_id(current_user.id).count
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

    respond_to do |format|
      if @domainurl.save
        format.html { redirect_to @domainurl, notice: 'Domainurl was successfully created.' }
        format.json { render json: @domainurl, status: :created, location: @domainurl }
      else
        format.html { render action: "new" }
        format.json { render json: @domainurl.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /domainurls/1
  # PUT /domainurls/1.json
  def update
    @domainurl = Domainurl.find(params[:id])

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

    respond_to do |format|
      format.html { redirect_to domainurls_url }
      format.json { head :no_content }
    end
  end
  
  def domainupdate
    redirect_to root_path
    @domainurl = Domainurl.find(params[:id])
    #Ranking.new(:keyword => domainurl.keyword, :url => domainurl.domainurl, :limit =>100).from_bing
    #Ranking.new(:keyword => :keyword, :url => :domainurl, :limit =>100).from_yahoo
    #Ranking.new(:keyword => :keyword, :url => :domainurl, :limit =>100).from_googleUS
    @domainurl.alexa_rank=PageRankr.ranks(:domainurl, :alexa_global)

  end

  private

    def sort_column
      Domainurl.column_names.include?(params[:sort]) ? params[:sort] : "created_at"
    end

    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
    end
end
