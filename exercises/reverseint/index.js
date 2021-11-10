// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let res = n;
    let a = res.toString();
    let b = '';
    for (let i of a){
        b = i + b;
    }
    let c = parseInt(b);
    if (Math.sign(n) === -1){
        return -c;
    } else{
        return c;
    }

    //Or - instead of the if statement
    // return c * Math.sign(n);
}


module.exports = reverseInt;

// let result = n;
//    let a = parseInt(result.toString().split('').reverse().join(''))
//    if (Math.sign(n) == -1){
//        return -a;
//     } else {
//         return a;
//    }
