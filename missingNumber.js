// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), 
// return the only number missing from the array within this range.

function missingNumber(nums) {
    let len = nums.length
    let expected = (len * (len + 1)) / 2
    let actual =0

    for(let i=0;i<nums.length;i++){
        actual += nums[i]
    }

    return expected-actual

}

console.log(missingNumber([5, 2, 3, 1, 4]))