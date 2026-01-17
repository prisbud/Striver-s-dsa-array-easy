
    function largestElement(nums) {
        let largest = 0

        for(let i=0;i<nums.length;i++){
          largest = Math.max(nums[i],largest)
        }
        return largest
    }

    console.log(largestElement([3,5,7,2,8])) // 8`