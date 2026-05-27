  
Feature: Login

  Scenario Outline: User can login with valid credentials

    Given the user enters the base URL "<url>"
    When the user enters "<username>" and "<password>"
    Then the user should be logged in successfully with the URL "<result>"

  Examples:
    | username       | password   | url                                   |result                                                   |
    | nan4cse@gmail.com   | Rocks143$ | https://rahulshettyacademy.com/client | https://rahulshettyacademy.com/client/#/dashboard/dash  |