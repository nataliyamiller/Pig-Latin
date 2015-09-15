var finalWord;


var vowelChecker = function(userWord) {
  var vowels = ["a", "e", "i", "o", "u"];
  var startsWithVowel = false;

  for (var i = 0; i < vowels.length; i++) {
    if (userWord[0] === vowels[i]) {
      startsWithVowel = true;
    }
  }
  return startsWithVowel;
}



var consonantModifier = function(userWord) {

  if (!vowelChecker(userWord)) {
    finalWord = userWord.slice(1) + userWord.slice(0, 1);
  } else {
    finalWord = userWord;
  }
  return finalWord += "ay";
}
