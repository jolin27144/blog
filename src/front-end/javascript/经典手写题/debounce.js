// 输入框事件：监听用户输入并在用户停止输入一段时间后才进行搜索、验证或提交操作。
// 窗口调整大小事件：监听窗口大小变化后，等用户调整结束后再进行操作。
// 按钮点击事件：避免按钮被多次点击，进行防抖处理。
// 电梯第一个人进来后，等待15秒。如果过程中又有人进来，15秒等待重新计时，直到15秒后开始运送，这是防抖

function debounce(fn, wait) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(null, arguments);
    }, wait);
  };
}

const input = document.getElementById("searchInput");
input.addEventListener(
  "input",
  debounce(() => {
    console.log("Debounced input event at:", Date.now());
  }, 500)
);
