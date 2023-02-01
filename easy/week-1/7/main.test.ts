import { isAnagram } from "./main";

test("Basic input example", () => {
  expect(isAnagram("cudk", "duck")).toBe(true);
});
test("Empty input", () => {
  expect(isAnagram(" ", " ")).toBe(true);
});
test("Input with numbers", () => {
  expect(isAnagram("123asd", "dsa311")).toBe(false);
});
