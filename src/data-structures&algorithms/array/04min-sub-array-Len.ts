function minSubArrayLen(target: number, nums: number[]): number {
  let result: number, fastIndex: number, slowIndex: number, sum: number;

  fastIndex = slowIndex = sum = result = 0;

  for (; fastIndex < nums.length; fastIndex++) {
    sum += nums[fastIndex];

    while (sum >= target) {
      const subLength = fastIndex - slowIndex + 1;
      if (result === 0) {
        result = subLength;
      } else {
        result = Math.min(subLength, result);
      }
      sum -= nums[slowIndex++];
    }
  }

  return result;
}

export { minSubArrayLen };
