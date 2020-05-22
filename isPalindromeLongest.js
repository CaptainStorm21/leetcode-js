//time complexity o(n2)
//space complexity o(1)

//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      const currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i-1, i+1);
    expandAroundMiddle(i, i+1);
  }
  return s.slice(startIndex, startIndex + maxLength);
}

//Time Complexity: O(n^2) Since expanding a palindrome around its center could take up to O(n), and we do this for each character.

//Space Complexity: O(1)

console.log(longestPalindrome("sabina"))
