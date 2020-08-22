// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter'),
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/fluent-angular-testing'),
      reports: ['html', 'lcovonly', 'json', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        // set to `true` to let the test command pass when thresholds are not met
        emitWarning: false,
        // thresholds for all files
        global: {
          statements: 90,
          lines: 90,
          branches: 90,
          functions: 90
        },
        // thresholds per file
        each: {
          statements: 80,
          lines: 60,
          branches: 60,
          functions: 80,
        }
      },
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['spec', 'coverage-istanbul']
      : ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
