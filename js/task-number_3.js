const findLongestWord = function (string) {
  const longString = string.split(" ");
  let nothing = 0;
  let result = "";
  for (let i = 0; i < longString.length; i += 1) {
    if (longString[i].length > nothing) {
      nothing = longString[i].length;
      result = longString[i];
    }
  }

  return result;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
