// given an array of integers
// array always sorted
// can be negative

// return the number of unique values

let countUniqueValues = (arr) => {
  // check of empty array
  // if yes return 0
  // if not add one to counter
  // make a counter variable
  // make two ponters first and second
  // set first ponter to 0 and second to 1
  // loop through array while second < arr.lenght
  // check if arr[second] is equal to arr[first]
  // if equal add one to first and second
  // if not add one to counter and set first to second and one to second
  // return counter
  let counter = 0;
  let first = 0;
  let second = 1;

  if (arr.length === 0) {
    return 0;
  } else {
    counter++;
  }

  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      first++;
      second++;
    } else {
      counter++;
      first = second;
      second++;
    }
  }

  return counter;
};

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
