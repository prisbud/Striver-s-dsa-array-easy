function findMaxConsecutiveOnes(nums) {
    let counter = 0
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            counter++
        }
        else {
            max = Math.max(counter, max)
            counter = 0
        }
    }
    return max

}

console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1,1,1, 0]))