$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Features.feature");
formatter.feature({
  "name": "Delete an Order",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Move to Order Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on order page",
  "keyword": "Given "
});
formatter.match({
  "location": "Performer.user_is_on_order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test delete order without selecting order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "Performer.click_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accepts the alert message",
  "keyword": "And "
});
formatter.match({
  "location": "Performer.accepts_the_alert_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Warning alert must appear",
  "keyword": "Then "
});
formatter.match({
  "location": "Performer.warning_alert_must_appear()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertNotNull(Assert.java:712)\r\n\tat org.junit.Assert.assertNotNull(Assert.java:722)\r\n\tat Definitions.Performer.warning_alert_must_appear(Performer.java:50)\r\n\tat ✽.Warning alert must appear(file:src/test/java/Features/Features.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Move to Order Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on order page",
  "keyword": "Given "
});
formatter.match({
  "location": "Performer.user_is_on_order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test delete order after slecting an order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Select an order from the table",
  "keyword": "When "
});
formatter.match({
  "location": "Performer.select_an_order_from_the_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "Performer.click_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Accepts the alert message",
  "keyword": "And "
});
formatter.match({
  "location": "Performer.accepts_the_alert_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A success message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Performer.a_success_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/filterOrder.feature");
formatter.feature({
  "name": "Filter the Order List",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Move to Order Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on order page",
  "keyword": "Given "
});
formatter.match({
  "location": "Performer.user_is_on_order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user filters the order list based on order status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@filter"
    }
  ]
});
formatter.step({
  "name": "Selects an status from drop down",
  "keyword": "When "
});
formatter.match({
  "location": "Performer.selects_an_status_from_drop_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "Performer.clicks_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Filtered table appears",
  "keyword": "Then "
});
formatter.match({
  "location": "Performer.filtered_table_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});