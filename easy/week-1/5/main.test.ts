import { isPalindrome } from "./main";

test("Deletes non-alphanumeric characters and convert everything to lowercase.Then split string into an ordered list of substrings, reverse list and join them in one string.", () => {
  expect(isPalindrome("race a car")).toBe(false);
});
test("Deletes non-alphanumeric characters and convert everything to lowercase.Then split string into an ordered list of substrings, reverse list and join them in one string.", () => {
  expect(isPalindrome("asfjfsa")).toBe(true);
});
