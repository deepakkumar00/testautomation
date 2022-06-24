Feature: Filter the Order List

  Background: Move to Order Page
    Given User is on order page

  @filter
  Scenario: user filters the order list based on order status
    When Selects an status from drop down
    And Clicks on filter button
    Then Filtered table appears
