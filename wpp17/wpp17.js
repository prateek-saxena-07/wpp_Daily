// WPP_17

// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.
function alphabet_char_Shift(str) {
  var all_chars = str.split("");
  for (var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_Shift("abcdxyz"));