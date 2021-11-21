// Reverse number array

function reverseNumArray(arr){
    let reversedArr = [];

    for (let num of arr){
        reversedArr.unshift(num)
        // or you could do reversedArr = num + reversedArr
    }
 
    let left = reversedArr[0] // 5
    let right = reversedArr[1] // 4
    let d3 = reversedArr[3] // 2
    let d4 = reversedArr[4] // 1
    // reversedArr[2] = 0

    reversedArr[0] = right;
    reversedArr[1] = left;

    let length = reversedArr.length
    reversedArr[length - 1] = d3 
    reversedArr[length - 2] = d4 



    // let a = reversedArr.split('')

    console.log('reversed', reversedArr)

    // Now split it in two
    // for (let i = reversedArr.length / 2; i <= reversedArr.length; i++){
    //     console.log(reversedArr[i])
    //     // for (let num of reversedArr){

    //     // }
    // }

    
}

reverseNumArray([1,2,3,4,5])