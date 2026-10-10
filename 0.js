// Capitalize Every first Letter of each word in a String

let text = "capitalize every first Letter of each word in a string";
let words = text.split(" ")


for(let i = 0; i < words.length; i++ ){
    let word = words[i];
    let firstLetter = word.charAt().toUpperCase();
    let remainingWord = word.slice(1);
    words[i] = firstLetter + remainingWord;
}

text = words.join(" ");
console.log(text);