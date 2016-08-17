describe("Travis should run Karma,", function() {
  it("and also load jQuery", function() {
    expect($).not.toBe(undefined);
  });
});
