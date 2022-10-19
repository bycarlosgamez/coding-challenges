// given an array of integers (num) and an integer (target)
// the arrays has minimum 2 integers
// integers can be - or +
// tagert can be - or +

// return the indeces of the two numbers that add up to  the target
// each input has only one solution
// don't use same index twice
// can return answers in any order

var twoSum = function (nums, target) {
  // make two loops
  // sum each number to other numbers
  // compare to targer
  // return index

  //Brute Force Solution

  // for(let i = 0; i < nums.length; i++){
  //   for(let j = 0; j < nums.length; j++){
  //    if(nums[i] + nums[j] === target
  //      && i !== j){
  //      return [i, j];
  //    }
  //   }
  // }

  // Solution

  let prevMap = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (prevMap.includes(diff)) {
      return [prevMap.indexOf(diff), i];
    }
    prevMap.push(nums[i]);
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
