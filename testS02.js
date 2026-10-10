// ### Task-2: 
// Count how many times a string has the letter `a` or `A`


const text ="Count how many times a string has the letter A";
let count1 = 0;
let count2 = 0;


for(let i = 0; i < text.length; i++){

    if(text[i] === "a"){
        count1++;
    }else if(text[i] === "A"){
        count2++;
    }
}
console.log(`a = ${count1}\nA = ${count2}`);