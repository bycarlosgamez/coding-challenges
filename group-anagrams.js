// given an rrray of strings
// strings are lowercase only
// the array at least one string
// the string can be empty

// return an array of arrays
// each arrays contains the anagrams together

var groupAnagrams = function (strs) {
  // loop though every string in array
  // make an object that holds every sorted str as a key
  // if the object does not contains the sorted string make a new array with
  // if it does, push the string to array key
  // return the values of the object
  let res = {};
  for (let str of strs) {
    let key = str.split("").sort().join("");

    if (!res[key]) {
      res[key] = [str];
    } else {
      res[key].push(str);
    }
  }
  return Object.values(res);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([""]);
groupAnagrams(["a"]);

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
