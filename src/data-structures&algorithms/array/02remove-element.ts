function removeElement(nums: number[], val: number): number {
  let slowIndex = 0;
  let fastIndex = 0;
  for (; fastIndex < nums.length; fastIndex++) {
    if (val !== nums[fastIndex]) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
  }
  return slowIndex;
}

export {removeElement}