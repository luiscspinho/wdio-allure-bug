exports.config = {
  runner: "local",

  specs: ["*.spec.js"],

  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-web-security"],
        mobileEmulation: {
          deviceName: "iPhone 6"
        }
      }
    }
  ],
  logLevel: "error",
  bail: 0,
  sync: false,
  baseUrl: "http://www.google.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 10000,
  connectionRetryCount: 5,
  services: ["selenium-standalone"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "reports/allure-results"
      }
    ]
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000
  },

  before: () => {
    const chai = require("chai");
    global.expect = chai.expect;
    chai.Should();
  },
  // beforeCommand: function (commandName, args) {
  // },

  // beforeSuite: function (suite) {
  // },
  /**

  // beforeTest: function (test) {
  // },
  //   beforeHook: test => {},
  afterHook: async test => {
    if (test.error !== undefined) {
      await browser.takeScreenshot();
    }
  },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  afterTest: async test => {
    if (test.error !== undefined) {
      await browser.takeScreenshot();
    }
  },
  afterHook: async test => {
    if (test.error !== undefined) {
      await browser.takeScreenshot();
    }
  }

  // afterSuite: function (suite) {
  // },

  // afterCommand: function (commandName, args, result, error) {
  // },

  // after: function (result, capabilities, specs) {
  // },

  // onComplete() {
  // }

  // onReload: function(oldSessionId, newSessionId) {
  // }
};
