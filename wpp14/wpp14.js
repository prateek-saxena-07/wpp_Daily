// WPP_14

// Write a JavaScript program to extract the first half of an even string.

function first_half(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(first_half("Python"));
console.log(first_half("JavaScript"));
console.log(first_half("PHP"));