// WPP_13

//  Write a JavaScript program to count the number of vowels in a given string.
function vowel_Count(str) {
  vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  c = 0;
    str.forEach(function (vowel) {
        if (vowels.includes(vowel))
      c++
  })
  
    return c;
}


console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));