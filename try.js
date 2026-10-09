function abbreviation(text) {
  let result = "";
 
  // Add the first letter of the text
  result += text.charAt(0).toUpperCase();
 
  // Loop through each character
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === " ") {
      let nextChar = text.charAt(i + 1);
      result += nextChar.toUpperCase();
    }
  }
 
  return result;
}

console.log(abbreviation("New York City"));