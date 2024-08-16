const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
  return pulled;
};
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c"));
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b"));



// Explanation:
//  let argState = Array.isArray(args[0]) ? args[0] : args;
// Purpose:
// Single Array Argument: If the user provides a single array as the first argument after arr, the code treats that array as the list of values to remove from arr.
// Multiple Arguments: If the user provides multiple individual arguments (not wrapped in an array), then all these arguments are considered the list of values to remove.
// Example Scenarios:
// Single Array Passed as Argument:

// javascript
// 
// let numbers = [1, 2, 3, 4, 5];
// let removed = pull(numbers, [2, 5]);
// args = [[2, 5]]
// argState will be [2, 5] because args[0] is an array.
// Multiple Arguments Passed:

// javascript
// 
// let numbers = [1, 2, 3, 4, 5];
// let removed = pull(numbers, 2, 5);
// args = [2, 5]
// argState will be [2, 5] because args[0] is not an array (it's just 2).