// WPP_8

// Write a JavaScript program to check whether a string starts with 'Java'  if it does not then  return False.
function start_spec_str(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4);
  if (front == "Java") {
    return true;
  } else {
    return false;
  }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));
