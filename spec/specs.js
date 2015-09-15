describe('vowelChecker', function() {
  it("is returning true if word starts with a vowel", function() {
    expect(vowelChecker("orange")).to.equal(true);
  });

  it("is returning false if word doesn't start with a vowel", function() {
    expect(vowelChecker("bob")).to.equal(false);
  });
});

describe('consonantChecker', function() {
  it("is returning index of a first vowel in a word", function() {
    expect(consonantChecker("brake")).to.equal(2);
  });

  it("is returning index of a first vowel in a word", function() {
    expect(consonantChecker("mother")).to.equal(1);
  });
});

describe('consonantMover', function() {
  it("is moving first letter to the end of word if word doesn't start with a vowel", function() {
    expect(consonantMover("mother")).to.equal("othermay");
  });

  it("is adding ay to the end if word starts with a vowel", function() {
    expect(consonantMover("orange")).to.equal("orangeay");
  });

  it("is moving two first letters to the end of word if word starts with two consonants", function() {
    expect(consonantMover("crack")).to.equal("ackcray");
  });

  it("is moving three first letters to the end of word if word starts with three consonants", function() {
    expect(consonantMover("scratch")).to.equal("atchscray");
  });
});
