test("adds 1 + 2 to equal 3", () => {
  const sum = require("../../src/abc/sum");
  expect(sum(1, 2)).toBe(3);
});
