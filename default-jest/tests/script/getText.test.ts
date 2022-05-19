import { getText } from "../../src/script/getText";

test("get text", () => {
  expect(getText()).toBe("text");
});
