Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "NopeAD159"


Scenario: DataTable Example
    Given a table inputs are:
      | First | Second | Result |
      | 50    | 70     | 120    |
      | 30    | 40     | 70     |
      | 60    | 30     | 90     |

@sum @test
Scenario: Sum two number
  When the user sets "2" input 1
  And the user sets "6" input 2
  Then I should should see the result "8"

Scenario Outline: Scenario Outline name
  When the user sets "<Input 1>" input 1
  And the user sets "<Input 2>" input 2
  Then I should should see the result "<Result>"
Examples:
    | Input 1 | Input 2 | Result |
    | 8       | 6       | 14     |
    | 7       | 3       | 10     |
    | 9       | 31      | 40     |