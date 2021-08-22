import { search } from "./01binary-search";
import { removeElement } from "./02remove-element";
import { sortedSquares } from "./03squares-of-a-sorted-array";
import { minSubArrayLen } from "./04min-sub-array-Len";

describe("01binary-search", () => {
  test("1", () => {
    const nums: number[] = [-1, 0, 3, 5, 9, 12],
      target: number = 9,
      result: number = 4;
    expect(search(nums, target)).toBe(result);
  });

  test("2", () => {
    const nums: number[] = [-1, 0, 3, 5, 9, 12],
      target: number = 2,
      result: number = -1;
    expect(search(nums, target)).toBe(result);
  });
});

describe("02remove-element", () => {
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

describe("04minSubArrayLen", () => {
  test("1", () => {
    const target = 7,
      nums = [2, 3, 1, 2, 4, 3],
      result = 2;
    expect(minSubArrayLen(target, nums)).toBe(result);
  });

  test("2", () => {
    const target = 4,
      nums = [1, 4, 4],
      result = 1;
    expect(minSubArrayLen(target, nums)).toBe(result);
  });

  test("3", () => {
    const target = 11,
      nums = [1, 1, 1, 1, 1, 1, 1, 1],
      result = 0;
    expect(minSubArrayLen(target, nums)).toBe(result);
  });
});
