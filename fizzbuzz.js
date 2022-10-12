// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// Givien a number

// print out every number from 1 to number
// when the integer is divisible by 3, print out “Fizz”
// when it’s divisible by 5, print out “Buzz”
// when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(num) {
  // make a loop starting from 1
  // see if num is divisible by 3 and 5
  // if yes print “Fizz Buzz”
  // if not check if its divisible by 5
  // if yes print “Buzz”
  // finally if its no checkif its divisible by 3
  // if it is print "Fizz"
  // if is not divisible by 3, 5 or both print num
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(30);
fizzBuzz(5);
fizzBuzz(55);
