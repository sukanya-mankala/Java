$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1_1.feature");
formatter.feature({
  "line": 2,
  "name": "First Test",
  "description": "",
  "id": "first-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_1"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Opening a webpage using Selenium",
  "description": "",
  "id": "first-test;opening-a-webpage-using-selenium",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Google Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User types in Cheese and hits ENTER",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Show how many search results were shown",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchSteps.userIsOnGooglePage()"
});
formatter.result({
  "duration": 13012807500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.userTypesInCheeseAndHitsENTER()"
});
formatter.result({
  "duration": 389496900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.showHowManySearchResultsWereShown()"
});
formatter.result({
  "duration": 1379251900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.closeTheBrowser()"
});
formatter.result({
  "duration": 1860869200,
  "status": "passed"
});
formatter.uri("Activity1_3.feature");
formatter.feature({
  "line": 2,
  "name": "Testing with Tags",
  "description": "",
  "id": "testing-with-tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_3"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Testing with Simple Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SimpleAlert"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks the Simple Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Alerts.alertsPage()"
});
formatter.result({
  "duration": 8310072200,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.simpleAlert()"
});
formatter.result({
  "duration": 241361400,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.alertscreen()"
});
formatter.result({
  "duration": 14445300,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.getInfo()"
});
formatter.result({
  "duration": 16134300,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.closeAlert()"
});
formatter.result({
  "duration": 43663000,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.closeBrowser()"
});
formatter.result({
  "duration": 1585637100,
  "status": "passed"
});
});