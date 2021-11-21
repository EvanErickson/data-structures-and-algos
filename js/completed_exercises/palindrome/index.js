// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // let arr = str.split('')
  // // let arr = str
  // // arr.split('')
  // let arr2 = []
  // for (var i of arr ){
  //     arr2.push(i)
  //     return arr2
  // }

  var newString = "";
  for (let i of str) {
      newString = i + newString;
  }
  console.log(newString)
  return newString;
}

// palindrome('str')

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }

// return str.split('').every((char, i) => {
//   return char === str[str.length - i - 1];
// });
