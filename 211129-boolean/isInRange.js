// Check if two given integer values are in the range
// 50 to 99 (this includes both 50 and 99). Print true
// if either of them are in the range.

// How to check for one number?

var a = 501
var aIsInRange = (a >= 50) && (a <= 99)
console.log("aIsInRange:", aIsInRange)

// How to check a second number?

var b = 51
var bIsInRange = (b >= 50) && (b <= 99)
console.log("bIsInRange:", bIsInRange)


// Checking if at least one number is in range
var result = (aIsInRange || bIsInRange) 
console.log("result:", result)


// Advanced: using a function 
function isInRange(a, b) {
  var aIsInRange = (a >= 50) && (a <= 99)
  var bIsInRange = (b >= 50) && (b <= 99)
  let result

  if (aIsInRange || bIsInRange) {
    result = true;
  } else {
    result = false;
  }

  return result
}

console.log("isInRange(15, 49):", isInRange(15, 49))


// DRY Don't Repeat Yourself
