// given an array of integers
// array always sorted

// return first the pair where sum is 0 as an array
// retrun undefined if a pair does not exist

const sumZero = (arr) => {
  // declare two ponteris (left and right)
  // loop through the array and as long as left is smaller than right
  // make sum of the pointers
  // if sum is equal to 0 return array[pointers] as an array
  // if sum is greater than 0 add one to left pointer
  // else (sum less than 0) add one to right pointer
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

sumZero([-3, -2, -1, 0, 1, 2, 3]);
sumZero([-10, -5, -2, -1, 0, 1, 2, 3, 5, 7, 9]);
sumZero([-2, 0, 1, 3]);
sumZero([1, 2, 3]);

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined
