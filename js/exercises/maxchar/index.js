// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};

    let max = 0;
    let maxChar = '';


    //Difficult syntax to understand but essentially, if the object is empty at [char], then input chars[char] = 1. So you are making a char on the chars object

    for (let char of str){
        if (!chars[char]){
            chars[char] = 1;
        } else {
            chars[char] += 1
        }
    }
    // console.log(chars)

    //Now that we have the chars object. How can we find out the char with the most nums?

    //We are iterating inside of an obj so use the in
    for (let num in chars){
        // console.log(chars[num])
        if (chars[num] > max){
            max = chars[num]
            maxChar = num
        }
    }

    console.log(maxChar)
    return maxChar;
}


module.exports = maxChar;












// const charMap = {};
//     let max = 0;
//     let maxChar = '';

//     for (let char of str){
//         if (!charMap[char]){
//             charMap[char] = 1;
//         } else {
//             charMap[char] += 1
//         }
//     }

//     // To interate through object (let KEY in OBJECT). The key is the a b c and the value is the number.
//     for (let char in charMap){
//         if (charMap[char] > max){
//             max = charMap[char];
//             maxChar = char;
//         }
        
//     }

//     // console.log(maxChar)
//     return maxChar;