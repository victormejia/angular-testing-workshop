// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-spec-reporter'),
      require('karma-istanbul-threshold')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'json', 'text-summary' ],
      fixWebpackSourcePaths: true
    },
    istanbulThresholdReporter: {
      src: 'coverage/coverage-final.json',
      reporters: ['text'],
      thresholds: {
        global: {
          statements: 90,
          branches: 90,
          lines: 90,
          functions: 90,
        },
        each: {
          statements: 80,
          branches: 60,
          lines: 60,
          functions: 80,
        },
      }
      },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['spec', 'coverage-istanbul', 'istanbul-threshold']
              : ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeCanaryHeadless'],
    singleRun: false
  });
};
