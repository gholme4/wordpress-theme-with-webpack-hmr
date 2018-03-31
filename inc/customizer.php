<?php
/**
 * WordPress Theme with Webpack and HMR Theme Customizer
 *
 * @package basic_bootstrap_theme_with_Webpack_and_HMR
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function basic_bootstrap_theme_with_webpack_and_hmr_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'basic_bootstrap_theme_with_webpack_and_hmr_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'basic_bootstrap_theme_with_webpack_and_hmr_customize_partial_blogdescription',
		) );
	}
}
add_action( 'customize_register', 'basic_bootstrap_theme_with_webpack_and_hmr_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function basic_bootstrap_theme_with_webpack_and_hmr_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function basic_bootstrap_theme_with_webpack_and_hmr_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function basic_bootstrap_theme_with_webpack_and_hmr_customize_preview_js() {
	wp_enqueue_script( 'basic-bootstrap-theme-with-webpack-and-hmr-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'basic_bootstrap_theme_with_webpack_and_hmr_customize_preview_js' );
