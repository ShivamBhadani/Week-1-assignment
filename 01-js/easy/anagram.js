/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }
  const freq1={};
  const freq2={};
  for(int i=0;i<str1.length;i++){
    freq1[str1[i]]++;
    freq2[str2[i]]++;
  }
  if(freq1===freq2){
    return true;
  }
  return false;

}

module.exports = isAnagram;
