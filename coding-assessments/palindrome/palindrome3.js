function isPalindrome(str){
    
    let reverse = '';

    for (let char of str){
        // each char gets called in order 
        // we then want to append it to the front of the new str

        // the last char will be at the front 

        reverse = char + reverse
    }

    console.log(reverse)
}

isPalindrome('panama')