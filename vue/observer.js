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
        val = newValue;
        dep.notify();
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
    this.vm = window;
    // this.regOrFn = regOrFn;
    this.getter = parsePath(regOrFn);
    this.value = this.bind();
  }

  bind() {
    debugger;
    window.target = this;
    const val = this.getter(window);
    window.target = null;
    return val;
  }

  // getter() {
  // if (typeof window[this.regOrFn] === 'function') {
  //   return window[this.regOrFn]();
  // } else {
  //   return window[this.regOrFn];
  // }

  // return eval(this.regOrFn)
  // return window.myObject.foo;
  // }

  render() {
    debugger;
    console.log(`oldValue : ${this.value}`);
    this.value = this.bind();
    console.log(`newValue : ${this.value}`);
  }
}

// const resolvePath = (str) => {
//     const arr = str.split('.')
//     const val = null
//     arr.forEach(item=>val= window.)
//     this[]
// };

function parsePath(path) {
  const segments = path.split('.');

  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

window.myObject = new Observer({
  foo: 'this is original foo',
  bar: 'this is original bar'
}).obj;
window.myWatcher = new Watcher('myObject.foo');

console.log('running');
debugger;

window.myObject.foo = 'here comes new foo';
