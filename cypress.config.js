// const cypress = require("cypress");
// const { defineConfig } = require("cypress");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


 

// module.exports = defineConfig({
//   reporter : 'mochawesome',
//   defaultCommandTimeout: 8000,
//   pageLoadTimeout: 40000,
//   env :
//   {
//     url : "https://chick-fil-a-preprod.scloud.stibo.com/"
//   },
//   e2e: {
    
//     setupNodeEvents(on, config) 
//  {
//   // implement node event listeners here
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));


// },


//     specPattern:'cypress/integration/examples/BDD/*.feature'

//   },
// });

const cypress = require("cypress");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs')


    
module.exports = (on, config) => {
  require("cypress-localstorage-commands/plugin")(on, config);
  return config;
};

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);

    
on('task', {
  fileExists(path) { // there is a name and arguments for a task
    return fs.existsSync(path)
  },
})

on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
return config;
}

module.exports = defineConfig({
//  chromeWebSecurity: false,
  //experimentalSourceRewriting: true,

  
  // experimentalSessionAndOrigin: true,
  experimentalModifyObstructiveThirdPartyCode : true,
  video: true,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: true,
 // experimentalSkipDomainInjection : true,
  env :
  {
    // regionname : "test_062023_38",
    // username : "pimadmini@codifyd.com",
    // password : "Riversand@2022",
    // assert_var : "shamrockds",
   username: "navistarfs@riversand.com",
   password :"qEnm&b1A87a1",
   assert_var : "navistar",
   CYPRESS_uncaughtExceptionCapture: false,
  },
  e2e: {
  //  baseUrl: "https://shamrockds.riversand.com",
   baseUrl: "https://navistarfs.riversand.com/login",
  //  baseUrl: "https://main.d1akffsvkkwyuz.amplifyapp.com",
    chromeWebSecurity : false,
    experimentalStudio : true,
    experimentalOriginDependencies : true,
    experimentalOriginDependencies : true,
    watchForFileChanges: false,
    
   // specPattern: "cypress/integration/examples/Step_BDD/*.feature",
    // specPattern: "C:/Users/AJadhav/Abhi_Git_Revrsesand/Chic-Fila/cypress/integration/examples/Navistar_BDD/*.feature",

    // specPattern: "C://Users//Abhijit.Jadhav//Automation Data//Abhi_Git_Revrsesand_new//Chic-Fila//cypress//integration//examples//NavistarC_BDD//Navisatr_Wf.feature",
    // specPattern: "C://Users//Abhijit.Jadhav//Automation Data//Abhi_Git_Revrsesand_new//Chic-Fila//cypress//integration//examples//NavistarU_BDD//Navistar_Update.feature",
    // specPattern: "C://Users//Abhijit.Jadhav//Automation Data//Abhi_Git_Revrsesand_new//Chic-Fila//cypress//integration//examples//Navistar_L_VI//Navistar_L_VI.feature",
  //  
    // specPattern: "C://Users//Abhijit.Jadhav//Automation Data//Abhi_Git_Revrsesand_new//Chic-Fila//cypress//integration//examples//IE_Automation//IE_Automations.feature",

    // specPattern: "C://Users//Abhijit.Jadhav//Automation Data//Abhi_Git_Revrsesand_new//Chic-Fila//cypress//integration//examples//Timken_WF//Timkin_W.feature",
    // specPattern: "C://Users//Abhijit.Jadhav//Automation Data//Abhi_Git_Revrsesand_new//Chic-Fila//cypress//integration//examples//Timken_LinkProduct//Timken_LinkProd.feature",

  specPattern: "cypress/integration/examples",

  //"C://Users//sbavisa//CypressAutomation//cypress//integration//examples//BDD//cfabdd//cfa_stepdefinition.js"
  //"C://Users//sbavisa//CypressAutomation//cypress//integration//examples//step_BDD//cfabdd//cfa2_stepdefinition.js"
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 900000,
    includeShadowDom : true,
    setupNodeEvents,
  },
  
  
    
  
  
});
