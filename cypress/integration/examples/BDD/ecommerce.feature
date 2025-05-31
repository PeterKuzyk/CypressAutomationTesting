Feature: E2E Ecommerce Validation

  Scenario: Ecommerce product delivery
    Given I am on Ecommerce page
    When I login to the application
    And I add items to Card and checkout
    Then I should total price limits
    When I select the country and submit
    Then I should see the Thank You
