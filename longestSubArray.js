// Given an array nums of size n and an integer k, 
// find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.

function longestSubarray(nums, k) {
    let maxLength = 0
    let map = new Map()
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (sum === k) {
            maxLength = i + 1
        }

        if (map.has(sum - k)) {
            maxLength = Math.max(maxLength, i - map.get(sum - k))
        }

        if (!map.has(sum)) {
            map.set(sum, i)
        }

    }
    console.log(map)
    return maxLength
}

console.log(longestSubarray([10, 5, 2, 7, 1, 9], 15))
console.log(longestSubarray( [-1, 1, 1], 2))
