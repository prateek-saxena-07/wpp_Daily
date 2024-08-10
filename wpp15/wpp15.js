// WPP_15

// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3


function sum(...theArgs)
{
   let total = 0;
   for (const arg of theArgs) {
     total += arg;
   }
   return total;
}


function sum2(args)
{
    return args.reduce((total,num)=>total+num,0)
}

console.log(sum(...[1, 2, 3]))
console.log(sum2([1, 2, 3]));