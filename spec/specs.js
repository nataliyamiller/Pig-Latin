describe('pigLatin', function() {

  it("is returning true if word starts with a vowel", function() {
    expect(vowelChecker("orange")).to.equal(true);
  });

  it("is returning false if word doesn't start with a vowel", function() {
    expect(vowelChecker("bob")).to.equal(false);
  });

  it("is moving first letter to the end of word if word doesn't start with a vowel", function() {
    expect(consonantModifier("cobcat")).to.equal("obcatcay");
  });

  it("is adding ay to the end if word starts with a vowel", function() {
    expect(consonantModifier("orange")).to.equal("orangeay");
  });
});
