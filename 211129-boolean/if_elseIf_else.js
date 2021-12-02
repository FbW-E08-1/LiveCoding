/**
 * A use case for `else if`: padding numbers with leading zeros
 * 
 * The `+` operator is used to _concatenate_ strings. If a number is
 * concatenated to a string, it will be converted to a string.
 * 
 * https://masteringjs.io/tutorials/fundamentals/string-concat
 * 
 * node
 * > 1 + 1    // addition
 * 2
 * > "1" + 1  // concatenation
 * '11'
 * > 1 + "1"  // concatenation
 * '11'
 */

let number = 99
let string = ""

// "001"
// "010"
// "999"

if (number < 10) {
  string = "00" + number // "001" concatenate

} else if (number < 100) {
  string = "0" + number

} else {
  string = "" + number
}

console.log("string:", string, "(string is of type \"", typeof string, "\")")



if (number < 5) {
  console.log ("less than 5")

} else if (number < 10) {
  console.log ("less than 10")

  // The following condition can never be true if number < 10
  if (number > 50) {
    console.log ("greater than 50")
  }
}