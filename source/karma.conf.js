// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '/source',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('@angular/material/')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/randomization-interface'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['coverage-istanbul', 'progress'],
    port: 9876,
    client: {
      captureConsole: false
    },
    combineBrowserReports: true,
    colors: true,
    logLevel: config.LOG_INFO,
    codeCoverage: true,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true,
    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      // thresholds for all files
      global: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100
      },
      // thresholds per file
      each: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100,
        overrides: {
          'app/component/**/*.js': {
            statements: 98
          }
        }
      }
    },
  });
};
