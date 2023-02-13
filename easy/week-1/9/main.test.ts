import { floodFill } from "./main";

test("Basic input example", () => {
  expect(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  ).toStrictEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});
test("Example with empty", () => {
  expect(
    floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    )
  ).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});
