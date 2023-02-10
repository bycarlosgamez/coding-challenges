// Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

// given an array of integers
// return an array with unique values

const uniqSort = function (arr) {
  const breadcrumbs = {};

  for (let num of arr) {
    if (!breadcrumbs[num]) {
      breadcrumbs[num] = num;
    }
  }

  return Object.values(breadcrumbs);

  // return arr.sort((a, b) => a - b);
};

uniqSort([1, 5, 2, 1]);
uniqSort([4, 2, 2, 3, 2, 2, 2]);
uniqSort([4, 2, 2, 3, 2, 10, 23, 23, 7, 5, 11]);

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]
//input: [4,2,2,3,2,10,23,23,7,5,11] => output: [ 2, 3, 4, 5, 7, 10, 11, 23 ]
