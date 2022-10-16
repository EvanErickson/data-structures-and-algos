// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //look at str forward and backward
    console.log('intro', str)
    let revereStr;
    for(let i = 0; i < str.length; i++){
        revereStr = str[i] + revereStr
        // if(str[0] === str[str.length - 1]){
        //     if (str[i] === str[str.length - (i+1)]){

        //     }
        // }
        console.log(str[i])
        console.log(revereStr)
    }
}

palindrome('evan')

module.exports = palindrome;
