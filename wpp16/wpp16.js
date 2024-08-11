// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swap(arr)
{
    if (arr.length == 1)
        return arr
    arr[0] = arr[0] + arr[arr.length - 1]
    arr[arr.length - 1] = arr[0] - arr[arr.length - 1]
    arr[0] = arr[0] - arr[arr.length - 1]
    return arr
}

// OR
function swap2(arr)
{
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}

console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));
console.log(swap2([1, 2, 3, 4]));
console.log(swap2([0, 2, 1]));
console.log(swap2([3]));