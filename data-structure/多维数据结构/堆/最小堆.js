/**
 * 最小堆
 */

function shiftDown(i, n, heap) {
  // 如果没有子节点比父节点小了，则不需要交换了。终止
  let run = true;
  let target;
  // 至少要有左子节点
  while (i * 2 <= n && run) {
    if (heap[i] > heap[i * 2]) {
      target = i * 2;
    } else {
      target = i;
    }
    // 讨论右子节点
    if (i * 2 + 1 <= n) {
      if (heap[target] > heap[i * 2 + 1]) {
        target = i * 2 + 1;
      }
    }
    if (target !== i) {
      // 最小编号不是自己，则有子节点比自己小，交换
      [heap[i], heap[target]] = [heap[target], heap[i]];
      // 更新i，继续循环
      i = target;
    } else {
      // 当前节点，已经比子节点都要小了，不需要再调整了
      run = false;
    }
  }
}

function create(heap) {
  for (let i = (heap.length - 1) / 2; i >= 1; i--) {
    shiftDown(i, heap.length, heap);
  }

  console.log(heap);
}

const heap = [null, 99, 5, 36, 7, 22, 17, 92, 12, 2, 19, 25, 28, 1, 46];

create(heap);
