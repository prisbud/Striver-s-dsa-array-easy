function findDuplicates(a) {
    let n =a.length
    let result =[]

    for(let i=0;i<n;i++){
        const index = a[i]%n
        a[index] +=n
    }

    for(let i=0;i<n;i++){
        if(Math.floor(a[i]/n) > 1){
            result.push(i)
        }
    }

    return result.length ? result :[-1]
 
}

// function findDuplicates(a) {

// const n = a.length;
// const result = [];
// const seen = new Set();

// for (let i = 0; i < n; i++) {
// const index = a[i] % n; 
// a[index] += n;
// }
// for (let i = 0; i < n; i++) {
// if (Math.floor(a[i] / n) > 1 && !seen.has(i)) {
// result.push(i);
// seen.add(i);
// }

// a[i] %= n;
// }
// if (result.length === 0) {
// return [-1];
// }
// return result.sort((x, y) => x - y); // Ensure ascending
// order
// }

// Input: a[] = {3,4,12,3,12,3,4,4,12,7,11,6,5}

const a1 = [3, 4, 12, 3, 12, 3, 4, 4, 12, 7, 11, 6, 5];
const output1 = findDuplicates(a1);
console.log(output1); // Output: [ 3, 4, 12 ]
// Input: a[] = {0, 0, 0, 0}
const a2 = [0, 0, 0, 0];
const output2 = findDuplicates(a2);
console.log(output2); // Output: [ 0 ]
// Input: a[] = {1, 2, 3, 4, 5}
const a3 = [1, 2, 3, 4, 5];
const output3 = findDuplicates(a3);
console.log(output3); // Output: [ -1 ]
// Input: a[] = {1, 2, 1, 3, 2}
const a4 = [1, 2, 1, 3, 2];
const output4 = findDuplicates(a4);
console.log(output4); // Output: [ 1, 2 ]