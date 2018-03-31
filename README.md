## [Basic Bootstrap Theme with Webpack and HMR](https://gholme4.github.io/wordpress-theme-with-webpack-hmr/)

This WordPress theme demonstrates the use of Webpack for compiling assets during development. It includes the use of Bootstrap 4's SCSS components and features hot module replacement. HMR is triggered by changes to the source JS and CSS files. This theme is based on [Underscores](https://underscores.me/).

## Project setup
```shell

# Install NPM dependencies
npm install

```

### Compiling with Webpack

##### Compile assets and watch for changes
While developing, set the contstant `WP_ENVIRONMENT` to 'development' in `wp-config.php`.
```shell
npm run dev
```

##### Compile assets for production
```shell
npm run build
```

All JavaScript and SCSS source files reside in ```./assets/src```.

All compiled JavaScript files will reside in ```./assets/js```. All compiled CSS files will reside in ```/assets/css```.
