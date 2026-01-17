
function BinarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let middle = Math.floor((right + left) / 2)

        if (target === arr[middle]) {
            return middle
        }
        else if (target > arr[middle]) {
            left = middle + 1
        }
        else {
            right = middle - 1
        }
    }
    return -1
}

console.log(BinarySearch([1, 2, 3, 8, 10, 30, 34], 30))