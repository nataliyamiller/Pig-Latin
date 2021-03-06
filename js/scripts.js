var finalWord;
var vowels = ["a", "e", "i", "o", "u"];
var ay = "ay";

var vowelChecker = function(userWord) {
  return vowels.indexOf(userWord[0]) > -1;
}

var yChecker = function(userWord) {
  return userWord[0] === "y";
}

var vowelMover = function(userWord) {
  return userWord + ay;
}

var consonantIndexFinder = function(userWord) {
  if(!vowelChecker(userWord)) {
    for (var i = 0; i < userWord.length; i++) {
      if(vowels.indexOf(userWord[i]) > -1) {
        return i;
      }
    }
  }
}

var consonantMover = function(userWord) {
  var index = consonantIndexFinder(userWord);
  if (index >= 0) {
    return userWord.slice(index) + userWord.slice(0, index) + ay;
  }
}

var quChecker = function(userWord) {
  var index = consonantIndexFinder(userWord);
  var newWord = userWord.slice(0, index + 1);
    if (newWord.indexOf("qu") > -1) {
      return true;
    } else {
      return false;
    }
}

var quMover = function(userWord) {
  if(quChecker(userWord)) {
    var index = consonantIndexFinder(userWord);
    return userWord.slice(index + 1) + userWord.slice(0, index + 1) + ay;
  }
}

var pigLatinWord = function(userWord) {
  if(vowelChecker(userWord) || yChecker(userWord)) {
    return vowelMover(userWord);
  } else if (quChecker(userWord)) {
    return quMover(userWord);
  } else {
    return consonantMover(userWord);
  }
}

var pigLatin = function(userString) {
  var strings = userString.split(" ");
  var finalString = "";
  strings.forEach(function(string) {
    finalString += pigLatinWord(string) + " ";
  });
  return finalString.trim();
}


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var userWord = $("input#user-word").val();
    var result = pigLatin(userWord);

    $(".transformed-word").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
