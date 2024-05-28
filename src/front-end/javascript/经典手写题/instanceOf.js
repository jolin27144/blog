function instanceOf(instance, fun) {
  if (typeof instance !== "object" && typeof instance !== "function") {
    return false;
  }

  if (Object.prototype.toString.call(fun) !== "[object Function]") {
    return false;
  }

  let __proto__ = Object.getPrototypeOf(instance);

  while (true) {
    // 到尽头了
    if (__proto__ === null) {
      return false;
    }

    // 相等了
    if (__proto__ === fun.prototype) {
      return true;
    }

    __proto__ = Object.getPrototypeOf(__proto__);
  }
}

console.log(instanceOf(new Date(), Date)); // true
console.log(instanceOf(new Date(), Object)); // true
console.log(instanceOf(new Date(), Array)); // false
console.log(instanceOf({}, Object)); // true
console.log(instanceOf({}, Array)); // false
