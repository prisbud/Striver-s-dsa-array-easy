function isBalanced(exp){
let stack = []
let map ={
    '[':']',
    '{':'}',
    '(':')'
}

for(let char of exp){
    if(map[char]){
        stack.push(char)
    }
    else{
        let top = stack.pop()
        if(!top || map[top] !== char){
            return false
        }
    }
}
return stack.length === 0

}

const exp1 = '[(])';
const exp2 = '[()]{}{[()()]()}';
console.log("check balanced or not for '[(])': ",
isBalanced(exp1) ? "Balanced": "Not Balanced");
console.log("check balanced or not for '[()]{}{[()()]()}': ",
isBalanced(exp2) ? "Balanced": "Not Balanced");
