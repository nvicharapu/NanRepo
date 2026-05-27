module.exports = {
  default: {
    // ✅ Step definition files
    require: [
      "tests/steps/**/*.ts",
    //  "tests/support/**/*.ts"   // optional (for hooks later)
    ],

    // ✅ Enable TypeScript execution
    requireModule: ["ts-node/register"],

    // ✅ Feature files location
    paths: ["tests/features/**/*.feature"],

    // ✅ Console output format
 /*   format: [
      "progress",               // simple console output
      "html:reports/cucumber-report.html" // optional HTML report
      
    ],
*/

 format: ["progress", "allure-cucumberjs/reporter"],


    // ✅ Avoid publish link spam
    publishQuiet: true,

    // ✅ Optional: increase timeout (useful for Playwright)
    timeout: 60000


    
  }
};
