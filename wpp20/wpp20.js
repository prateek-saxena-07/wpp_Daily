function mirror_bits(n) {
  let t = n.toString(2).split("");
  // You can use toString() on numbers to convert them to different bases (e.g., binary, octal, hexadecimal).
  console.log(t);
  let str_len = t.length;
  // Add leading zeroes to make the length of the binary string 8
  for (let i = 0; i < 8 - str_len; i++) {
    t.unshift("0");
  }console.log(t.reverse());
    return parseInt(t.reverse().join(""), 2);
    
}
// 14 -> 00001110 -> 01110000 -> 112
console.log(mirror_bits(14));
// 56 -> 00111000 -> 00011100 -> 28
// console.log(mirror_bits(56));
// // 234 -> 11101010 -> 01010111 -> 87
// console.log(mirror_bits(234));
