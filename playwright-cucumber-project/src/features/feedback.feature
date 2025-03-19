Feature: Feedback Page

 Scenario: Test Case 1 - Check error messages when submitting an empty feedback form
    Given I am in Home page
    When I navigate to Contact page
      And I submit the feedback
    Then I can see header page error messages
      And I can see error messages from required fields