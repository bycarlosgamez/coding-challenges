// Write a function:

// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Assume that:

// N is an integer within the range [1..100,000]
// Each element of array A is an integer within the range [−1,000,000..1,000,000]
// Complexity:

// Expected worst-case time complexity is 𝑂(𝑁)
// Expected worst-case space complexity is 𝑂(𝑁)
// , beyond input storage (not counting the storage required for input arguments)
// Elements of input arrays can be modified.

function solution(A) {
  // make a new object with unique values from arrat
  // ser varaible integer to 1
  // make a loop while set has integer add one to integer
  // return integer if set has no integer

  const set = new Set(A);
  let integer = 1;

  while (set.has(integer)) {
    integer++;
  }

  return integer;
}

solution([1, 3, 6, 4, 1, 2]);
