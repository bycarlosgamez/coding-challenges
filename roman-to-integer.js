// given a roman numeral
// only upper case letters
// no more than 15 letters no less than 1
// only contains ('I', 'V', 'X', 'L', 'C', 'D', 'M')
// its garantedd to be a valid roman numeral from [1, 3999]

// return its value as an integer

var romanToInt = function (s) {
  // make a object to have the value for each letter
  // have a counter
  // check the value of each letter of the parameter individually
  // if the next letter is greatter than the previous, substract value
  // if the next letter is smaller or equal than the previous, add the value

  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;

  s.split("").forEach((rom, index) => {
    if (value[rom] < value[s[index + 1]]) {
      int -= value[rom];
    } else {
      int += value[rom];
    }
  });
  return int;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
