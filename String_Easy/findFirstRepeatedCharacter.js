function findFirstRepeatedCharacter(str){
 let seenChar = new Set()


 for(let char of str){
    if(seenChar.has(char)){
        return false
    }
    seenChar.add(char)
 }
return null
}

const inputString3 = "abracadabra";
const firstRepeat1 =
findFirstRepeatedCharacter(inputString3);
console.log(`First repeated character in
"${inputString3}":`, firstRepeat1);