/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string1=str.toLowerCase().replace(/[^a-z0-9]/g,""); //here g flag means it will replace all the occurences in the string.
  let string2=string1.split("").reverse().join("");
  if(string1!==string2){
    return false;
  }
  
  return true;
}

module.exports = isPalindrome;
