// In number theory, a happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit. 

// For instance, 13 is a happy number because 1^2+3^2=10 and 1^2+0^2=1. 
// On the other hand, 4 is not a happy number because the sequence starting with 4^2=16 and 1^2+6^2=37 eventually reaches 2^2+0^2=4, the number that started the sequence, and so the process continues in an infinite cycle without ever reaching 1. A number which is not happy is called sad or unhappy.

hashmap: {
	10: 10,
  res1: res1,
  res1: res1,
  res1: res1,
  res1: res1,
}

//hashet
//contains
//add
//remove

Map<int, int> seenNums = new HashMap();
int currentNum = "";

function isHappy(n){
	var res = n;
	while(!seenNums.contains(res) && res !== 1){
  	var arr = res.toString().split("")
   
		res = sumSquareDigits(arr)
  
    seenNums.add(res)
    
  }
  return res === 1

  //What happens if it sees something for the second time?

	
	
  
  // 1. IF n is on hashmap (java hashmap.set(key, value)) end process because used before
  
  // 2. parse through n and maybe use tostring method or not, take components out and square them and then add the res
  
  // 3. put the res in the hashmap 
  
  // 4. check hashmap for that res if it exists 
  
}




function sumSquareDigits(arr) {
    //Above, in form of array
    let res = 0
  	for (i = 0; i < arr.length - 1; i++){
    	// I'm iterating through, now square all iterations
      res += arr[i]^2
    }
    return res
}




//create happy number function to determine if a number is happy