// https://www.zhihu.com/tardis/zm/art/144058361?source_id=1003

const PENDING = "pending";
const FULFILLED = "fulFilled";
const REJECTED = "rejected";

class Promise {
  status = PENDING;
  value;
  reason;

  constructor(executor = () => {}) {
    const resolve = (value) => {
      if ((this.status = PENDING)) {
        this.status = FULFILLED;
        this.value = value;
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {}
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

    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}

new Promise((resolve, reject) => {
  resolve("成功");
}).then(
  (data) => {
    console.log("success", data);
  },
  (err) => {
    console.log("faild", err);
  }
);
