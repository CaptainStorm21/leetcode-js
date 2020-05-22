//#125 polindrome

function isPalindrome(s){
  //satize input string by removing  non alpha and lowering
  s = s.toLowerCase().replace(/[W_]/g, "");
  //create a left and right pointer ini at start and end
  let left = 0;
  let right = s.length - 1;
  
  //while
  //if left not eq to right, return false
  while(left<right){
    if(s[left] !== s[right]){
      return false;
    }
  left++;
  right--;
  }
  //otherwise return true
  return true;
  
}

console.log(isPalindrome("lol"))
