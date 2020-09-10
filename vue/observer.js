const window = {};

class Observer {
  constructor(obj) {
    this.obj = obj;
    this.walk(this.obj);
  }

  defineReactive(data, key, value) {
    let val = value;
    const dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (window.target) {
          dep.add(window.target);
        }
        return val;
      },
      set(newValue) {
        if (newValue === val) {
          return;
        }
        dep.notify();
        val = newValue;
      }
    });
  }

  walk(obj) {
    Object.keys(obj).forEach((key) => {
      this.defineReactive(obj, key, obj[key]);
    });
  }
}

class Dep {
  constructor() {
    this.dep = new Set();
  }

  add() {
    this.dep.add(window.target);
  }

  remove() {
    this.dep.remove(window.target);
  }

  notify() {
    this.dep.forEach((item) => item.render());
  }
}

class Watcher {
  constructor(regOrFn) {
    this.regOrFn = regOrFn;
    this.bind();
  }

  bind() {
    window.target = this;
    this.getter();
    window.target = null;
  }

  getter() {
    // if (typeof window[this.regOrFn] === 'function') {
    //   return window[this.regOrFn]();
    // } else {
    //   return window[this.regOrFn];
    // }

    // return eval(this.regOrFn)
    return window.myObject.foo;
  }

  render() {
    debugger;
    console.log(`此时最新的值是${this.getter()}`);
    console.log('asdfasfsafadsfdsafasf')
  }
}

// const resolvePath = (str) => {
//     const arr = str.split('.')
//     const val = null
//     arr.forEach(item=>val= window.)
//     this[]
// };

window.myObject = new Observer({
  foo: 'this is original foo',
  bar: 'this is original bar'
}).obj;
window.myWatcher = new Watcher('window.myObject.foo');

// while (true) {
console.log('running');
debugger;
// }
