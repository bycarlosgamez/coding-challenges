// given two arrays
// The frequency of values must be the same.
// the arrays have numbers

// return boolean
//true if every value in the array has it's corresponding value squared in the second array.

function same(arr1, arr2) {
  // make a map object
  // check if lenghts of arrays is the same
  // if not return false
  // if yes loop through first array
  // squared element and save it to map
  // map thorugh second array and check if element aready exist
  // if not, return false
  //retunr true
  const map = {};
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num of arr1) {
    let square = num * num;
    if (!map[square]) {
      map[square] = 1;
    } else {
      map[square] += 1;
    }
  }

  for (let num of arr2) {
    if (map[num]) {
      map[num] -= 1;
    }
  }

  for (let val of Object.values(map)) {
    if (val > 0) {
      return false;
    }
    return true;
  }
}

same([1, 2, 3], [4, 1, 9]);
same([1, 2, 3], [1, 9]);
same([1, 2, 1], [4, 4, 1]);

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)
