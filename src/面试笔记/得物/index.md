上海莉莉丝、米哈游、B站、小红书、得物等互联网公司前端面试总结
https://zhuanlan.zhihu.com/p/301435077
https://juejin.cn/post/6896810576778166280

2021-08-17-阿里、得物、涂鸦、途虎面试心得
https://blog.azhubaby.com/2021/08/17/2021-08-17-%E9%98%BF%E9%87%8C%E3%80%81%E5%BE%97%E7%89%A9%E3%80%81%E6%B6%82%E9%B8%A6%E3%80%81%E9%80%94%E8%99%8E%E9%9D%A2%E8%AF%95%E5%BF%83%E5%BE%97/

随笔 - 得物面经(已过)
http://www.weirshi.com/internate/base/interview.html#%E9%9A%8F%E7%AC%94-%E5%BE%97%E7%89%A9%E9%9D%A2%E7%BB%8F-%E5%B7%B2%E8%BF%87


# key 的作用。为什么其他元素不用 key




# 路由 hash 跟 history 区别，为什么要用 hash，用 query 不行吗

共同点都是不刷新页面的情况进行路由跳转。

## Hash 路由

机制
Hash 路由使用 URL 中的哈希 (#) 部分来表示页面的状态。浏览器不会将哈希部分发送到服务器，这意味着可以在前端进行路由处理而不需要后端配合。

URL 示例: http://example.com/#/page1
当哈希部分改变时，浏览器会触发  hashchange 事件，JavaScript 可以捕捉这个事件并进行相应的处理。
优点
简单实现：无需服务器配置，前端即可完全控制路由。
兼容性好：适用于所有现代浏览器，即使是较老的版本。
不触发页面重新加载：改变哈希不会触发页面重新加载，用户体验流畅。
缺点
URL 不美观：带有 # 的 URL 可能不如纯路径 URL 美观和易读。
SEO 不友好：虽然现代搜索引擎可以处理哈希路由，但传统上哈希路由对 SEO 的支持不如 History 路由。

## History 路由

机制
History 路由使用 HTML5 History API（例如 pushState 和 replaceState）来操作浏览器的历史记录，进而改变 URL 路径。

URL 示例: http://example.com/page1
使用 pushState 和 replaceState 方法改变 URL，同时不会触发页面刷新。
优点
URL 美观：URL 是标准的路径格式，符合常规的 URL 结构。
SEO 友好：更容易被搜索引擎索引，因为 URL 看起来像普通的静态页面。
更灵活：可以更精细地控制浏览器历史记录，适用于复杂的单页面应用（SPA）。
缺点
需要服务器配置：需要服务器支持，将所有路由指向单一入口（例如，返回 index.html），否则刷新页面时会出现 404 错误。
兼容性问题：虽然大部分现代浏览器都支持，但在非常老的浏览器上可能需要降级处理。

## 为什么不用 Query 参数

核心原因：会发起 get 请求

## 结论

选择 Hash 路由还是 History 路由，取决于具体项目需求：
Hash 路由：适用于简单的 SPA 项目，特别是无需后端配合或需兼容较旧浏览器的场景。
History 路由：适用于需要美观 URL 和良好 SEO 支持的复杂应用，前提是服务器可以适配路由需求。
在大多数现代 Web 应用中，尤其是需要良好 SEO 的情况下，History 路由更为推荐。

# ts 成员用 any 怎么办

# useCallBack ，依赖数组有什么用，但如果依赖没有在数组里面，子组件会重新渲染吗。

依赖数组：控制 useCallback 返回的 memoized 函数在依赖项变化时重新创建，确保回调函数在需要时更新。
缺少依赖：如果依赖项未包含在数组中，且该依赖项发生变化，回调函数内部的逻辑可能会使用过时的值，导致潜在的错误。
子组件渲染：使用 useCallback 可以防止不必要的子组件重新渲染，前提是确保所有相关依赖项都包含在依赖数组中。

# Promise 有哪些静态方法

- Promise.all
- Promise.allSettled
- Promise.any
- Promise.race
- Promise.resolve
- Promise.reject

# Promise.all 怎么用，如果传入的 promise 中有一个 rejected 了怎么输出

Promise.all 接受一个 Promise 可迭代对象（通常是数组）作为参数，并返回一个新的 Promise。
该 Promise 在所有传入的 Promise 都被解决时解决，并返回一个包含所有解决值的数组。
如果其中任何一个 Promise 被拒绝，Promise.all 返回的 Promise 会立即被拒绝，并拒绝的原因是第一个被拒绝的 Promise 的原因。

# 性能优化做了哪些东西

[README.md](../../front-end/性能优化/README.md)

# 如果有一个表格数据量很大，很复杂，不分页的怎么优化

- 虚拟滚动配合 web worker https://chatgpt.com/c/e43e90e9-671f-4cbc-892d-5b3e32437717
- 前端缓存和持久化 。 如果数据不经常变

# 主站的应用怎么通信

store, 发布订阅

# 主站的怎么引入 react

# 主站类似微前端 ，微前端原理

做题

# 深比较

# promise race

# promise all


