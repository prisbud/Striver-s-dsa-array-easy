//Given an array of integers nums, return the second-largest 
//element in the array. If the second-largest element does not exist, return -1.

function  secondLargestElement(nums) {
        let largest = 0
        let second = -1

        for(let i=0;i<nums.length;i++){
           
            largest = Math.max(nums[i],largest)            

            if(nums[i] > second && nums[i] < largest){
                second = nums[i]
            }
        }
        return second
    }

    console.log(secondLargestElement( [8, 8, 7, 6, 5]))
    console.log(secondLargestElement(  [10, 10, 10, 10, 10]))
