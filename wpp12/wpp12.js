// WPP_12

// Write a JavaScript program to reverse a given string.

function string_reverse(str) {
  return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));
