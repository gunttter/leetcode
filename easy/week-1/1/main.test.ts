import { twoSum } from "./main";

test("input: nums = [3,2,4], target = 6; expected output: [1,2]", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});
