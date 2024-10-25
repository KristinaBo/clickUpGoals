Feature: Authentication
  Scenario: Get tags from space
    When Get tags from space
    Then Response status should be 200

  Scenario: Create tag in space
    When Create tag in space
    Then Response status should be 200

  Scenario: Update tag in space
    Given Create tag in space
    And Update tag in space
    When Get tags from space
    Then Response status should be 200

  Scenario: Delete tag from space
    Given Create tag in space
    And Delete tag
    Then Response status should be 200

