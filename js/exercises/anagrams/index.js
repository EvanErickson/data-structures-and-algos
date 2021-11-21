// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
        const charMap1 = {};
        const charMap2 = {};
        let max = 0;
        let maxChar = '';
    
        for (let char of stringA){
            if (!charMap1[char]){
                charMap1[char] = 1;
            } else {
                charMap1[char] += 1
            }
        }
    
        // To interate through object (let KEY in OBJECT). The key is the a b c and the value is the number.
        for (let char in charMap1){
            if (charMap1[char] > max){
                max = charMap1[char];
                maxChar = char;
            }
        }



        for (let char of stringB){
            if (!charMap2[char]){
                charMap2[char] = 1;
            } else {
                charMap2[char] += 1
            }
        }
    
        // To interate through object (let KEY in OBJECT). The key is the a b c and the value is the number.
        for (let char in charMap2){
            if (charMap2[char] > max){
                max = charMap2[char];
                maxChar = char;
            }
        }

        if (charMap1 === charMap2){
            return true;
        } else{
            return false;
        }
    
    }

module.exports = anagrams;
