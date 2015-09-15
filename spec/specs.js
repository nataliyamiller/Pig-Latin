describe('pigLatin', function() {
  it("is adding ay to the end if word starts with a vowel", function() {
    expect(pigLatin("orange")).to.equal("orangeay")
  });
});
