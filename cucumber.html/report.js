$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1_2.feature");
formatter.feature({
  "line": 3,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@activity1_2"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Testing login",
  "description": "",
  "id": "login-test;testing-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.loginPage()"
});
formatter.result({
  "duration": 14110109800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.user_manual_entry()"
});
formatter.result({
  "duration": 646750001,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.readTitleAndHeading()"
});
formatter.result({
  "duration": 175302100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 3043800601,
  "status": "passed"
});
});