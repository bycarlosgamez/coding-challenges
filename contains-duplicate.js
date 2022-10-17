// an array with integers
// itegers can be positive or negative
// no floating numbers

// return true if any integer is repeated

var containsDuplicate = function (nums) {
  //crete an object with unique values
  // check u size of obj = to nums length
  let duplicates = new Set([...nums]);
  return duplicates.size !== nums.length;
};

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4]);
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
