// given an integer
// if the current number is even,  divide it by 2
// otherwise, you have to subtract 1, then divide it by 2
// number always wil be an integer from 0 <= num <= 106

var numberOfSteps = function (num) {
  // make a loop to check if even or odd
  // if even devide by 2
  // if odd substract one and the devive by 2
  // at the end of loop return counter
  // return iterations it took to num = 0
  let count = 0;
  for (; num; count++) {
    if (num % 2) {
      num--;
    } else {
      num /= 2;
    }
  }
  return count;
};

numberOfSteps(14);
numberOfSteps(8);
numberOfSteps(123);

// return integer
// the number of steps to reduce to zero

// Example 1:
// Input: num = 14
// Output: 6

// Example 2:
// Input: num = 8
// Output: 4

// Example 3:
// Input: num = 123
// Output: 12
