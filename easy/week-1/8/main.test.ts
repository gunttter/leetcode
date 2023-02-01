import { search } from "./main";

test("Basic input example", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});
test("Empty input", () => {
  expect(search([], 2)).toStrictEqual(-1);
});
