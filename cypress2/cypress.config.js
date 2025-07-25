const { defineConfig } = require('cypress')
const {allureCypress} = require("allure-cypress/reporter")
const {platform, release, version} = require("node:os");

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        environmentInfo: {
          os_platform: platform(),
          os_release: release(),
          os_version: version(),
          node_version: process.version,
        },
        resultsDir: "allure-results",
      })
            return config;
    },
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    baseUrl: "**",
    env: {
      allureLogCypress:false,
      allureReuseAfterSpec: true,
      token: '**'
    }
  },
})