// 应用场景 监听用户滚动页面，处理无限加载、懒加载等功能
// 电梯第一个人进来后，15秒后准时运送一次，后面再来人也不管

function throttle(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.apply(null, arguments);
      timer = null;
    }, delay);
  };
}

// 示例：节流滚动事件
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Throttled scroll event at:", Date.now());
  }, 2000)
);
