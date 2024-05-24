//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
//
// 你可以按任意顺序返回答案。
//
//
//
// 示例 1：
//
//
//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
//解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
//
//
// 示例 2：
//
//
//输入：nums = [3,2,4], target = 6
//输出：[1,2]
//
//
// 示例 3：
//
//
//输入：nums = [3,3], target = 6
//输出：[0,1]
//
//
//
//
// 提示：
//
//
// 2 <= nums.length <= 10⁴
// -10⁹ <= nums[i] <= 10⁹
// -10⁹ <= target <= 10⁹
// 只会存在一个有效答案
//
//
//
//
// 进阶：你可以想出一个时间复杂度小于 O(n²) 的算法吗？
//
// Related Topics 数组 哈希表 👍 18574 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
// 思路，小于O(n2)，要用空间换时间。
// 求： n + nums[i] = target, n 不知道， nums[i]和target知道，所以可以转换为 n = target- nums[i]
// 循环中 i 是知道的，只要知道n的下标就可以，因此每次都记住n 的值和下标，一旦遇到符合 n = target- nums[i] 的 就把n和i返回出去

// 做算法题的套路，先确定思路，写出数学公式，再编码。常用优化方式，空间换时间。
export function twoSum(nums: number[], target: number): number[] {
  // 存，值对应的下标, value: index
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prevNum = target - num;
    const prevNumIndex = hashMap.get(prevNum);

    if (prevNumIndex === undefined) {
      hashMap.set(num, i);
      continue;
    }

    return [prevNumIndex, i];
  }

  return [];
}

//leetcode submit region end(Prohibit modification and deletion)
