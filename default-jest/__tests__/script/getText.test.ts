import { getText } from "../../src/dir2/getText";

test("get text", () => {
  expect(getText()).toBe("text");
});
