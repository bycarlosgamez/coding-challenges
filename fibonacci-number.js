// given a number
// return a number that is a fibonacci number from the fibonacci sequence
// the sequence is from number and each number is the sum of the two preceding ones, starting from 0 and 1

// var fib = function(n) {
//   // set an object call memo to store values of f(n)
//   // if n is equal to 1 or 0 return n
//   // else if we havent seen n, store n - to f(n -1) + f(n - 2) in memo
//   // return memo[n]
//   let memo = {}

//   if(n === 0 || n === 1) {
//     return n
//   }

//   if(memo[n]){
//     return memo[n]
//   } else {
//     let result = fib(n - 1) + fib(n - 2)
//     memo[n] = result
//     console.log(result)
//     return result
//   }
// }

let memo = {};
var fib = function (n) {
  // set an object call memo to store values of f(n)
  // if n is equal to 1 or 0 return n
  // else if we havent seen n, store n - to f(n -1) + f(n - 2) in memo
  // return memo[n]

  if (n === 0 || n === 1) {
    return n;
  }

  if (!memo[n]) {
    memo[n] = fib(n - 1) + fib(n - 2);
    console.log(memo[n]);
  }
  return memo[n];
};

// var fib = function(n) {
//   if(n === 0 || n === 1) {
//     return n
//   } else {
//     console.log(fib(n - 1) + fib(n - 2))
//     return (fib(n - 1) + fib(n - 2))
//   }
// }

// fib(0);
// fib(1);
// fib(2);
// fib(3);
// fib(4);
// fib(5);
// fib(6);
fib(10);

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
