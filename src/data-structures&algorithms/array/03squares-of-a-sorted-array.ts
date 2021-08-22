function sortedSquares(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(0);
  let numsLeft = 0;
  let numsRight = nums.length - 1;
  let resultRight = nums.length - 1;

  // numsLeft和numsRight相等时，是最后一次处理
  while (numsLeft <= numsRight) {
    if (Math.pow(nums[numsLeft], 2) > Math.pow(nums[numsRight], 2)) {
      result[resultRight] = Math.pow(nums[numsLeft], 2);
      numsLeft++;
    } else {
      result[resultRight] = Math.pow(nums[numsRight], 2);
      numsRight--;
    }
    resultRight--;
  }
  return result;
}

export { sortedSquares };
