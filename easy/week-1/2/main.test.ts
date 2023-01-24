import { isValid } from "./main";

test("input: s = ()[]{}; expected output: true ", () => {
  expect(isValid("()[]{}")).toBe(true);
});
