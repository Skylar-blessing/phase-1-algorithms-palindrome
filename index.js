
  function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase();
  const reversedStr = lowercaseStr.split('').reverse().join('');
  return lowercaseStr === reversedStr;
  }

// Create a function named isPalindrome that takes a string as an argument.
// Convert the string to lowercase using the toLowerCase() method.
// Create a variable named reversedString and assign it the reversed version of the input string.
// Compare the original string with the reversed string using the === operator.
// If they are the same, return true. Otherwise, return false.


// Our solution is already optimal as it has a time complexity of O(n) where n is the length of the input string.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
