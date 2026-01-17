//Given an array nums of n integers, return true if the array nums 
// is sorted in non-decreasing order or else false.

function  isSorted(nums) {
        let sorted =true
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                sorted = false
            }
        }
        return sorted
    }

    console.log(isSorted( [1, 2, 3, 4, 5]))
    console.log(isSorted( [1, 2, 1, 4, 5]))

