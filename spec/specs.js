describe('vowelChecker', function() {
  it("is returning true if word starts with a vowel", function() {
    expect(vowelChecker("orange")).to.equal(true);
  });

  it("is returning false if word doesn't start with a vowel", function() {
    expect(vowelChecker("bob")).to.equal(false);
  });
});

describe('yChecker', function() {
  it("is returning true if word starts with a letter y", function() {
    expect(yChecker("yrra")).to.equal(true);
  });
});

describe('vowelMover', function() {
  it("is adding ay to the end of the word if the word starts with a vowel", function() {
    expect(vowelMover("orange")).to.equal("orangeay");
  });
});

describe('consonantIndexFinder', function() {
  it("is returning index of a first vowel in a word", function() {
    expect(consonantIndexFinder("brake")).to.equal(2);
  });

  it("is returning index of a first vowel in a word", function() {
    expect(consonantIndexFinder("mother")).to.equal(1);
  });
});

describe('consonantMover', function() {
  it("is moving first letter to the end of word if word doesn't start with a vowel", function() {
    expect(consonantMover("mother")).to.equal("othermay");
  });

  it("is moving two first letters to the end of word if word starts with two consonants", function() {
    expect(consonantMover("crack")).to.equal("ackcray");
  });

  it("is moving three first letters to the end of word if word starts with three consonants", function() {
    expect(consonantMover("scratch")).to.equal("atchscray");
  });
});

describe('quChecker', function() {
  it("is recognizing the qu letters at the beginning of the word if the word starts with a consonant", function() {
    expect(quChecker("squshel")).to.equal(true);
  });

  it("is recognizing the qu letters at the beginning of the word if the word starts with a qu", function() {
      expect(quChecker("quater")).to.equal(true);
  });

});

describe('quMover', function() {
  it("is recognizing the qu substring at the beginning of word and moves qu to the end", function() {
    expect(quMover("squshel")).to.equal("shelsquay");
  });

  it("is recognizing the qu substring at the start of word and moves qu to the end", function() {
    expect(quMover("quarter")).to.equal("arterquay");
  });
});

describe('pigLatin', function() {
  it("is adding ay to the end of the word if the word starts with a vowel", function() {
    expect(pigLatin("orange")).to.equal("orangeay");
  });

  it("is moving first letter to the end of word if word doesn't start with a vowel", function() {
    expect(pigLatin("mother")).to.equal("othermay");
  });

  it("is recognizing the qu substring at the beginning of word and moves qu to the end", function() {
    expect(pigLatin("squshel")).to.equal("shelsquay");
  });

  it("is recognizing the qu substring at the start of word and moves qu to the end", function() {
    expect(pigLatin("quarter")).to.equal("arterquay");
  });

  it("is not moving y to the end of the word if the word starts with y", function() {
    expect(pigLatin("yaaay")).to.equal("yaaayay");
  });
});
