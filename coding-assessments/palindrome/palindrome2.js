/**
 * Determines if the string is a palindrome
 * ignoring whitespace
 * 
 * undefined // false
 * null // false
 * '' // false
 * 'cat' // false
 * 'racecar' // true
 * 'noon' // true
 * 'a man a plan a canal panama' // true
 * @param {string} str string to determine if is palindrome
 * @returns {boolean}
 */

function isPalindrome(str){
    if (str === undefined || str === '' || str === null){
        return false;
    }

    let reversed = '';

    for (let char of str){
        if (char == " "){
            char = ''
        }
        // console.log(char)
        reversed = char + reversed;
    }

    if (reversed === str){
        return true;
    }

    // console.log(reversed)
    
}

// isPalindrome('a man a plan a canal panama')

console.log(!isPalindrome() ? 'true' : 'false');
console.log(!isPalindrome(null) ? 'true' : 'false');
console.log(!isPalindrome('') ? 'true' : 'false');
console.log(!isPalindrome('cat') ? 'true' : 'false');
console.log(isPalindrome('racecar') ? 'true' : 'false');
console.log(isPalindrome('noon') ? 'true' : 'false');
console.log(isPalindrome('a man a plan a canal panama') ? 'true' : 'false');