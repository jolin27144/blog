function quickSort(arr, left, right) {
  let i = left, // 哨兵
    j = right, // 哨兵
    temp = arr[left]; // 基准数

  if (i > j) {
    return;
  }

  while (i != j) {
    while (arr[j] >= temp && i < j) {
      // 右边哨兵先移动，找到比基准数小的数
      j--;
    }
    while (arr[i] <= temp && i < j) {
      // 左边哨兵移动，找到比基准数大的数
      i++;
    }
    if (i < j) {
      // 如果哨兵还没碰面，则交换哨兵所在的两个值
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // 如果哨兵碰面了，则交换哨兵所在的值和基准值
  [arr[i], arr[left]] = [arr[left], arr[i]];

  // 以哨兵所在的索引为分割线，二分递归调用
  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);

  return;
}

const arr = [11, 8, 7, 6, 15];
quickSort(arr, 0, arr.length - 1);

console.log(arr.toString());
