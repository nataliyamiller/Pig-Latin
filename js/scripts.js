var finalWord;
var vowels = ["a", "e", "i", "o", "u"];

var vowelChecker = function(userWord) {
  return vowels.indexOf(userWord[0]) > -1;
}

var consonantChecker = function(userWord) {

  if(!vowelChecker(userWord)) {
    for (var i = 0; i < userWord.length; i++) {
      if(vowels.indexOf(userWord[i]) > -1) {
        return i;
      }
    }
  }
}

var consonantMover = function(userWord) {
  if (!vowelChecker(userWord)) {
    var index = consonantChecker(userWord);
    finalWord = userWord.slice(index) + userWord.slice(0, index);
  } else {
    var finalWord = userWord;
  }
  return finalWord += "ay";
}

var quChecker = function(userWord) {
  var index = consonantChecker(userWord);
  var newWord = userWord.slice(0, index + 1);
    if (newWord.indexOf("qu") > -1) {
      return true;
    } else {
      return false;
    }
}
