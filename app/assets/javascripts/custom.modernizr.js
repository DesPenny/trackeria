  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>foundation/js/vendor/custom.modernizr.js at master · zurb/foundation</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="+Vtp51O7cK1RDIzqUFkl5xkwBGFG3ZWG/fwfLBh6Nf0=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-2a83169d5daa0c720c0fce6aa912813aae8d8f5c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-b0c192551e1d2119b4103833760e69581e59383b.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-5d1fadc19b33a169af44a3c1c2af3ece25e4f379.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="84a50b8ef164ab164943e7a3ed1259c2">

        <link data-pjax-transient rel='permalink' href='/zurb/foundation/blob/5fe1c51560454b04fc8ca4af5ec9b5ff42735b6d/js/vendor/custom.modernizr.js'>
    <meta property="og:title" content="foundation"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/zurb/foundation"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/e1bc17659f20ed88fbba10bb7360410e?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="foundation - The most advanced responsive front-end framework in the world. Quickly create prototypes and production code for sites and apps that work on any kind of device."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="zurb/foundation"/>

    <meta name="description" content="foundation - The most advanced responsive front-end framework in the world. Quickly create prototypes and production code for sites and apps that work on any kind of device." />

  <link href="https://github.com/zurb/foundation/commits/master.atom" rel="alternate" title="Recent Commits to foundation:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="raffy2" autocapitalize="off">

    <input type="hidden" name="nwo" value="zurb/foundation" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
            <input type="radio" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

    <input type="hidden" name="type" value="Code" />

  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

    <input type="hidden" class="js-repository-name-with-owner" value="zurb/foundation"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="8538ddf32d10828a5ca2c548d8ac5fdbdbf0a2d3"/>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/raffy2" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/876d320f890664a0979f3d52c64239e7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> raffy2
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="mini-icon mini-icon-account-settings"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/zurb/foundation/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="+Vtp51O7cK1RDIzqUFkl5xkwBGFG3ZWG/fwfLBh6Nf0=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2573058" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/zurb/foundation/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/zurb/foundation/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/zurb/foundation/stargazers">11,170</a>
    </li>

        <li>
          <a href="/zurb/foundation/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/zurb/foundation/network" class="social-count">1,978</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/zurb" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">zurb</span>
                  </a></span> /
                <strong><a href="/zurb/foundation" class="js-current-repository">foundation</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/zurb/foundation/pulse" class="js-selected-navigation-item " data-selected-links="pulse /zurb/foundation/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/zurb/foundation" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /zurb/foundation">Code</a></li>
    <li><a href="/zurb/foundation/network" class="js-selected-navigation-item " data-selected-links="repo_network /zurb/foundation/network">Network</a></li>
    <li><a href="/zurb/foundation/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /zurb/foundation/pulls">Pull Requests <span class='counter'>6</span></a></li>

      <li><a href="/zurb/foundation/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /zurb/foundation/issues">Issues <span class='counter'>116</span></a></li>



    <li><a href="/zurb/foundation/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /zurb/foundation/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/zurb/foundation/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /zurb/foundation/tags">Tags <span class="counter ">59</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/2-2-stable/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2-2-stable" rel="nofollow" title="2-2-stable">2-2-stable</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/3-2-stable/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="3-2-stable" rel="nofollow" title="3-2-stable">3-2-stable</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/4.0-flexbox/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="4.0-flexbox" rel="nofollow" title="4.0-flexbox">4.0-flexbox</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/5.0-wip/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="5.0-wip" rel="nofollow" title="5.0-wip">5.0-wip</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/farleyta-nav-bar-variables/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="farleyta-nav-bar-variables" rel="nofollow" title="farleyta-nav-bar-variables">farleyta-nav-bar-variables</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/gh-pages/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/html5-required/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="html5-required" rel="nofollow" title="html5-required">html5-required</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/interchange/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="interchange" rel="nofollow" title="interchange">interchange</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/jquery2.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="jquery2.0" rel="nofollow" title="jquery2.0">jquery2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/knyle/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="knyle" rel="nofollow" title="knyle">knyle</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/master/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/new/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="new" rel="nofollow" title="new">new</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/off-canvas/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="off-canvas" rel="nofollow" title="off-canvas">off-canvas</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/offcanvas-fix/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="offcanvas-fix" rel="nofollow" title="offcanvas-fix">offcanvas-fix</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/one-docs-to-rule-them-all/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="one-docs-to-rule-them-all" rel="nofollow" title="one-docs-to-rule-them-all">one-docs-to-rule-them-all</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/rtl-js/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rtl-js" rel="nofollow" title="rtl-js">rtl-js</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/scss-standalone/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="scss-standalone" rel="nofollow" title="scss-standalone">scss-standalone</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.6/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.6" rel="nofollow" title="v4.1.6">v4.1.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.5/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.5" rel="nofollow" title="v4.1.5">v4.1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.4/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.4" rel="nofollow" title="v4.1.4">v4.1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.3" rel="nofollow" title="v4.1.3">v4.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.2" rel="nofollow" title="v4.1.2">v4.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.1" rel="nofollow" title="v4.1.1">v4.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.1.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.1.0" rel="nofollow" title="v4.1.0">v4.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.9/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.9" rel="nofollow" title="v4.0.9">v4.0.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.8/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.8" rel="nofollow" title="v4.0.8">v4.0.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.7/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.7" rel="nofollow" title="v4.0.7">v4.0.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.6/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.6" rel="nofollow" title="v4.0.6">v4.0.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.5/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.5" rel="nofollow" title="v4.0.5">v4.0.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.4/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.4" rel="nofollow" title="v4.0.4">v4.0.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.3" rel="nofollow" title="v4.0.3">v4.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.2" rel="nofollow" title="v4.0.2">v4.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.1" rel="nofollow" title="v4.0.1">v4.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.0.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.0.rc1" rel="nofollow" title="v4.0.0.rc1">v4.0.0.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v4.0.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v4.0.0" rel="nofollow" title="v4.0.0">v4.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.5/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.5" rel="nofollow" title="v3.2.5">v3.2.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.4.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.4.rc1" rel="nofollow" title="v3.2.4.rc1">v3.2.4.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.4/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.4" rel="nofollow" title="v3.2.4">v3.2.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.3" rel="nofollow" title="v3.2.3">v3.2.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.2" rel="nofollow" title="v3.2.2">v3.2.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.1" rel="nofollow" title="v3.2.1">v3.2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.0.rc3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.0.rc3" rel="nofollow" title="v3.2.0.rc3">v3.2.0.rc3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.0.rc2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.0.rc2" rel="nofollow" title="v3.2.0.rc2">v3.2.0.rc2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.0.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.0.rc1" rel="nofollow" title="v3.2.0.rc1">v3.2.0.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.2.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.0" rel="nofollow" title="v3.2.0">v3.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.1.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.1" rel="nofollow" title="v3.1.1">v3.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.1.0.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.0.rc1" rel="nofollow" title="v3.1.0.rc1">v3.1.0.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.1.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.0" rel="nofollow" title="v3.1.0">v3.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.9.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.9.rc1" rel="nofollow" title="v3.0.9.rc1">v3.0.9.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.9/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.9" rel="nofollow" title="v3.0.9">v3.0.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.8.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.8.rc1" rel="nofollow" title="v3.0.8.rc1">v3.0.8.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.8/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.8" rel="nofollow" title="v3.0.8">v3.0.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.7.rc11/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.7.rc11" rel="nofollow" title="v3.0.7.rc11">v3.0.7.rc11</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.7.rc10/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.7.rc10" rel="nofollow" title="v3.0.7.rc10">v3.0.7.rc10</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.7.rc9/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.7.rc9" rel="nofollow" title="v3.0.7.rc9">v3.0.7.rc9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.7/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.7" rel="nofollow" title="v3.0.7">v3.0.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.6.rc7/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.6.rc7" rel="nofollow" title="v3.0.6.rc7">v3.0.6.rc7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.6.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.6.rc1" rel="nofollow" title="v3.0.6.rc1">v3.0.6.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.6/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.6" rel="nofollow" title="v3.0.6">v3.0.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.5.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.5.rc1" rel="nofollow" title="v3.0.5.rc1">v3.0.5.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.5/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.5" rel="nofollow" title="v3.0.5">v3.0.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.4/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.4" rel="nofollow" title="v3.0.4">v3.0.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.3" rel="nofollow" title="v3.0.3">v3.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.2" rel="nofollow" title="v3.0.2">v3.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.1.rc1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.1.rc1" rel="nofollow" title="v3.0.1.rc1">v3.0.1.rc1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.1" rel="nofollow" title="v3.0.1">v3.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.0.rc4/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.0.rc4" rel="nofollow" title="v3.0.0.rc4">v3.0.0.rc4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.0.rc3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.0.rc3" rel="nofollow" title="v3.0.0.rc3">v3.0.0.rc3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v3.0.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.0" rel="nofollow" title="v3.0.0">v3.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2" rel="nofollow" title="v2.2">v2.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.1.5/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.5" rel="nofollow" title="v2.1.5">v2.1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1" rel="nofollow" title="v2.1">v2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.0.3/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.3" rel="nofollow" title="v2.0.3">v2.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.0.2/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.2" rel="nofollow" title="v2.0.2">v2.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.0.1/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" rel="nofollow" title="v2.0.1">v2.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/zurb/foundation/blob/v2.0.0/js/vendor/custom.modernizr.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.0" rel="nofollow" title="v2.0.0">v2.0.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/zurb/foundation" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /zurb/foundation">Files</a></li>
    <li><a href="/zurb/foundation/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /zurb/foundation/commits/master">Commits</a></li>
    <li><a href="/zurb/foundation/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /zurb/foundation/branches" rel="nofollow">Branches <span class="counter ">17</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ada2ab460c9daddf03faad3857fad846 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ada2ab460c9daddf03faad3857fad846 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zurb/foundation" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">foundation</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zurb/foundation/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/zurb/foundation/tree/master/js/vendor" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">vendor</span></a></span><span class="separator"> / </span><strong class="final-path">custom.modernizr.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/vendor/custom.modernizr.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/zurb/foundation/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ba52c44d32ef8a3ff275285ade82db30?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/mrsweaters" rel="author">mrsweaters</a></span>
    <time class="js-relative-date" datetime="2013-02-14T10:54:09-08:00" title="2013-02-14 10:54:09">February 14, 2013</time>
    <div class="commit-title">
        <a href="/zurb/foundation/commit/17ed204910301f25ac7bc44dd59bf9400b1690c3" class="message">Move js to root for Mark.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ba52c44d32ef8a3ff275285ade82db30?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mrsweaters">mrsweaters</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/zurb/foundation/blob/5fe1c51560454b04fc8ca4af5ec9b5ff42735b6d/js/vendor/custom.modernizr.js" data-title="foundation/js/vendor/custom.modernizr.js at master · zurb/foundation · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>4 lines (4 sloc)</span>
                <span>9.287 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/zurb/foundation/edit/master/js/vendor/custom.modernizr.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/zurb/foundation/raw/master/js/vendor/custom.modernizr.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/zurb/foundation/blame/master/js/vendor/custom.modernizr.js" class="button minibutton ">Blame</a>
                  <a href="/zurb/foundation/commits/master/js/vendor/custom.modernizr.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* Modernizr 2.6.2 (Custom Build) | MIT &amp; BSD</span></div><div class='line' id='LC2'><span class="cm"> * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load</span></div><div class='line' id='LC3'><span class="cm"> */</span></div><div class='line' id='LC4'><span class="p">;</span><span class="nb">window</span><span class="p">.</span><span class="nx">Modernizr</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">function</span> <span class="nx">y</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">j</span><span class="p">.</span><span class="nx">cssText</span><span class="o">=</span><span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">z</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">y</span><span class="p">(</span><span class="nx">m</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">)</span><span class="o">+</span><span class="p">(</span><span class="nx">b</span><span class="o">||</span><span class="s2">&quot;&quot;</span><span class="p">))}</span><span class="kd">function</span> <span class="nx">A</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="k">typeof</span> <span class="nx">a</span><span class="o">===</span><span class="nx">b</span><span class="p">}</span><span class="kd">function</span> <span class="nx">B</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span><span class="o">!!~</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">C</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">e</span> <span class="k">in</span> <span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">a</span><span class="p">[</span><span class="nx">e</span><span class="p">]];</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="o">!==</span><span class="nx">c</span><span class="p">)</span><span class="k">return</span> <span class="nx">d</span><span class="o">===!</span><span class="mi">1</span><span class="o">?</span><span class="nx">a</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="nx">A</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">d</span><span class="o">||</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="nx">f</span><span class="p">}</span><span class="k">return</span><span class="o">!</span><span class="mi">1</span><span class="p">}</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="s2">&quot;2.6.2&quot;</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="p">{},</span><span class="nx">f</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="s2">&quot;modernizr&quot;</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">h</span><span class="p">),</span><span class="nx">j</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="p">{}.</span><span class="nx">toString</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="s2">&quot; -webkit- -moz- -o- -ms- &quot;</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">),</span><span class="nx">n</span><span class="o">=</span><span class="p">{</span><span class="nx">svg</span><span class="o">:</span><span class="s2">&quot;http://www.w3.org/2000/svg&quot;</span><span class="p">},</span><span class="nx">o</span><span class="o">=</span><span class="p">{},</span><span class="nx">p</span><span class="o">=</span><span class="p">{},</span><span class="nx">q</span><span class="o">=</span><span class="p">{},</span><span class="nx">r</span><span class="o">=</span><span class="p">[],</span><span class="nx">s</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">u</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">),</span><span class="nx">m</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="nx">m</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span><span class="k">while</span><span class="p">(</span><span class="nx">d</span><span class="o">--</span><span class="p">)</span><span class="nx">j</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">),</span><span class="nx">j</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">e</span><span class="o">?</span><span class="nx">e</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">:</span><span class="nx">h</span><span class="o">+</span><span class="p">(</span><span class="nx">d</span><span class="o">+</span><span class="mi">1</span><span class="p">),</span><span class="nx">l</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">j</span><span class="p">);</span><span class="k">return</span> <span class="nx">f</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;&amp;#173;&quot;</span><span class="p">,</span><span class="s1">&#39;&lt;style id=&quot;s&#39;</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;&lt;/style&gt;&quot;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">l</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">h</span><span class="p">,(</span><span class="nx">m</span><span class="o">?</span><span class="nx">l</span><span class="o">:</span><span class="nx">n</span><span class="p">).</span><span class="nx">innerHTML</span><span class="o">+=</span><span class="nx">f</span><span class="p">,</span><span class="nx">n</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">l</span><span class="p">),</span><span class="nx">m</span><span class="o">||</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">n</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="o">=</span><span class="s2">&quot;hidden&quot;</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="o">=</span><span class="s2">&quot;hidden&quot;</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">n</span><span class="p">)),</span><span class="nx">i</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">m</span><span class="o">?</span><span class="nx">l</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">l</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">n</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="o">=</span><span class="nx">k</span><span class="p">),</span><span class="o">!!</span><span class="nx">i</span><span class="p">},</span><span class="nx">v</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">matchMedia</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">msMatchMedia</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="k">return</span> <span class="nx">c</span><span class="p">(</span><span class="nx">b</span><span class="p">).</span><span class="nx">matches</span><span class="p">;</span><span class="kd">var</span> <span class="nx">d</span><span class="p">;</span><span class="k">return</span> <span class="nx">u</span><span class="p">(</span><span class="s2">&quot;@media &quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot; { #&quot;</span><span class="o">+</span><span class="nx">h</span><span class="o">+</span><span class="s2">&quot; { position: absolute; } }&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">d</span><span class="o">=</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="o">?</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kc">null</span><span class="p">)</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">)[</span><span class="s2">&quot;position&quot;</span><span class="p">]</span><span class="o">==</span><span class="s2">&quot;absolute&quot;</span><span class="p">}),</span><span class="nx">d</span><span class="p">},</span><span class="nx">w</span><span class="o">=</span><span class="p">{}.</span><span class="nx">hasOwnProperty</span><span class="p">,</span><span class="nx">x</span><span class="p">;</span><span class="o">!</span><span class="nx">A</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span><span class="s2">&quot;undefined&quot;</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="nx">A</span><span class="p">(</span><span class="nx">w</span><span class="p">.</span><span class="nx">call</span><span class="p">,</span><span class="s2">&quot;undefined&quot;</span><span class="p">)</span><span class="o">?</span><span class="nx">x</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">w</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="o">:</span><span class="nx">x</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span> <span class="k">in</span> <span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">b</span><span class="p">],</span><span class="s2">&quot;undefined&quot;</span><span class="p">)},</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span><span class="o">||</span><span class="p">(</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">bind</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">c</span><span class="o">!=</span><span class="s2">&quot;function&quot;</span><span class="p">)</span><span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">;</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">s</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span><span class="mi">1</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="kd">function</span><span class="p">(){};</span><span class="nx">a</span><span class="p">.</span><span class="nx">prototype</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="k">new</span> <span class="nx">a</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span><span class="k">return</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span><span class="o">===</span><span class="nx">g</span><span class="o">?</span><span class="nx">g</span><span class="o">:</span><span class="nx">f</span><span class="p">}</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">s</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)))};</span><span class="k">return</span> <span class="nx">e</span><span class="p">}),</span><span class="nx">o</span><span class="p">.</span><span class="nx">touch</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">c</span><span class="p">;</span><span class="k">return</span><span class="s2">&quot;ontouchstart&quot;</span><span class="k">in</span> <span class="nx">a</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">DocumentTouch</span><span class="o">&amp;&amp;</span><span class="nx">b</span> <span class="k">instanceof</span> <span class="nx">DocumentTouch</span><span class="o">?</span><span class="nx">c</span><span class="o">=!</span><span class="mi">0</span><span class="o">:</span><span class="nx">u</span><span class="p">([</span><span class="s2">&quot;@media (&quot;</span><span class="p">,</span><span class="nx">m</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;touch-enabled),(&quot;</span><span class="p">),</span><span class="nx">h</span><span class="p">,</span><span class="s2">&quot;)&quot;</span><span class="p">,</span><span class="s2">&quot;{#modernizr{top:9px;position:absolute}}&quot;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">offsetTop</span><span class="o">===</span><span class="mi">9</span><span class="p">}),</span><span class="nx">c</span><span class="p">},</span><span class="nx">o</span><span class="p">.</span><span class="nx">svg</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!!</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElementNS</span><span class="o">&amp;&amp;!!</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">svg</span><span class="p">,</span><span class="s2">&quot;svg&quot;</span><span class="p">).</span><span class="nx">createSVGRect</span><span class="p">},</span><span class="nx">o</span><span class="p">.</span><span class="nx">inlinesvg</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s2">&quot;&lt;svg/&gt;&quot;</span><span class="p">,(</span><span class="nx">a</span><span class="p">.</span><span class="nx">firstChild</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">.</span><span class="nx">namespaceURI</span><span class="p">)</span><span class="o">==</span><span class="nx">n</span><span class="p">.</span><span class="nx">svg</span><span class="p">},</span><span class="nx">o</span><span class="p">.</span><span class="nx">svgclippaths</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!!</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElementNS</span><span class="o">&amp;&amp;</span><span class="sr">/SVGClipPath/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">svg</span><span class="p">,</span><span class="s2">&quot;clipPath&quot;</span><span class="p">)))};</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">D</span> <span class="k">in</span> <span class="nx">o</span><span class="p">)</span><span class="nx">x</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">D</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nx">D</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">e</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="o">=</span><span class="nx">o</span><span class="p">[</span><span class="nx">D</span><span class="p">](),</span><span class="nx">r</span><span class="p">.</span><span class="nx">push</span><span class="p">((</span><span class="nx">e</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="s2">&quot;no-&quot;</span><span class="p">)</span><span class="o">+</span><span class="nx">t</span><span class="p">));</span><span class="k">return</span> <span class="nx">e</span><span class="p">.</span><span class="nx">addTest</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">==</span><span class="s2">&quot;object&quot;</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">x</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">addTest</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">d</span><span class="p">]);</span><span class="k">else</span><span class="p">{</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">!==</span><span class="nx">c</span><span class="p">)</span><span class="k">return</span> <span class="nx">e</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">b</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">?</span><span class="nx">b</span><span class="p">()</span><span class="o">:</span><span class="nx">b</span><span class="p">,</span><span class="k">typeof</span> <span class="nx">f</span><span class="o">!=</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">className</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">b</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="s2">&quot;no-&quot;</span><span class="p">)</span><span class="o">+</span><span class="nx">a</span><span class="p">),</span><span class="nx">e</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">}</span><span class="k">return</span> <span class="nx">e</span><span class="p">},</span><span class="nx">y</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">i</span><span class="o">=</span><span class="nx">k</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">function</span> <span class="nx">k</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;p&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s2">&quot;x&lt;style&gt;&quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;&lt;/style&gt;&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">l</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">elements</span><span class="p">;</span><span class="k">return</span> <span class="k">typeof</span> <span class="nx">a</span><span class="o">==</span><span class="s2">&quot;string&quot;</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">i</span><span class="p">[</span><span class="nx">a</span><span class="p">[</span><span class="nx">g</span><span class="p">]];</span><span class="k">return</span> <span class="nx">b</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="p">{},</span><span class="nx">h</span><span class="o">++</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">g</span><span class="p">]</span><span class="o">=</span><span class="nx">h</span><span class="p">,</span><span class="nx">i</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="p">}</span><span class="kd">function</span> <span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">f</span><span class="p">){</span><span class="nx">c</span><span class="o">||</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">f</span><span class="o">||</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">m</span><span class="p">(</span><span class="nx">c</span><span class="p">));</span><span class="kd">var</span> <span class="nx">g</span><span class="p">;</span><span class="k">return</span> <span class="nx">f</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">?</span><span class="nx">g</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">a</span><span class="p">].</span><span class="nx">cloneNode</span><span class="p">()</span><span class="o">:</span><span class="nx">e</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">g</span><span class="o">=</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">a</span><span class="p">)).</span><span class="nx">cloneNode</span><span class="p">()</span><span class="o">:</span><span class="nx">g</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">canHaveChildren</span><span class="o">&amp;&amp;!</span><span class="nx">d</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">frag</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span><span class="o">:</span><span class="nx">g</span><span class="p">}</span><span class="kd">function</span> <span class="nx">o</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="nx">a</span><span class="o">||</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="o">||</span><span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">frag</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(),</span><span class="nx">e</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">l</span><span class="p">(),</span><span class="nx">g</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="k">for</span><span class="p">(;</span><span class="nx">e</span><span class="o">&lt;</span><span class="nx">g</span><span class="p">;</span><span class="nx">e</span><span class="o">++</span><span class="p">)</span><span class="nx">d</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="nx">e</span><span class="p">]);</span><span class="k">return</span> <span class="nx">d</span><span class="p">}</span><span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">cache</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">cache</span><span class="o">=</span><span class="p">{},</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElem</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">createElement</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">createFrag</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">frag</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createFrag</span><span class="p">()),</span><span class="nx">a</span><span class="p">.</span><span class="nx">createElement</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="k">return</span> <span class="nx">r</span><span class="p">.</span><span class="nx">shivMethods</span><span class="o">?</span><span class="nx">n</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">c</span><span class="p">)},</span><span class="nx">a</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="o">=</span><span class="nb">Function</span><span class="p">(</span><span class="s2">&quot;h,f&quot;</span><span class="p">,</span><span class="s2">&quot;return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&amp;&amp;(&quot;</span><span class="o">+</span><span class="nx">l</span><span class="p">().</span><span class="nx">join</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\w+/g</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">createElem</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">frag</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="s1">&#39;c(&quot;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s1">&#39;&quot;)&#39;</span><span class="p">})</span><span class="o">+</span><span class="s2">&quot;);return n}&quot;</span><span class="p">)(</span><span class="nx">r</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">frag</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">q</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">||</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">);</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">m</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span> <span class="nx">r</span><span class="p">.</span><span class="nx">shivCSS</span><span class="o">&amp;&amp;!</span><span class="nx">f</span><span class="o">&amp;&amp;!</span><span class="nx">c</span><span class="p">.</span><span class="nx">hasCSS</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">hasCSS</span><span class="o">=!!</span><span class="nx">k</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="s2">&quot;article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}&quot;</span><span class="p">)),</span><span class="nx">j</span><span class="o">||</span><span class="nx">p</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">a</span><span class="p">}</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">html5</span><span class="o">||</span><span class="p">{},</span><span class="nx">d</span><span class="o">=</span><span class="sr">/^&lt;|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="sr">/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="s2">&quot;_html5shiv&quot;</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="p">{},</span><span class="nx">j</span><span class="p">;(</span><span class="kd">function</span><span class="p">(){</span><span class="k">try</span><span class="p">{</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">);</span><span class="nx">a</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s2">&quot;&lt;xyz&gt;&lt;/xyz&gt;&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="s2">&quot;hidden&quot;</span><span class="k">in</span> <span class="nx">a</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">.</span><span class="nx">length</span><span class="o">==</span><span class="mi">1</span><span class="o">||</span><span class="kd">function</span><span class="p">(){</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="p">();</span><span class="k">return</span> <span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">cloneNode</span><span class="o">==</span><span class="s2">&quot;undefined&quot;</span><span class="o">||</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">createDocumentFragment</span><span class="o">==</span><span class="s2">&quot;undefined&quot;</span><span class="o">||</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">createElement</span><span class="o">==</span><span class="s2">&quot;undefined&quot;</span><span class="p">}()}</span><span class="k">catch</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="nx">f</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">j</span><span class="o">=!</span><span class="mi">0</span><span class="p">}})();</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="p">{</span><span class="nx">elements</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">elements</span><span class="o">||</span><span class="s2">&quot;abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video&quot;</span><span class="p">,</span><span class="nx">shivCSS</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">shivCSS</span><span class="o">!==!</span><span class="mi">1</span><span class="p">,</span><span class="nx">supportsUnknownElements</span><span class="o">:</span><span class="nx">j</span><span class="p">,</span><span class="nx">shivMethods</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">shivMethods</span><span class="o">!==!</span><span class="mi">1</span><span class="p">,</span><span class="nx">type</span><span class="o">:</span><span class="s2">&quot;default&quot;</span><span class="p">,</span><span class="nx">shivDocument</span><span class="o">:</span><span class="nx">q</span><span class="p">,</span><span class="nx">createElement</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">createDocumentFragment</span><span class="o">:</span><span class="nx">o</span><span class="p">};</span><span class="nx">a</span><span class="p">.</span><span class="nx">html5</span><span class="o">=</span><span class="nx">r</span><span class="p">,</span><span class="nx">q</span><span class="p">(</span><span class="nx">b</span><span class="p">)}(</span><span class="k">this</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">_version</span><span class="o">=</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">_prefixes</span><span class="o">=</span><span class="nx">m</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">mq</span><span class="o">=</span><span class="nx">v</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">testStyles</span><span class="o">=</span><span class="nx">u</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">className</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|\s)no-js(\s|$)/</span><span class="p">,</span><span class="s2">&quot;$1$2&quot;</span><span class="p">)</span><span class="o">+</span><span class="p">(</span><span class="nx">f</span><span class="o">?</span><span class="s2">&quot; js &quot;</span><span class="o">+</span><span class="nx">r</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">),</span><span class="nx">e</span><span class="p">}(</span><span class="k">this</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nb">document</span><span class="p">),</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">function</span> <span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;[object Function]&quot;</span><span class="o">==</span><span class="nx">o</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;string&quot;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">f</span><span class="p">(){}</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="o">!</span><span class="nx">a</span><span class="o">||</span><span class="s2">&quot;loaded&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">||</span><span class="s2">&quot;complete&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">||</span><span class="s2">&quot;uninitialized&quot;</span><span class="o">==</span><span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span><span class="nx">q</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">a</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">t</span><span class="o">?</span><span class="nx">m</span><span class="p">(</span><span class="kd">function</span><span class="p">(){(</span><span class="s2">&quot;c&quot;</span><span class="o">==</span><span class="nx">a</span><span class="p">.</span><span class="nx">t</span><span class="o">?</span><span class="nx">B</span><span class="p">.</span><span class="nx">injectCss</span><span class="o">:</span><span class="nx">B</span><span class="p">.</span><span class="nx">injectJs</span><span class="p">)(</span><span class="nx">a</span><span class="p">.</span><span class="nx">s</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">e</span><span class="p">,</span><span class="mi">1</span><span class="p">)},</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">a</span><span class="p">(),</span><span class="nx">h</span><span class="p">())</span><span class="o">:</span><span class="nx">q</span><span class="o">=</span><span class="mi">0</span><span class="p">}</span><span class="kd">function</span> <span class="nx">i</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">){</span><span class="kd">function</span> <span class="nx">k</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">u</span><span class="p">.</span><span class="nx">r</span><span class="o">=</span><span class="nx">o</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="o">!</span><span class="nx">q</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(),</span><span class="nx">l</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="nx">b</span><span class="p">)){</span><span class="s2">&quot;img&quot;</span><span class="o">!=</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">m</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">t</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">l</span><span class="p">)},</span><span class="mi">50</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span> <span class="k">in</span> <span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">])</span><span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">].</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">][</span><span class="nx">d</span><span class="p">].</span><span class="nx">onload</span><span class="p">()}}</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="nx">j</span><span class="o">||</span><span class="nx">B</span><span class="p">.</span><span class="nx">errorTimeout</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">o</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">u</span><span class="o">=</span><span class="p">{</span><span class="nx">t</span><span class="o">:</span><span class="nx">d</span><span class="p">,</span><span class="nx">s</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">e</span><span class="o">:</span><span class="nx">f</span><span class="p">,</span><span class="nx">a</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">x</span><span class="o">:</span><span class="nx">j</span><span class="p">};</span><span class="mi">1</span><span class="o">===</span><span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=</span><span class="p">[]),</span><span class="s2">&quot;object&quot;</span><span class="o">==</span><span class="nx">a</span><span class="o">?</span><span class="nx">l</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">c</span><span class="o">:</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">l</span><span class="p">.</span><span class="nx">type</span><span class="o">=</span><span class="nx">a</span><span class="p">),</span><span class="nx">l</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="s2">&quot;0&quot;</span><span class="p">,</span><span class="nx">l</span><span class="p">.</span><span class="nx">onerror</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">k</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">r</span><span class="p">)},</span><span class="nx">p</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="s2">&quot;img&quot;</span><span class="o">!=</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="o">||</span><span class="mi">2</span><span class="o">===</span><span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">?</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">s</span><span class="o">?</span><span class="kc">null</span><span class="o">:</span><span class="nx">n</span><span class="p">),</span><span class="nx">m</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">))</span><span class="o">:</span><span class="nx">y</span><span class="p">[</span><span class="nx">c</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">l</span><span class="p">))}</span><span class="kd">function</span> <span class="nx">j</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">f</span><span class="p">){</span><span class="k">return</span> <span class="nx">q</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="o">||</span><span class="s2">&quot;j&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">?</span><span class="nx">i</span><span class="p">(</span><span class="s2">&quot;c&quot;</span><span class="o">==</span><span class="nx">b</span><span class="o">?</span><span class="nx">v</span><span class="o">:</span><span class="nx">u</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">i</span><span class="o">++</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">f</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">i</span><span class="o">++</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="mi">1</span><span class="o">==</span><span class="nx">p</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">()),</span><span class="k">this</span><span class="p">}</span><span class="kd">function</span> <span class="nx">k</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">B</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">loader</span><span class="o">=</span><span class="p">{</span><span class="nx">load</span><span class="o">:</span><span class="nx">j</span><span class="p">,</span><span class="nx">i</span><span class="o">:</span><span class="mi">0</span><span class="p">},</span><span class="nx">a</span><span class="p">}</span><span class="kd">var</span> <span class="nx">l</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">o</span><span class="o">=</span><span class="p">{}.</span><span class="nx">toString</span><span class="p">,</span><span class="nx">p</span><span class="o">=</span><span class="p">[],</span><span class="nx">q</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="s2">&quot;MozAppearance&quot;</span><span class="k">in</span> <span class="nx">l</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="nx">r</span><span class="o">&amp;&amp;!!</span><span class="nx">b</span><span class="p">.</span><span class="nx">createRange</span><span class="p">().</span><span class="nx">compareNode</span><span class="p">,</span><span class="nx">t</span><span class="o">=</span><span class="nx">s</span><span class="o">?</span><span class="nx">l</span><span class="o">:</span><span class="nx">n</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">opera</span><span class="o">&amp;&amp;</span><span class="s2">&quot;[object Opera]&quot;</span><span class="o">==</span><span class="nx">o</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">opera</span><span class="p">),</span><span class="nx">l</span><span class="o">=!!</span><span class="nx">b</span><span class="p">.</span><span class="nx">attachEvent</span><span class="o">&amp;&amp;!</span><span class="nx">l</span><span class="p">,</span><span class="nx">u</span><span class="o">=</span><span class="nx">r</span><span class="o">?</span><span class="s2">&quot;object&quot;</span><span class="o">:</span><span class="nx">l</span><span class="o">?</span><span class="s2">&quot;script&quot;</span><span class="o">:</span><span class="s2">&quot;img&quot;</span><span class="p">,</span><span class="nx">v</span><span class="o">=</span><span class="nx">l</span><span class="o">?</span><span class="s2">&quot;script&quot;</span><span class="o">:</span><span class="nx">u</span><span class="p">,</span><span class="nx">w</span><span class="o">=</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;[object Array]&quot;</span><span class="o">==</span><span class="nx">o</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">x</span><span class="o">=</span><span class="p">[],</span><span class="nx">y</span><span class="o">=</span><span class="p">{},</span><span class="nx">z</span><span class="o">=</span><span class="p">{</span><span class="nx">timeout</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">timeout</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span><span class="nx">a</span><span class="p">}},</span><span class="nx">A</span><span class="p">,</span><span class="nx">B</span><span class="p">;</span><span class="nx">B</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;!&quot;</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">pop</span><span class="p">(),</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="p">{</span><span class="nx">url</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">origUrl</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">prefixes</span><span class="o">:</span><span class="nx">a</span><span class="p">},</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">d</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="nx">g</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">),(</span><span class="nx">e</span><span class="o">=</span><span class="nx">z</span><span class="p">[</span><span class="nx">g</span><span class="p">.</span><span class="nx">shift</span><span class="p">()])</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">e</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="nx">g</span><span class="p">));</span><span class="k">for</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="nx">c</span><span class="o">=</span><span class="nx">x</span><span class="p">[</span><span class="nx">f</span><span class="p">](</span><span class="nx">c</span><span class="p">);</span><span class="k">return</span> <span class="nx">c</span><span class="p">}</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nx">b</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">j</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">autoCallback</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">).</span><span class="nx">pop</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">).</span><span class="nx">shift</span><span class="p">(),</span><span class="nx">i</span><span class="p">.</span><span class="nx">bypass</span><span class="o">||</span><span class="p">(</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">d</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">?</span><span class="nx">e</span><span class="o">:</span><span class="nx">e</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">||</span><span class="nx">e</span><span class="p">[</span><span class="nx">g</span><span class="p">]</span><span class="o">||</span><span class="nx">e</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">).</span><span class="nx">pop</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]]),</span><span class="nx">i</span><span class="p">.</span><span class="nx">instead</span><span class="o">?</span><span class="nx">i</span><span class="p">.</span><span class="nx">instead</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">h</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">y</span><span class="p">[</span><span class="nx">i</span><span class="p">.</span><span class="nx">url</span><span class="p">]</span><span class="o">?</span><span class="nx">i</span><span class="p">.</span><span class="nx">noexec</span><span class="o">=!</span><span class="mi">0</span><span class="o">:</span><span class="nx">y</span><span class="p">[</span><span class="nx">i</span><span class="p">.</span><span class="nx">url</span><span class="p">]</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span><span class="nx">i</span><span class="p">.</span><span class="nx">forceCSS</span><span class="o">||!</span><span class="nx">i</span><span class="p">.</span><span class="nx">forceJS</span><span class="o">&amp;&amp;</span><span class="s2">&quot;css&quot;</span><span class="o">==</span><span class="nx">i</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">).</span><span class="nx">pop</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">).</span><span class="nx">shift</span><span class="p">()</span><span class="o">?</span><span class="s2">&quot;c&quot;</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">i</span><span class="p">.</span><span class="nx">noexec</span><span class="p">,</span><span class="nx">i</span><span class="p">.</span><span class="nx">attrs</span><span class="p">,</span><span class="nx">i</span><span class="p">.</span><span class="nx">timeout</span><span class="p">),(</span><span class="nx">d</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">||</span><span class="nx">d</span><span class="p">(</span><span class="nx">j</span><span class="p">))</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">k</span><span class="p">(),</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">origUrl</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">g</span><span class="p">),</span><span class="nx">j</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">origUrl</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">g</span><span class="p">),</span><span class="nx">y</span><span class="p">[</span><span class="nx">i</span><span class="p">.</span><span class="nx">url</span><span class="p">]</span><span class="o">=</span><span class="mi">2</span><span class="p">})))}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">))</span><span class="nx">c</span><span class="o">||</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span><span class="nx">k</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">l</span><span class="p">()}),</span><span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">h</span><span class="p">);</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nb">Object</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">===</span><span class="nx">a</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">n</span> <span class="k">in</span> <span class="nx">m</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">c</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="o">++</span><span class="p">;</span><span class="k">return</span> <span class="nx">b</span><span class="p">}(),</span><span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="nx">c</span><span class="o">&amp;&amp;!--</span><span class="nx">m</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">?</span><span class="nx">j</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span><span class="nx">k</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">l</span><span class="p">()}</span><span class="o">:</span><span class="nx">j</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">l</span><span class="p">()}}(</span><span class="nx">k</span><span class="p">[</span><span class="nx">n</span><span class="p">])),</span><span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">n</span><span class="p">],</span><span class="nx">j</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">h</span><span class="p">))}</span><span class="k">else</span><span class="o">!</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">l</span><span class="p">()}</span><span class="kd">var</span> <span class="nx">h</span><span class="o">=!!</span><span class="nx">a</span><span class="p">.</span><span class="nx">test</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">load</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">both</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">callback</span><span class="o">||</span><span class="nx">f</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="nx">j</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">complete</span><span class="o">||</span><span class="nx">f</span><span class="p">,</span><span class="nx">m</span><span class="p">,</span><span class="nx">n</span><span class="p">;</span><span class="nx">c</span><span class="p">(</span><span class="nx">h</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">yep</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">nope</span><span class="p">,</span><span class="o">!!</span><span class="nx">i</span><span class="p">),</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">(</span><span class="nx">i</span><span class="p">)}</span><span class="kd">var</span> <span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">yepnope</span><span class="p">.</span><span class="nx">loader</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">(</span><span class="nx">a</span><span class="p">))</span><span class="nx">g</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">l</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">w</span><span class="p">(</span><span class="nx">a</span><span class="p">))</span><span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span><span class="nx">j</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span><span class="nx">e</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">?</span><span class="nx">g</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="nx">l</span><span class="p">,</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span><span class="nx">w</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">?</span><span class="nx">B</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">:</span><span class="nb">Object</span><span class="p">(</span><span class="nx">j</span><span class="p">)</span><span class="o">===</span><span class="nx">j</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span><span class="nx">l</span><span class="p">);</span><span class="k">else</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">===</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">l</span><span class="p">)},</span><span class="nx">B</span><span class="p">.</span><span class="nx">addPrefix</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="nx">z</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">},</span><span class="nx">B</span><span class="p">.</span><span class="nx">addFilter</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">x</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">)},</span><span class="nx">B</span><span class="p">.</span><span class="nx">errorTimeout</span><span class="o">=</span><span class="mi">1</span><span class="nx">e4</span><span class="p">,</span><span class="kc">null</span><span class="o">==</span><span class="nx">b</span><span class="p">.</span><span class="nx">readyState</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">readyState</span><span class="o">=</span><span class="s2">&quot;loading&quot;</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span><span class="nx">A</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">b</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span><span class="nx">A</span><span class="p">,</span><span class="mi">0</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">readyState</span><span class="o">=</span><span class="s2">&quot;complete&quot;</span><span class="p">},</span><span class="mi">0</span><span class="p">)),</span><span class="nx">a</span><span class="p">.</span><span class="nx">yepnope</span><span class="o">=</span><span class="nx">k</span><span class="p">(),</span><span class="nx">a</span><span class="p">.</span><span class="nx">yepnope</span><span class="p">.</span><span class="nx">executeStack</span><span class="o">=</span><span class="nx">h</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">yepnope</span><span class="p">.</span><span class="nx">injectJs</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">j</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">),</span><span class="nx">l</span><span class="p">,</span><span class="nx">o</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">e</span><span class="o">||</span><span class="nx">B</span><span class="p">.</span><span class="nx">errorTimeout</span><span class="p">;</span><span class="nx">k</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">o</span> <span class="k">in</span> <span class="nx">d</span><span class="p">)</span><span class="nx">k</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="nx">d</span><span class="p">[</span><span class="nx">o</span><span class="p">]);</span><span class="nx">c</span><span class="o">=</span><span class="nx">j</span><span class="o">?</span><span class="nx">h</span><span class="o">:</span><span class="nx">c</span><span class="o">||</span><span class="nx">f</span><span class="p">,</span><span class="nx">k</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="o">!</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">(</span><span class="nx">k</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">l</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">c</span><span class="p">(),</span><span class="nx">k</span><span class="p">.</span><span class="nx">onload</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kc">null</span><span class="p">)},</span><span class="nx">m</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">l</span><span class="o">||</span><span class="p">(</span><span class="nx">l</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span><span class="nx">c</span><span class="p">(</span><span class="mi">1</span><span class="p">))},</span><span class="nx">e</span><span class="p">),</span><span class="nx">i</span><span class="o">?</span><span class="nx">k</span><span class="p">.</span><span class="nx">onload</span><span class="p">()</span><span class="o">:</span><span class="nx">n</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">n</span><span class="p">)},</span><span class="nx">a</span><span class="p">.</span><span class="nx">yepnope</span><span class="p">.</span><span class="nx">injectCss</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">i</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;link&quot;</span><span class="p">),</span><span class="nx">j</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">i</span><span class="o">?</span><span class="nx">h</span><span class="o">:</span><span class="nx">c</span><span class="o">||</span><span class="nx">f</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">href</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">rel</span><span class="o">=</span><span class="s2">&quot;stylesheet&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="o">=</span><span class="s2">&quot;text/css&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">j</span> <span class="k">in</span> <span class="nx">d</span><span class="p">)</span><span class="nx">e</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">j</span><span class="p">,</span><span class="nx">d</span><span class="p">[</span><span class="nx">j</span><span class="p">]);</span><span class="nx">g</span><span class="o">||</span><span class="p">(</span><span class="nx">n</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">n</span><span class="p">),</span><span class="nx">m</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span><span class="mi">0</span><span class="p">))}}(</span><span class="k">this</span><span class="p">,</span><span class="nb">document</span><span class="p">),</span><span class="nx">Modernizr</span><span class="p">.</span><span class="nx">load</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="nx">yepnope</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">window</span><span class="p">,[].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span><span class="mi">0</span><span class="p">))},</span><span class="nx">Modernizr</span><span class="p">.</span><span class="nx">addTest</span><span class="p">(</span><span class="s2">&quot;ie8compat&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentMode</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentMode</span><span class="o">===</span><span class="mi">7</span><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1359500886" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.18321s from fe19.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/zurb/foundation/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.18372' data-host='fe19'></span>
    
  </body>
</html>

