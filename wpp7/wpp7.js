// WPP_7

// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function lastThree(str) {
  return str.length >= 3
    ? str.slice(-3) + str + str.slice(-3)
    : "must be 3 chars at least";
}
