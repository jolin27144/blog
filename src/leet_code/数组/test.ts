import { search } from "./01二分查找";

test("01二分查找", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  expect(search(nums, target)).toBe(4);
});
