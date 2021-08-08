// const rl = require('../cli');

function BubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= n - 1 - i; j++) {
      if (Number(arr[j]) < Number(arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let a = '11,8,7,6,15'.split(',');

// let a = [11,8,7,6,15]

BubbleSort(a);

console.log(`结果是：${a.join(',')}`);
