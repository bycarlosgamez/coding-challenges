// given an array of nums os size n

// return the majority element
// the majorty element is the element that appears more than [n / 2] times

var majorityElement = function (nums) {
  // make a map counter
  // loop through array
  // check if num exist
  // if it does not create a a key with value 1
  // if it does add one to key
  // return the highest value from map
  const map = {};
  let maj = 0;
  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  return +Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
};

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([3, 3, 4]);

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
