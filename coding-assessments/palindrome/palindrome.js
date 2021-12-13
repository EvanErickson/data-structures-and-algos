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
 function isPalindrome(str) {
    // convert the string to an array
    //reverse array
    //create string again
    if(str === '' || str === null || str === undefined){
        return false;
    }
    
    let arr = str.split('')
    // let arr = str
    // arr.split('')
    let arr2 = []
    for (var i of arr ){
        
        // take last var off aka pop
        
        // prepend to new array
        arr2 += i
        // arr2 = i + arr2
        
        // i.push(arr2)
        // console.log('1',arr)
        // console.log('2',arr2)
        return arr2
    }
    
    
}

console.log(!isPalindrome() ? 'true' : 'false');
console.log(!isPalindrome(null) ? 'true' : 'false');
console.log(!isPalindrome('') ? 'true' : 'false');
console.log(!isPalindrome('cat') ? 'true' : 'false');
console.log(isPalindrome('racecar') ? 'true' : 'false');
console.log(isPalindrome('noon') ? 'true' : 'false');
console.log(isPalindrome('a man a plan a canal panama') ? 'true' : 'false');