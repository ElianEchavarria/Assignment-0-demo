function isPalindrome(word) {
  // Insert code here;
  if (word === word.split("").reverse().join("")) {
    return true;
  } else {
    return false
  }
}

// Do not edit this line;
module.exports = isPalindrome;