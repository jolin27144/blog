---
theme: cyanosis
---
> [jolin27144/blog: blog (github.com)](https://github.com/jolin27144/blog#readme)
## HTML

## CSS

## JavaScirpt

### 柯里化

#### 1.写一个currying，要求 add(1)(2)(3)(4) 打印10。
```JavaScript
function add(...args) {
  return args.reduce((acc, item) => acc + item);
}

function currying(fn) {
  let args = [];

  function _c(...newArgs) {
    if (newArgs.length) {
      // 合并参数
      args = [...args, ...newArgs];
      // 继续返回函数
      return _c;
    } else {
      // 返回执行结果
      return fn.apply(null, args);
    }
  }

  /**
   * 追加的
   * =====================================
   * 利用console.log()打印函会调用fn.去掉最后的()
   */
  //_c.toString = () => {
  //  return fn.apply(null, args);
  //};

  return _c;
}
let addCurry = currying(add);
console.log(addCurry(1)(2)(3)(4)());

// 追加的
// console.log(addCurry(1)(2)(3)(4));

```

### 大数相加

### 内存回收机制

#### 1. let obj = new Vue()。这个obj什么时候会回收。直接new Vue呢

## Node.js

## 跨端

### 小程序

### react-native

## 前端工程化

### webpack

#### 1.loader和plugin的区别是什么？

#### 2.webpack打包优化


## 网络

### Http、http2、http3

#### 1. options请求是什么？有什么作用？

### 安全

#### 1.xss和csrf

## 数据结构

### 堆
将[1,2,5,12,7,17,25,19,36,99,22,24,46,92]这一组数，看成一个完全二叉树。

调整后，若所有父节点比子节点小，则为小根堆。

调整后，所所有父节点比子节点大，则为大根堆。

这种数据结构称为堆。

#### 小根堆
```javascript
/**
 *
 * 树的性质
 * 对于每个节点有NUM_CHILDREN个子节点，而不是2个，则公式为：
 *                 root at 0                  root at 1
 * Left child    index*NUM_CHILDREN + 1     index*NUM_CHILDREN
 * Right child   index* NUM_CHILDREN + 2    index*NUM_CHILDREN + 1
 * Parent        (index-1)/NUM_CHILDREN     index/NUM_CHILDREN
 *
 */

/**
 * 构建小根堆
 */
function buildMinHeap(arr) {
  // 向下取整
  for (let i = parseInt(arr.length / 2); i >= 0; i--) {
    sink(arr, i);
  }
}

/**
 * @description 下沉(这里是构建小根堆，大的父节点下沉)
 * @param {number[]} arr 堆
 * @param {number} parentIndex 需要判断是否需要下沉的节点索引
 * @returns arr
 */
function sink(arr, parentIndex) {
  // 先将最小节点的索引指向父节点
  let minIndex = parentIndex;
  // 左节点索引
  let leftNodeIndex = 2 * parentIndex + 1;
  // 右节点索引
  let rightNodeIndex = 2 * parentIndex + 2;
  // 判断是否有左节点
  const hasLeftNode = () => arr[leftNodeIndex] !== undefined;
  // 判断是否有右节点
  const hasRightNode = () => arr[rightNodeIndex] !== undefined;
  // 根据完全二叉树性质，没有左子节点，则已经没有子节点，不需要判断下沉。
  if (!hasLeftNode) {
    return;
  }
  // 如果有左节点且比父节点小。
  if (hasLeftNode && arr[parentIndex] > arr[leftNodeIndex]) {
    // 最小节点的索引指向左节点
    minIndex = leftNodeIndex;
  }
  // 如果有右节点且比父节点小。
  if (hasRightNode && arr[minIndex] > arr[rightNodeIndex]) {
    // 最小节点的索引指向右节点
    minIndex = rightNodeIndex;
  }
  // 如果父节点不是最小的节点。
  if (minIndex !== parentIndex) {
    // 父节点与最小的节点交换
    [arr[parentIndex], arr[minIndex]] = [arr[minIndex], arr[parentIndex]];
    // 交换后，以与父节点交换的子节点的索引，作为新的父节点，继续判断是否需要下沉
    return sink(arr, minIndex);
  }
  return arr;
}

/**
 * @description 上浮
 * @param {*} arr
 * @param {*} index
 * @returns
 */
function swim(arr, index) {
  // 父节点索引
  const parentIndex = parseInt((index - 1) / 2);
  // 是否有父节点
  const hasParent = () => arr[parentIndex] !== undefined;
  // 如果有父节点,并且大于自己
  if (hasParent && arr[parentIndex] > arr[index]) {
    // 和父节点交换
    [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
    return swim(arr, parentIndex);
  }
  return arr;
}

```

##### 插入
```javascript
/**
 * 插入
 * 尾部新增一个节点
 */
function insert(arr, el) {
  arr.push(el);
  // 插入叶子节点要进行上浮处理
  swim(arr, arr.length - 1);
}
```

##### 删除
```javascript
/**
 * 删除
 * 删除堆顶元素
 */
function deleteLast(arr) {
  // 先交换堆顶元素，和最后一个元素。
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  // 此时删除的是堆顶元素
  arr.pop();
  // 堆最后一个元素，被移到了堆顶，需要重新构建堆
  sink(arr, 0);
}
```

##### 排序
```javascript
/**
 * 堆排序
 */
function heapSort(heap) {
  // 排序后的元素
  let sort = [];
  // 最小堆
  let minHeap = [...heap];
  while (minHeap.length !== 0) {
    // 先交换堆顶元素，和最后一个元素。
    [minHeap[0], minHeap[minHeap.length - 1]] = [
      minHeap[minHeap.length - 1],
      minHeap[0]
    ];
    // 此时删除的是堆顶元素
    sort.push(minHeap.pop());

    // 堆最后一个元素，被移到了堆顶，需要重新构建堆
    sink(minHeap, 0);
    // [2, 5, 3, 7, 19, 17, 46, 12, 99, 22, 25, 28, 36, 92]
    // console.log(heap);
  }
  return sort;
}

```

#### 大根堆

实现思路一样，只是下沉的是小节点。上浮的是大节点。


## 算法

### 哈希表
#### 1.[两数之和](https://leetcode-cn.com/problems/two-sum/)
```javascript
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
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

### 滑动窗口
#### 1. [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
```javascript
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

// 输入: s = "abcabcbb"
// 输出: 3 

```

### 堆

#### 1.[数组中的第k大的元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)(字节)

求第k大元素：
1. 任取k个元素。
2. 把k个元素构建成最小堆。
3. 遍历剩下的元素，若比堆顶元素大，则替换堆顶的元素。堆顶元素下沉。
4. 遍历完，等到k个元素构成的最小堆，堆顶元素即为第k大的元素。

举例：

求[1,2,3,4,5] 里面第3大的元素。

则先取[1,2,3]三个数，构成最小堆。

4比堆顶元素1大，则替换掉1，同时维护堆。变成[2,4,3]

5比堆顶元素2大，则替换掉2，同时维护堆。变成[3,4,5]

堆顶元素3，即为第三大的元素。


```javascript
/**
 * @description 节点下沉(这里是构建小根堆，大的父节点下沉)
 * @param {array} arr
 * @param {number} index
 * @returns arr
 */
function sink(arr, index) {
  // 构建完成
  let notFinish = true;
  // 最小元素的索引
  let minIndex;
  // 有左节点并且未构建完成
  while (2 * index + 1 <= arr.length && notFinish) {
    // 父节点比左节点大
    if (arr[index] > arr[2 * index + 1]) {
      // 最小元素的索引为左节点
      minIndex = 2 * index + 1;
    } else {
      // 否则最小元素的索引为自己
      minIndex = index;
    }
    //  如果有右节点，则讨论右节点
    if (2 * index + 2 <= arr.length) {
      //左节点比右节点大
      if (arr[minIndex] > arr[2 * index + 2]) {
        //  最小元素的索引为右节点
        minIndex = 2 * index + 2;
      }
    }
    // 最小index不是自己，即有子节点比自己小，交换
    if (minIndex !== index) {
      // 交换
      [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
      // 更新index为与自己交换的子节点，继续调整
      index = minIndex;
    } else {
      // 最小索引是自己，则当前节点比两个子节点都要小了。结束
      notFinish = false;
    }
  }
  // 返回小根堆
  return arr;
}

/**
 * 构建小根堆
 */
function buildMinHeap(arr) {
  // 向下取整
  for (let i = parseInt(arr.length / 2); i >= 0; i--) {
    sink(arr, i);
  }
}

/**
 * @description 找第k大的元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  // 取前k个数
  const arrleft = nums.slice(0, k);
  // 将其构建成小根堆
  buildMinHeap(arrleft);

  // 剩余的数，比堆顶大则替换，重新构建最小堆
  const arrRight = nums.slice(k);
  // 循环比较
  arrRight.forEach((item) => {
    // 若比堆顶元素大
    if (arrleft[0] < item) {
      // 替换
      arrleft[0] = item;
      // 下沉，重新构建最小堆
      sink(arrleft, 0);
    }
  });
  console.log(arrleft[0]);
  return arrleft[0];
}
```

### 设计类

#### 1.LRU缓存机制
```javascript
/**
 * @description 实际上：通过顺序判断新鲜度即可,越靠后越新鲜
 * @param {number} capacity
 */

class LRUCache {
  capacity;
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    // 往最后插入
    this.cache.set(key, value);
    return value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size === this.capacity) {
        // 第一个，最不新鲜
        this.cache.delete(this.cache.keys().next().value);
      }
    }
    this.cache.set(key, value);
  }
}

const lRUCache = new LRUCache(2);

console.log(lRUCache);
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

```

## 项目类

### 1.编程式实例化并挂载Vue时，propData无法达到响应式的目的。
