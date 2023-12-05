/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let string1 = str;
    let string2 = string1.toLowerCase();
    let count = 0;
    for(let i=0;i<string2.length;i++){
        if(string2[i]==='a'||string2[i]==='e'||string2[i]==='i'||string2[i]==='o'||string2[i]==='u'){
            count++;
        }
    }
    return count;
}

module.exports = countVowels;