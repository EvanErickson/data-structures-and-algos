function twoNumberSum(array, targetSum) {
  
	let nums = {}
	
	for (let num of array){
		let potentialMatch = targetSum - num
		if (potentialMatch in nums){
			return [potentialMatch, num]
		} else {
			nums[num] = true 
		}
	}
	return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
