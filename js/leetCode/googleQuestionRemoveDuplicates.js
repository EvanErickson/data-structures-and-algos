// Google | Remove Duplicates from Unsorted Array

// can't use Set
// array is not sorted
// must be done in-place
// Bonus points if you don't use a sort function

let hashMap = {}
let newArr = []
let arr = [2, 11,2,2,3,4,4,5]
for (let i = 0; i < arr.length; i++){
    console.log('loop')
    console.log('i', i)
    console.log('arr[i]', arr[i])
    if(hashMap[arr[i]]){
        console.log('if', i)
        console.log('hash', hashMap[arr[i]])
        // console.log(arr[i], 'arr[i]')
        continue;
    }
    else {
        console.log('else', i)
        hashMap[arr[i]] = 1
        console.log(hashMap)
        newArr.push(arr[i])
        console.log(newArr)
    }
}

console.log(newArr)
return newArr