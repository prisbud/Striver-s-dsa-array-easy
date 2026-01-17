// Given an array of nums of n integers. 
// Every integer in the array appears twice except one integer. 
// Find the number that appeared once in the array.

function singleNumber(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] + 1) || 1
    }

    for (let key in map) {
        if (map[key] === 1) return key
    }
}

console.log(singleNumber([1, 2, 2, 4, 3, 3, 9, 1, 4]))