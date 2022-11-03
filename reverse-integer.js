// given a number

// return the reversed verion of the number
// if reversing x causes the value to go outside the signed 32-bit integer range [-2147483648, 2147483647], then return 0.

var reverse = function (x) {
  // convert number into string
  // make string an array
  // reverse array
  // make array string
  // make string a number
  // if original number is negative return reversedNum negative
  // return reversedNum
  let revStr =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);

  return revStr >= 2 ** 31 * -1 && revStr <= 2 ** 31 ? revStr : 0;
};

reverse(123);
reverse(-123);
reverse(120);

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21
