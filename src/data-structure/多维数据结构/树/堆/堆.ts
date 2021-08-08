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

/**
 * 插入
 * 尾部新增一个节点
 */
function insert(arr, el) {
  arr.push(el);
  // 插入叶子节点要进行上浮处理
  swim(arr, arr.length - 1);
}

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

// 一组数，看作完全二叉树
const heap = [99, 5, 36, 7, 22, 17, 92, 12, 2, 19, 25, 28, 3, 46];

// 构建成最小堆
buildMinHeap(heap);
console.log(heap);
//[2, 5, 3, 7, 19, 17, 46, 12, 99, 22, 25, 28, 36, 92]

// 插入
insert(heap, 1);
console.log(heap);
// [1, 5, 2, 7, 19, 17, 3, 12, 99, 22, 25, 28, 36, 92, 46]

//删除
deleteLast(heap);
console.log(heap);
// [2, 5, 3, 7, 19, 17, 46, 12, 99, 22, 25, 28, 36, 92]

// 排序
console.log(heapSort(heap));
// [2, 3, 5, 7, 12, 17, 19, 22, 25, 28, 36, 46, 92, 99]
