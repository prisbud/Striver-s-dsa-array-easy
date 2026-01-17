function bracketNumbers(str) {
    let stack = []
    let result = []

    let map = {
        "{":"}",
        "[":"]",
        "(":")"
    }

    for (const char of str) {
        if()

    }
}

// Input: str = "(aa(bdc))p(dee)"
const str1 = "(aa(bdc))p(dee)";
const output1 = bracketNumbers(str1);
console.log(`Input: str = "${str1}"`);
console.log(`Output: ${output1}`);

// Input: str = "([{}])"
const str2 = "([{}])";
const output2 = bracketNumbers(str2);
console.log(`Input: str = "${str2}"`);
console.log(`Output: ${output2}`);

// Input: str = "a(b)c[d]"
const str3 = "a(b)c[d]";
const output3 = bracketNumbers(str3);
console.log(`Input: str = "${str3}"`);
console.log(`Output: ${output3}`);

// Input: str = ""
const str4 = "";
const output4 = bracketNumbers(str4);
console.log(`Input: str = "${str4}"`);
console.log(`Output: ${output4}`);

// Input: str = "((("
const str5 = "(((";
const output5 = bracketNumbers(str5);
console.log(`Input: str = "${str5}"`);
console.log(`Output: ${output5}`);

// Input: str = ")))"
const str6 = ")))";
const output6 = bracketNumbers(str6);
console.log(`Input: str = "${str6}"`);
console.log(`Output: ${output6}`); 