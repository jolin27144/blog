function generateMatrix(n: number): number[][] {
  let matrix: number[][] = Array.from({ length: n }).map(() => new Array(n));
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}

export { generateMatrix };
