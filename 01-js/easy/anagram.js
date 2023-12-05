/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram2(str1, str2) {
  let string1= str1.toLowerCase();
  let string2= str2.toLowerCase();
  if (string1.length !== string2.length) {
    return false;
  }
  let charCount = {};
  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let i = 0; i < string2.length; i++) {
    let char = string2[i];
    if (charCount[char]) {
      charCount[char]--;
    } else {
      return false;
    }
  }
  return true;
}

function isAnagram(str1, str2) {
  let string1= str1.toLowerCase();
  let string2= str2.toLowerCase();
  let sort1 = string1.split('').sort().join('');
  let sort2 = string2.split('').sort().join('');
  if (sort1 === sort2) {
    return true;
  }
  return false;
}


module.exports = isAnagram;
