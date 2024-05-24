import { twoSum } from "./two-sum";

describe("two-sum", () => {
  test("1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = [0, 1];
    expect(twoSum(nums, target)).toEqual(result);
  });
});
