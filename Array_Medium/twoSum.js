function twoSum(nums, target) {
    let sum = 0
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        sum = target - nums[i]
        if (map.has(sum)) {
            return [map.get(sum), i]
        }
        map.set(nums[i], i)
    }

}

console.log(twoSum([6, 1, 2, 10, 3], 7))
console.log(twoSum([1, 3, 5, -7, 6, -3], 0))
