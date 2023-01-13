// given an array of integers and a number (n)

// return a number
// the number is the result of calculate the maximum sum of n consecutive elements in the array

let maxSubarraySum = (arr, n) => {
  // create a max variable to store the max sum of n number of array
  // create currtent variable to store the current sum of n number of array
  // loop through array
  // set max to the sum of n numbers
  // loop through array
  if (arr.length < n) {
    return null;
  }

  let max = 0;
  let current = 0;

  for (let i = 0; i < n; i++) {
    current += arr[i];
  }

  max = current;

  for (let i = n; i < arr.length; i++) {
    current = current - arr[i - n] + arr[i];
    max = Math.max(max, current);
  }

  return max;
};

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
maxSubarraySum([4, 2, 1, 6], 1);
maxSubarraySum([4, 2, 1, 6, 2], 4);
maxSubarraySum([], 4);

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null
