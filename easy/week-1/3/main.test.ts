import { mergeTwoLists } from "./main";

test("", () => {
  expect(
    mergeTwoLists({ val: 1, next: null }, { val: 4, next: null })
  ).toStrictEqual({
    val: 1,
    next: { val: 4, next: null },
  });
});
