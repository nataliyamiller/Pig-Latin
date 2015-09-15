

var pigLatin = function(userWord) {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < vowels.length; i++) {
    if (userWord[0] === vowels[i]) {
      userWord += "ay";
    }
  }
  return userWord;
}
