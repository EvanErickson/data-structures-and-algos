// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Is this the best way for the website or should I just have a count and subtract count or what?
///They have the count and then it is subtracted when they place an order.. but then the order is put into the system as an array of [i], [i], [i] and then when the purchase buys it, they buy the array and then depending on the length that gets added to their account? Look up how robinhood or other stock brokers do the order book?    
function chunk(array, size) {
   

}












module.exports = chunk;

// Main Solution
// const chunked = [];
// let index = 0;

// while (index < array.length){
//     chunked.push(array.slice(index, index + size))
//     index += size;
// }

// return chunked;

// Alternate Solution
// function chunk(array, size) {
//     const chunked = [];
    
//     for (let element of array){
//         //Find last element in the chunked array for comparison. 
//         // The last is the chunk we are currently working with.
//         const last = chunked[chunked.length - 1];

//         //If the last element does not exist because the chunked array is empty, or the chunked array last element is equal to the size constraint then we need to push a new array into the element
//         if (!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element)
//         }
//     }

//     return chunked;
// }