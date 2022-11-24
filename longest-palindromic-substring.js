// given a string

// return a substring
// the substring is the longest palindrom

var longestPalindrome = function (s) {
  let start = 0;
  let maxLength = 1;

  function expandLeftRight(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandLeftRight(i - 1, i + 1);
    expandLeftRight(i, i + 1);
  }

  return s.slice(start, start + maxLength);
};

longestPalindrome("babad");
longestPalindrome("cbbd");

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"
