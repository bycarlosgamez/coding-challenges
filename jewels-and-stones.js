// given two strings
// jewels and stones

// return a number
// the numbers is the stones that are also jewels

var numJewelsInStones = function (jewels, stones) {
  // make a counter object
  // the keys must be jewels
  // loop torugh stones and if the element exist add one to the key
  // sum the values
  // return a number
  const count = {};
  let sum = 0;
  for (let stone of stones) {
    if (count[stone]) {
      count[stone]++;
    } else {
      count[stone] = 1;
    }
  }

  for (let jewel of jewels) {
    if (count[jewel]) {
      sum += count[jewel];
    }
  }

  return sum;
};

numJewelsInStones('aA', 'aAAbbbb');
numJewelsInStones('z', 'ZZ');

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0
