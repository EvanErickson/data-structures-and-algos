// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// String.split converts it into an array

// Made it an array first for fun
// function reverseInt(n){
//     let newRes = null;
//     let res = n.toString().split('')
//     for (let i of res){
//         newRes = i + newRes
//     }
//     let res2 = parseInt(newRes)
//     console.log(res2)
// }

function reverseInt(n){
    let reverse = null;
    let str = n.toString()

    for (let i of str){
        reverse = i + reverse
    }

    let final = parseInt(reverse)
    console.log(final)

    if(Math.sign(n) === -1){
        return -final
    } else {
        return final
    }

}




module.exports = reverseInt;

// function reverseInt(n) {
//     let a = n.toString();

//     let reverse = null;
    
//     for (char of a){
//         reverse = char + reverse;
//     }

//     let b = parseInt(reverse)
//     // console.log(b)

//     if (Math.sign(n) === -1){
//         console.log(-b)
//         return -b 
//     } else {
//         console.log(b)
//         return b
//     }

// }

// reverseInt(-42);

















// let result = n;
//    let a = parseInt(result.toString().split('').reverse().join(''))
//    if (Math.sign(n) == -1){
//        return -a;
//     } else {
//         return a;
//    }


// let res = n;
// let a = res.toString();
// let b = '';
// for (let i of a){
//     b = i + b;
// }
// let c = parseInt(b);
// if (Math.sign(n) === -1){
//     return -c;
// } else{
//     return c;
// }