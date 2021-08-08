/**
 * @description  循环的时候，通过hash表找前面有无符合的元素（思想：缓存），有则返回，没有则添加到hash
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    const hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const key = target - item
        if (!hashMap.has(key)) {
            hashMap.set(item, i)
            continue;
        }
        return [hashMap.get(key), i]
    }
};


let nums = [2, 7, 11, 15], target = 9
const result = twoSum(nums, target)
console.log(result)