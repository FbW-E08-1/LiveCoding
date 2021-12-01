/*******************
 * Switch statements
 * *****************
 * 
 * The switch statement:
 * > evaluates an expression
 * > matches the expression's value to a case clause if possible,
 * > executes statements associated with that case, as well as
 *      all statements in cases that follow the matching case,
 *      until a break statment is met
 * If no matching case is found, the statements following the `default`
 * case will be executed. 
 * 
 * The `default` case is optional. If no cases match and there is no
 * `default` case, then no statements inside the switch code block
 * will be executed.
 * 
 * A common mistake is to forget to add `break` statements.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 * 
 * Exercises:
 *    https://classroom.github.com/a/g6fC8gox
 */


 var country = "Poland"
 // var country = "Canada"
 // var country = "France"
 let currency
 
 
 switch (country) {
   case "France":
   case "Germany":
   case "Italy":
   case "Spain":
     // All the above cases will "fall through" to this line
     currency = "Euro"
     // The `break` command breaks out of the switch statement
   break
   
   case "Poland":
     currency = "Zloty"
   break
 
   case "Serbia":
     currency = "Динар"
   break
 
   default:
     // If none of the above cases is found
     // the `default` case will be applied
     currency = "Dollar"
     // There is no need for a `break` at the end
 }
 
 
 console.log("country:", country, ", currency:", currency)
 // country: Poland , currency: Zloty