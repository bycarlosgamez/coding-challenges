// given two strings t and s

// return true if t is an anagram of s, and false otherwise
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function (s, t) {
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();
  return (
    sArr.length === tArr.length &&
    sArr.every((val, index) => val === tArr[index])
  );
};

isAnagram("anagram", "nagaram");
isAnagram("rat", "car");

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
