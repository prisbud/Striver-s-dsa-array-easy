
function BubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        let temp=0
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
            }
        }
    }
return arr
}

console.log(BubbleSort([78,2,3,5,1,9,34,21,90,83]))



