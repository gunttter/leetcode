import { isPalindrome } from "./main";

test("Basic input example", () => {
  expect(isPalindrome("race a car")).toBe(false);
});
test("Example with numbers and non-alphanumeric characters", () => {
  expect(isPalindrome("01asfj ,;, jfsa10")).toBe(true);
});
