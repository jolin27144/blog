function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const k of keys1) {
    if (!keys2.includes(k)) {
      return false;
    }

    const v1 = a[k];
    const v2 = b[k];

    if (!deepEqual(v1, v2)) {
      return false;
    }
  }

  return true;
}

const obj1 = { name: "Alice", address: { city: "Wonderland" } };
const obj2 = { name: "Alice", address: { city: "Wonderland" } };
const obj3 = { name: "Alice", address: { city: "Nowhere" } };

// console.log(deepEqual(obj1, obj2)); // true
// console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual([1, 2, { a: 3 }], [1, 2, { a: 3 }])); // true
console.log(deepEqual([1, 2, { a: 3 }], [1, 2, { a: 4 }])); // false
