$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/magic/POMDemo/src/test/resources/features/googlequery.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Google Query Search",
  "description": "",
  "id": "google-query-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Search in Google",
  "description": "",
  "id": "google-query-search;search-in-google",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User enteres \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters \"\u003csearch\u003e\" in query",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks Enter",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be able to search results \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "google-query-search;search-in-google;",
  "rows": [
    {
      "cells": [
        "url",
        "search",
        "title"
      ],
      "line": 28,
      "id": "google-query-search;search-in-google;;1"
    },
    {
      "cells": [
        "https://www.google.com/?gws_rd\u003dssl",
        "hi",
        "hi - Google Search"
      ],
      "line": 29,
      "id": "google-query-search;search-in-google;;2"
    },
    {
      "cells": [
        "https://www.google.com/?gws_rd\u003dssl",
        "bye",
        "bye - Google Search"
      ],
      "line": 30,
      "id": "google-query-search;search-in-google;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3655707652,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search in Google",
  "description": "",
  "id": "google-query-search;search-in-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User enteres \"https://www.google.com/?gws_rd\u003dssl\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters \"hi\" in query",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks Enter",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be able to search results \"hi - Google Search\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/?gws_rd\u003dssl",
      "offset": 14
    }
  ],
  "location": "GoogleQueryStep.user_enteres(String)"
});
formatter.result({
  "duration": 3582432926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hi",
      "offset": 13
    }
  ],
  "location": "GoogleQueryStep.user_enters_in_query(String)"
});
formatter.result({
  "duration": 78445416,
  "status": "passed"
});
formatter.match({
  "location": "GoogleQueryStep.user_clicks_Enter()"
});
formatter.result({
  "duration": 2128654611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hi - Google Search",
      "offset": 39
    }
  ],
  "location": "GoogleQueryStep.user_should_be_able_to_search_results(String)"
});
formatter.result({
  "duration": 11914577,
  "status": "passed"
});
formatter.after({
  "duration": 897826443,
  "status": "passed"
});
formatter.before({
  "duration": 2539648828,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Search in Google",
  "description": "",
  "id": "google-query-search;search-in-google;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User enteres \"https://www.google.com/?gws_rd\u003dssl\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters \"bye\" in query",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks Enter",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should be able to search results \"bye - Google Search\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/?gws_rd\u003dssl",
      "offset": 14
    }
  ],
  "location": "GoogleQueryStep.user_enteres(String)"
});
formatter.result({
  "duration": 3210391925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bye",
      "offset": 13
    }
  ],
  "location": "GoogleQueryStep.user_enters_in_query(String)"
});
formatter.result({
  "duration": 94254695,
  "status": "passed"
});
formatter.match({
  "location": "GoogleQueryStep.user_clicks_Enter()"
});
formatter.result({
  "duration": 2620171782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bye - Google Search",
      "offset": 39
    }
  ],
  "location": "GoogleQueryStep.user_should_be_able_to_search_results(String)"
});
formatter.result({
  "duration": 15907741,
  "status": "passed"
});
formatter.after({
  "duration": 2298989091,
  "status": "passed"
});
});