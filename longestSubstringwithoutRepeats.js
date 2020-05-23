// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let hashMap = {};
  let start = 0;
  let maxVar = 0;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (hashMap[currentChar] >= start) {
      start = hashMap[currentChar] + 1;
    }

    hashMap[currentChar] = i;

    maxVar = Math.max(maxVar, i - start + 1);
  }
  return maxVar;
}

console.log(lengthOfLongestSubstring("welcome"))



/*
time complexity o(n)
space complexity o(min(m,n)
*/


