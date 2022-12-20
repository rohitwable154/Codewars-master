// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

const reverseNumber = (n) =>
  n > 0
    ? +[...`${n}`].reverse().join("")
    : +[...`${n}`].slice(1).reverse().join("") * -1;
