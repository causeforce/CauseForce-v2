<header class="banner">
  <div class="container menu-cont">
<!--    <a class="brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>-->
    <a class="brand" href="<?= esc_url(home_url('/')); ?>">
        <img src="../wp-content/uploads/2017/10/Group-61.svg" alt="">
    </a>
    <nav class="cf-nav">
        <div class="block">
            <a href="#" class="bt-menu">
              <span></span>
            </a>
        </div>
    </nav>
    <div class="mobile-overlay">
       <div class="container">
            <a class="brand mobile-brand" href="<?= esc_url(home_url('/')); ?>">
                <img src="../wp-content/uploads/2017/10/Group-61.svg" alt="Logo">
            </a>
            <div class="burger_menu">
                <?php
                if (has_nav_menu('primary_navigation')) :
                    wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
                endif;
                ?>
            </div>
            <div class="row mobile-footer">
                <div class="col-md-4">
                    <p>
                        12301 Wilshire Blvd., Suite 430,<br>
                        Los Angeles, CA 90025
                    </p>
                </div>
                <div class="col-md-4">
                    <p><strong>P</strong> 310 314 1618</p>
                    <p><strong>F</strong> 310 314 1718</p>
                </div>
                <div class="col-md-4">
                    <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
  </div>
</header>
