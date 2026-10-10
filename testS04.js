// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let text = "If a given string has either x, replace x by y. if the given string has X, replace it by Y."


for(let i = 0; i < text.length; i++){
    
    if(text.includes("x")){
       text = text.replaceAll("x", "y");
    }
    if(text.includes("X")){
       text = text.replaceAll("X", "Y");
    }
}
console.log(text);