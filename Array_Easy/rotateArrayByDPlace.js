function rotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.push(nums.shift())
    }
    return nums
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 5))