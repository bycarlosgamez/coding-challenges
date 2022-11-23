// given a string

// return a boolean
// true if string is a palindrome
// false if is not

var isPalindrome = function (s) {
  // make lowercase
  // create a pointer at the start and a pointer at the end
  // make a a loop that compare pointers
  // if char is not alphanumerical add one to the ponter
  // if char of left is not equal to char at right return false
  // otherwise return true

  s = s.toLowerCase().replace(/[\W_]/g, "");

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");

// SOLUTION WITHOUT REGEX

var isPalindrome = function (s) {
  // create a helper function to determine if a cahracter is alphanumeric
  // make string lowercase
  // create a pointer at the start and a pointer at the end
  // make a a loop that compare pointers
  // if char is not alphanumerical add one to the start ponter or remove one from end pointer
  // if char of left is not equal to char at right return false
  // otherwise return true
  function alphaNum(c) {
    return (
      (47 < c.charCodeAt(0) && c.charCodeAt(0) < 58) ||
      (96 < c.charCodeAt(0) && c.charCodeAt(0) < 123)
    );
  }

  s = s.toLowerCase();

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (!alphaNum(s[start])) {
      start++;
    }

    while (!alphaNum(s[end])) {
      end--;
    }

    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
