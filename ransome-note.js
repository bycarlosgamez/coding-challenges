// given two strings (ransomNote and magazine)
// ransomNote and magazine consist of lowercase english letters.

// return true if ransomNote can be constructed by using the letters from magazine and false otherwise
// each letter in magazine can only be used once in ransomNote

var canConstruct = function (ransomNote, magazine) {
  // make an object that counts letters from magazine
  // loop thorugh ransomNote
  // if there is no a a letter in counter o counter is < 0 return false
  // else substract one to counter letter
  // return true if loop ends with no values under 0
  let counter = {};
  for (let m of magazine) {
    !counter[m] ? (counter[m] = 1) : (counter[m] += 1);
  }

  for (let r of ransomNote) {
    if (!counter[r] || counter[r] < 0) {
      return false;
    }
    counter[r]--;
  }
  return true;
};
canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi");
canConstruct("a", "b");
canConstruct("aa", "ab");
canConstruct("aa", "aab");

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
