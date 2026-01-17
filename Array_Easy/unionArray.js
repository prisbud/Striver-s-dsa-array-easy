// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. 
// The elements in the union must be in ascending order.
// The union of two arrays is an array where all values are distinct and are present in either the first array, 
// the second array, or both.

function unionArray(nums1, nums2) {

    let x = nums1.length
    let y = nums2.length

    let i = 0
    let j = 0
    let arr = []

    while (i < x && j < y) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        }
        else if (nums1[i] > nums2[j]) {
            arr.push(nums2[j])
            j++
        }
        else {
            arr.push(nums1[i])
            i++
            j++
        }
    }

    while (i < x) {
        arr.push(nums1[i])
        i++
    }

    while (j < y) {
        arr.push(nums2[j])
        j++
    }
    return arr

}

console.log(unionArray([1, 2, 3, 4, 5], [1, 2, 7]))