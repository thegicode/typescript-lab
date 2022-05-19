const { getText } = require("../../src/abc/getText");
test("get text", () => {
  expect(getText()).toBe("text");
});
