/**
 * @description 最长无重复子串。
 *              双指针，右一直加，加到有重复，就左一直加，直到无重复。(至于这个规律怎么推出来的，不知道)
 *              记录每个字串长度，找出最长的。
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (!s) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let max = 0;
  const set = new Set();
  let left = 0,
    right = -1;
  for (; left < s.length; left++) {
    if (left !== 0) {
      set.delete(s[left - 1]);
    }

    while (right + 1 < s.length && !set.has(s[right + 1])) {
      set.add(s[right + 1]);
      ++right;
    }

    max = Math.max(set.size, max);
  }

  return max;
}
