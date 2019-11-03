exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
         chromeOptions: {
           args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
         }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'firstTest'
}