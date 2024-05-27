// https://www.zhihu.com/tardis/zm/art/144058361?source_id=1003

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function resolvePromise(promise2, x, resolve, reject) {
  // 不能返回自己
  /*
  * 
  * 
  * var p = new Promise(function(resolve, reject){
    resolve(3)
    });
      //Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
    var p2 = p.then(function(){
        return p2
    })
  * */
  //  返回promise 或者是函数的时候特殊处理
  if (promise2 === x) {
    reject(new TypeError("Chaining cycle"));
  }
  if ((x && typeof x === "object") || typeof x === "function") {
    let used;
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (used) return;
            used = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (used) return;
            used = true;
            reject(r);
          }
        );
      } else {
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (e) {
      if (used) return;
      used = true;
      reject(e);
    }
  }

  // 其他情况就直接resolve了
  else {
    resolve(x);
  }
}

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

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }

      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise2;
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
