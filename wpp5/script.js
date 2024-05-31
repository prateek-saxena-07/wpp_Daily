//WPP_5

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function remove(string, index) {
  return string.replace(string.charAt(index), "");
}
console.log(remove("Prateek", 0));
