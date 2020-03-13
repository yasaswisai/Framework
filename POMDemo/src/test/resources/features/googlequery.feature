#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Google Query Search

  Scenario Outline: Search in Google
    Given User enteres "<url>"
    And User enters "<search>" in query
    When User clicks Enter
    Then User should be able to search results "<title>"

    Examples: 
      | url                                | search | title               |
      | https://www.google.com/?gws_rd=ssl | hi     | hi - Google Search  |
      | https://www.google.com/?gws_rd=ssl | bye    | bye - Google Search |
