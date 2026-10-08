// DEBUGGING TASK: Fix the 3 mistakes below.
// Goal: Remove the outer spaces, then print lowercase and uppercase versions.
// Expected output (with no spaces at the beginning or end):
// saif ahmed
// SAIF AHMED
//
// Hints:
// 1. Calling a method needs ().
// 2. JavaScript is case-sensitive.
// 3. Both outputs should use the cleaned name.
//
// Run this file: node "low&up&trim.js"

let userName = "   Saif Ahmed   ";

let cleanName = userName.trim();

console.log(cleanName.toLowerCase());
console.log(userName.toUpperCase());

// ============================================================
// MORE PRACTICE: Complete one task at a time.
// Keep your code above. Write each answer under its TODO comment.
// ============================================================

// TASK 1: Clean an email address.
// Remove the outer spaces and convert the email to lowercase.
// Save the result in a NEW variable and print it.
// Expected output: saif@example.com
let emailInput = "   SAIF@EXAMPLE.COM   ";

// TODO: Write your code here.


// TASK 2: Make a heading.
// Remove the outer spaces and convert the heading to uppercase.
// Expected output: LEARNING JAVASCRIPT
let headingInput = "   learning JavaScript   ";

// TODO: Write your code here.


// TASK 3: Keep the spaces BETWEEN words.
// Remove only the outer spaces, then convert the sentence to lowercase.
// Expected output: i   love   javascript
// Notice: There are still THREE spaces between each word!
let sentenceInput = "   I   LOVE   JAVASCRIPT   ";

// TODO: Write your code here.


// TASK 4: Does the original value change?
// Save a trimmed, uppercase version in a new variable.
// Print the original AND the new value, each between square brackets.
// Hint: You can join text with +.
// Expected output:
// [   hello   ]
// [HELLO]
let greetingInput = "   hello   ";

// TODO: Write your code here.


// TASK 5: Fix another bug.
// Uncomment the three code lines below, then fix them.
// Expected output: javascript
// Hint: Each string method returns a value. Where is that value saved?

// let languageInput = "   JavaScript   ";
// languageInput.trim();
// console.log(languageInput.toLowerCase());

// BONUS: Try solving Task 1 in a single console.log() statement.
