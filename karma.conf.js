// Karma configuration
// Generated on Sat Apr 18 2015 03:17:56 GMT+0800 (PHT)

var webpack = require('webpack');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
        'mocha'
    ],


    // list of files / patterns to load in the browser
    files: [
      // PhantomJS polyfill
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      // './node_modules/babel-core/browser-polyfill.js',
      './src/__tests__/component-spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
        'karma-mocha',
        'karma-phantomjs-launcher',
        'karma-webpack',
        'chai'
    ],

    webpack: {
          module: {
            loaders: [
              { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader?modules=common&stage=0" },
            ]
          },
          resolve: {
            extensions: ['', '.js', '.jsx', '.es6']
          },
          plugins: [new webpack.IgnorePlugin(/vertx/)],
          devtool: 'inline-source-map'
        },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './src/__tests__/component-spec.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
