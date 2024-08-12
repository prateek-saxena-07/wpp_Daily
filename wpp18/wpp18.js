function array_max_diff(arr) {
  if (arr.length < 2) return 0; // or throw an error if you prefer

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return max - min;
}
// OR
function array_max_diff(arr) {
    arr.sort((a,b)=> a - b )
    
    return arr[arr.length-1]-arr[0]
}
console.log(array_max_diff([1, 2, 3, 8, 9]));
console.log(array_max_diff([1, 2, 3, 18, 9]));
console.log(array_max_diff([13, 2, 3, 8, 9]));
