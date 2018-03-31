<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package basic_bootstrap_theme_with_Webpack_and_HMR
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function basic_bootstrap_theme_with_webpack_and_hmr_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'basic_bootstrap_theme_with_webpack_and_hmr_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function basic_bootstrap_theme_with_webpack_and_hmr_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'basic_bootstrap_theme_with_webpack_and_hmr_pingback_header' );
