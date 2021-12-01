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