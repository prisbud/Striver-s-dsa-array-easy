function SelectionSort(arr) {
    let n = arr.length
    let temp = 0

    for (let i = 0; i < n; i++) {
        let min = i
        for (let j = i; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
return arr

}

console.log(SelectionSort([3, 9, 7, 10, 50, 32, 90, 64, 1, 2]))