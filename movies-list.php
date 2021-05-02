<!DOCTYPE html>
<html>
   <?php include 'include/header.php' ?>   
    <body class="body">
        <header class="header header-horizontal header-view-pannel">
        	<?php include 'include/navbar.php' ?>        	
        </header>
        <section class="after-head d-flex section-text-white position-relative">
            <div class="d-background" data-image-src="http://via.placeholder.com/1920x1080" data-parallax="scroll"></div>
            <div class="d-background bg-black-80"></div>
            <div class="top-block top-inner container">
                <div class="top-block-content">
                    <h1 class="section-title">Movies list</h1>
                    <div class="page-breadcrumbs">
                        <a class="content-link" href="#">Home</a>
                        <span class="text-theme mx-2"><i class="fas fa-chevron-right"></i></span>
                        <span>Movies</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-long">
            <div class="container">
                <div class="section-pannel">
                    <div class="grid row">
                        <div class="col-md-10">
                            <form autocomplete="off">
                                <div class="row form-grid">
                                    <div class="col-sm-12 col-lg-12">                                   
                                         <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                            <div class="input-group">
                                              <input id="MetodoApi" name="MetodoApi" type="hidden" value="movie">
                                              <input type="text" id ="search_text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                                              <div class="input-group-append">
                                                <button class="btn btn-primary " id ="search_button" type="button">
                                                  <i class="fas fa-search fa-sm"></i>
                                                </button>
                                              </div>
                                            </div>
                                          </form>
                                    </div>
                                </div>
                            </form>
                        </div>                      
                    </div>               
					<div class="grid row">
	                        <div class="col-md-12">                          
	                            <div class="row form-grid" id="contentBody" >
	                            </div>
							</div>
					</div>
                </div>
            </div>
        </section>
        <a class="scroll-top disabled" href="#"><i class="fas fa-angle-up" aria-hidden="true"></i></a>
 		<?php include 'include/footer.php' ?>
        <!-- jQuery library -->
        <script src="./js/jquery-3.3.1.js"></script>
        <!-- Bootstrap -->
        <script src="./bootstrap/js/bootstrap.js"></script>
        <!-- Paralax.js -->
        <script src="./parallax.js/parallax.js"></script>
        <!-- Waypoints -->
        <script src="./waypoints/jquery.waypoints.min.js"></script>
        <!-- Slick carousel -->
        <script src="./slick/slick.min.js"></script>
        <!-- Magnific Popup -->
        <script src="./magnific-popup/jquery.magnific-popup.min.js"></script>
        <!-- Inits product scripts -->
        <script src="./js/script.js"></script>
           
        <!-- Page level custom scripts -->
        <script src="js/lib/default.js"></script>
    </body>
</html>