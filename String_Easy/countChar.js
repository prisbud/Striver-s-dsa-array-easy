function countCharacters(str) {

    let map = {}

    // for (let i = 0; i < str.length; i++) {
    //     map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1
    // }

    for(const char of str){
        map[char] = (map[char] || 0) + 1
    }
    return map
}

const inputString1 = "hello world";
const counts1 = countCharacters(inputString1);
console.log(counts1);