const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class Promise {
  status = PENDING;
  value;
  reason;
  onResolvedCallbacks = [];
  onRejectedCallbacks = [];

  constructor(executor) {
    const resolve = (v) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = v;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (e) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = e;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => onFulfilled(this.value));
      this.onRejectedCallbacks.push(() => onRejected(this.reason));
    }

    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onFulfilled(this.reason);
    }
  }
}

new Promise((resolve) => {
  setTimeout(() => {
    resolve("成功");
  });
}).then(
  (v) => {
    console.log("success", v);
  },
  (e) => {
    console.log("fail", e);
  }
);
