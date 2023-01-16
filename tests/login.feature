Feature: Login

  Scenario: Login and buy smartphone with properly credits
    Given I open main Page
    And I login to site with proper credits
    And Select product name: "Samsung galaxy s7"
    And I open cart and try to place order
    And I input test data and click purchase button
    Then I should see OK sign

  Scenario: Try to input characters to 'Year' field during placing order
    Given I open main Page
    Then Select product name: "Nexus 6"
    And I open cart and try to place order
    And I Input test data with characters in Year input
    Then I should not see OK sign
