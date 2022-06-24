Feature: Delete an Order

  Background: Move to Order Page
    Given User is on order page

  @delete
  Scenario: Test delete order without selecting order
    When Click on delete button
    And Accepts the alert message
    Then Warning alert must appear

  @delete
  Scenario: Test delete order after slecting an order
    When Select an order from the table
    And Click on delete button
    And Accepts the alert message
    Then A success message appears
