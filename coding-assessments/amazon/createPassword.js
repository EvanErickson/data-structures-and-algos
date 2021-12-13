// Using string
// function generateRandomPassword(length){
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

//     var password = '';

//     for (let i = 0; i < length; i++){
//         password += charset.charAt(Math.floor(Math.random() * charset.length))
//     }

//     console.log(password)
// }
// generateRandomPassword(12)



// using array
// length = int; special = bool
function generatePassword(length, special){
    var password = [];
    var specialChar = special;
    if (special == true){
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()";
    } else {
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    for (let i = 0; i < length; i++){
        password.push(charset.charAt(Math.floor(Math.random() * charset.length)))
    }

    let returnVal = password.join('');

    console.log(returnVal)

}

generatePassword(12, false)

















// function generatePassword(length) {
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//     var retVal = "";
    
//     // console.log(Math.floor(Math.random() * charset.length))

//     // for (var i of charset){
//     //     let random = Math.floor(Math.random() * charset.length)
//     //     retVal = random + retVal
//     // }
  
//     // console.log(retVal)

//     for (var i = 0; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * charset.length));
// }
// console.log(retVal)
// }

// generatePassword(23)





// function createPassword(length) {
//     var result           = [];
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
//   }
//   console.log(result.join(''))
//   }

//   createPassword(18)




// function generateRandomString(length){
//     let res = []

//     let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

//     for (let i = 0; i < length; i++){
//         res.push(chars.charAt(Math.floor(Math.random() * chars.length)))
//     }

//     let password = res.join('')
//     console.log('Your password is ' + password)
// }

// generateRandomString(10)