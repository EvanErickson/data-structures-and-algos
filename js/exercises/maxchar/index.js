// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str){
        if (!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char] += 1
        }
    }

    // To interate through object (let KEY in OBJECT). The key is the a b c and the value is the number.
    for (let char in charMap){
        if (charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
        
    }

    // console.log(maxChar)
    return maxChar;
}


module.exports = maxChar;
