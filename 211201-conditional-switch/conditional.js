/**********************************
 * The ternary conditional operator
 * ********************************
 * 
 * The ternary operator `? :` is similar to `if ... else`.
 * It requires three sections
 *  1. A conditional expression
 *  2. ? followed by an expression to execute if the condition is true
 *  3. : followed by an expression to execute if the condition is false
 * 
 * (condition) ? (execute if true) : (execute if condition is false)
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * 
 * Exercises:
 *    https://classroom.github.com/a/5JXS4HTD
 *    https://classroom.github.com/a/mgXnHVen
 */

var expressionIsTrue = true
// var expressionIsTrue = false
// var expressionIsTrue = 0 // falsy
let ifVariable

// Example using if ... else
if (expressionIsTrue) {
  ifVariable = "expression is true"
} else if (expressionIsTrue === false) {
  ifVariable = "expression is false"
} else {
  ifVariable = "expression is `falsy`"
}

console.log("ifVariable:", ifVariable)


// Example using the conditional operator
let ternaryVariable = ( expressionIsTrue ) 
                  ? "expression is true"
                  : ( expressionIsTrue === false )
                    ? "expression is false"
                    : "expression is `falsy`"
console.log("ternaryVariable:", ternaryVariable)



// Doorman example
var visitor = "director"

var message = ( visitor === "employee" )
              ? "Hello"
              : "Can I help you?"

console.log("message:", message)

// The conditional operator works in the same way as other operators,
// like `+`. It creates an expression that can be evaluated and then
// assigned to a variable, or sent as an argument to a function call. 
// Compare the way `message` is set above with how `sum` is set below.

var sum = 1 + 1

console.log ( ( visitor === "employee" )
              ? "Hello"
              : ( visitor === "director" )
                ? "Hello madam"
                : ( visitor === "delivery guy" )
                  ? "Let me take that!"
                  : "Can I help you?"
            )

// An `if ... else if ... else ,,,` statement allows you to execute a 
// specific block of code, depending on whether certain conditions are 
// met. An `if ... else if ... else ,,,` statement doesn't in itself
// evaluate an expression that can be assigned, but it may contain
// commands that do assign values to variables.
//
// In the `if ... else if ... else ,,,` statement, `message` is assigned
// a different value inside different code blocks. With the ternary 
// operator above, the value is assigned in only one place.

if (visitor === "employee") {
  message = "Hello"
} else if (visitor === "director") {
  console.log("The director has arrived")
  message = "Hello madam"
} else {
  message = "Can I help you?"
}