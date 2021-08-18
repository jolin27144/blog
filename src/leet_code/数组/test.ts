import { search } from "./01binary-search";
import { removeElement } from "./02remove-element";
import { sortedSquares } from "./03squares-of-a-sorted-array";

test("01二分查找", () => {
  const nums: number[] = [-1, 0, 3, 5, 9, 12];
  const target: number = 9;
  expect(search(nums, target)).toBe(4);
});

describe("02移除元素", () => {
  test("1", () => {
    let nums: number[] = [3, 2, 2, 3],
      val: number = 3;
    const result: number[] = [2, 2];
    expect(removeElement(nums, val)).toBe(2);
    expect(nums.slice(0, 2)).toEqual(result);
  });

  test("2", () => {
    let nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2],
      val: number = 2;
    const result = [0, 1, 3, 0, 4];
    expect(removeElement(nums, val)).toBe(5);
    expect(nums.slice(0, 5)).toEqual(result);
  });
});

describe("03squares-of-a-sorted-array", () => {
  test("1", () => {
    const nums: number[] = [-4, -1, 0, 3, 10];
    const result: number[] = [0, 1, 9, 16, 100];
    expect(sortedSquares(nums)).toEqual(result);
  });

  test("2", () => {
    const nums: number[] = [-7, -3, 2, 3, 11];
    const result: number[] = [4, 9, 9, 49, 121];
    expect(sortedSquares(nums)).toEqual(result);
  });
});
