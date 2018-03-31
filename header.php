<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package basic_bootstrap_theme_with_Webpack_and_HMR
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'basic-bootstrap-theme-with-webpack-and-hmr' ); ?></a>


	<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		<a class="<?php echo esc_url( home_url( '/' ) ); ?> navbar-brand" href="#"><?php the_custom_logo(); ?> <?php bloginfo( 'name' ); ?></a>
		<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="navbar-collapse collapse" id="navbarCollapse" style="">

			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id' => 'primary-menu',
				'menu_class' => 'navbar-nav mr-auto',
				'container' => false,
				'depth' => 1,
				'fallback_cb' => 'WP_Bootstrap_Navwalker::fallback',
    			'walker' => new WP_Bootstrap_Navwalker()
			) );
			?>

			<form class="form-inline mt-2 mt-md-0" >
				<input class="form-control mr-sm-2" type="text" name="s" placeholder="<?php esc_html_e( 'Search', 'basic-bootstrap-theme-with-webpack-and-hmr' ); ?>" aria-label="<?php esc_html_e( 'Search', 'basic-bootstrap-theme-with-webpack-and-hmr' ); ?>">
				<button class="btn btn-outline-primary my-2 my-sm-0" type="submit"><?php esc_html_e( 'Search', 'basic-bootstrap-theme-with-webpack-and-hmr' ); ?></button>
			</form>
		</div>
	</nav>

	<div id="content" class="site-content">
