var finalWord;
var vowels = ["a", "e", "i", "o", "u"];

var vowelChecker = function(userWord) {
  var startsWithVowel = false;
  for (var i = 0; i < vowels.length; i++) {
    if (userWord[0] === vowels[i]) {
      startsWithVowel = true;
    }
  }
  return startsWithVowel;
}


var consonantChecker = function(userWord) {
  var newWord;
  if(!vowelChecker(userWord)) {
    newWord = userWord.split("");

    for (var i = 0; i < vowels.length; i ++) {
      for (var j = 0; j < userWord.length; j++) {

      if(vowels[i] === userWord[j]) {
        return newWord[j];
        }
      }
    }
  }
}


var consonantModifier = function(userWord) {
  if (!vowelChecker(userWord)) {
    finalWord = userWord.slice(1) + userWord.slice(0, 1);
  } else {
    finalWord = userWord;
  }
  return finalWord += "ay";
}
