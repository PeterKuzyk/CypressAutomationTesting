Feature: E2E Ecommerce Validation

  @Smoke
  Scenario: Ecommerce product delivery
    Given I am on Ecommerce page
    When I login to the application
    And I add items to Card and checkout
    Then I should total price limits
    When I select the country and submit
    Then I should see the Thank You

  @Regression
  Scenario: Ecommerce product delivery using dataTable
    Given I am on Ecommerce page
    When I login to the application portal
      | username           | password |
      | rahulshettyacademy | learning |
    And I add items to Card and checkout
    Then I should total price limits
    When I select the country and submit
    Then I should see the Thank You

  Scenario Outline: : Ecommerce product delivery using Scenario Outline dataTable
    Given I am on Ecommerce page
    When I login to the application Portal using <username> and <password>
    And I add items to Card and checkout
    Then I should total price limits
    When I select the country and submit
    Then I should see the Thank You

    Examples:
      | username           | password |
      | rahulshettyacademy | learning |

    ## Report Example Using Multiple Cucumber HTML Reporter lecture 73
    ## https://shorturl.at/IFXzM
