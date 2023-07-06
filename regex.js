// Problem #1
let str0 = "Hello World";
let regEx0 = /Hello World/;
console.log(str0.match(regEx0))

// Problem #2 - flag: i (case insensitive)
let str1 = "Hello world";
let regEx1 = /Hello World/i;
console.log(str1.match(regEx1))

// Problem #3 - g (global search)
let str2 = "Hello World Hello World";
let regEx2 = /Hello World/g;
console.log(str2.match(regEx2))

// Problem #4 - ^ caret symbol checks if the string starts with the given pattern
let str3 = "Hello World Hello World";
let regEx3 = /^Hello World/g;   
console.log(str3.match(regEx3))

// Problem #5 - $ dollar symbol checks if the string ends with a given pattern
let str4 = "Hello World Hello World";
let regEx4 = /Hello World$/g;
console.log(str4.match(regEx4))

// Problem #6 - Brackets specify a set of characters that match regardless of order
let str5 = "Hello World";
let regEx5 = /[l]/g;
console.log("Problem #6")
console.log(str5.match(regEx5))

// Problem #7 - Using multiple characters in brackets
let str6 = "Hello World";
let regEx6 = /[hl]/gi;
console.log("Problem #7")
console.log(str6.match(regEx6))

// Problem #8 - Using an alphabet range in brackets
let str7 = "Hello World";
let regEx7 = /[d-l]/gi;
console.log("Problem #8")
console.log(str7.match(regEx7))

// You can also specify a range of characters using - inside square brackets.

// [a-e] is the same as [abcde].

// [1-4] is the same as [1234].

// [0-39] is the same as [01239].

// You can complement (invert) the character set by using caret ^ symbol at the start of a square-bracket.

// [^abc] means any character except a or b or c.

// [^0-9] means any non-digit character.



// Problem #6 - matchAll
// let str15 = "Hello World Test Hello World";
// let regEx15 = /Hello World/g;
// let matches = str15.matchAll(regEx15);
// for (let match of matches) {
//     console.log(match);
// }

//Quantifiers
//The quantifiers are used in the regular expression for specifying the number of occurrences of a character. 