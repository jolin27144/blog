## mdn 入门
https://developer.mozilla.org/zh-CN/docs/Learn/Performance

##


## 性能优化分为：网络，渲染

### 网络:

#### 体积小，加载快

- 构建策略。摇树，分割代码，按需加载，压缩
- 图片压缩。图片类型选择。
- cdn 分发。
- 缓存策略。能缓存的，尽量缓存。service worker

### 渲染

#### 解析快。执行快

- css 规则。选择器使用问题。

- dom 策略。批量操作 dom

- 解释 script 避免阻塞主线程

- 重排重绘，避免。样式合并更改。多使用 display:none
- 异步更新，代码分片

- 避免一次大量渲染 dom

- js 耗时任务，分片做。原理协程
  requestIdelCallback
  reuestAnimationFrame

- 多开一个线程 webworker

## 怎么分析

- devtool lighthouse 也有在线版本

- 指标 ttf fcp lcp cls inp 针对业务可以自定义指标

https://developer.chrome.com/docs/lighthouse/performance/performance-scoring?hl=zh-cn