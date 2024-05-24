---
theme: cyanosis
---

# 文章的内容

分析官方文档，了解 `promise` 的使用，背后的机制，以及解决的问题。

> 由于风气导致，现在网上大部分关于 `promise` 的文章，上来就是先一顿手写 `promise`，顺带提几个复杂化的词语: "回调地狱"，“返回值穿透”，“延迟绑定回调“ ，顺带还要带出微任务、宏任务的概念等等。__反正就是不提标准文档，或一笔带过。__
>
>我想，根据我的搬砖经验。了解一门技术、一个特性，最正确的途径绝对是看 __官方文档__ 啊。难道我想了解 `vue` ，我首先要应该能手写 `vue` ???


本文接上次的 [Promise/A+ 中文翻译 (juejin.cn)](https://juejin.cn/post/7001775082339041288)
翻译之后，一起来看看分析下规范。

# 我对于 Promise/A+ 的解读

`Promise/A+` 的几个关键概念，如下：

## 1. `promise `有三个状态

`pormise` 必须是以下三个状态其中之一: `pending`, `fulfilled`, `rejected`.

- 当 `promise` 处于 `pending` 状态时:

    1. 可以转换到 `fulfilled` 或 `rejected` 状态。

- 当 `promise` 处于 `fulfilled` 状态时:

    1. 不能转换到其他状态。
    2. 必须有一个 `value` ，并且不能改变。

- 当 `promise` 处于 `rejected` 状态时：

    1. 不能转换到其他状态。
    2. 必须有 `reason` ，并且不能改变。

## 2. 关于 `promise` 和 `thenable` 的关系

__定义了 `then` 方法的对象或函数称之为 `thenable` 对象__

因此 `promise` 也是一个 `thenable` 对象

那为什么要提出 `thenable` 这个概念呢 ？ __我猜测可能是出于兼容的考虑__ 。

我们可以看到在 **Promise Resolution Procedure** 这个方法里面，可以接收 thenable 作为参数的，十分灵活。

## 3. 核心是 `then` 方法

__then 方法很简单, 就是优雅的定义回调。__

先来分析 `then` 方法做了什么：

1. 定义不同状态的 __回调__。

   如文档规定 `promise` 表示一个异步操作的最终结果。 那么根据这个异步操作的三个不同状态，我们分别做不同的事情。
    - 如果处于 `pending` 状态，什么也不做。
    - 转为 `fulfilled` 状态，调用一下 `then` 方法传入的 `onfulfilled` 回调。
    - 转为 `rejected` 状态，调用一下 `then` 方法传入的 `onRejected` 回调。

   规范中说明，通过 `then` 方法，添加不同状态的回调，并且可以添加多次。（延迟绑定回调）

2. 确保回调 __异步执行__。

   规范中明确提到 `fulfilled` 或 `rejected` 回调，必须异步执行。

   那么对于 `javascript` 这门语言的机制而言，显然要借助宿主的能力达到异步。

   核心就是当 `promise` 状态转为 `fulfilled` 或 `rejected` 了，我们这时不能直接回调 `onFulfilled` 或 `onRejected`，要借助宿主提供的机制，先把这些回调按顺序保存。让当前的剩下的代码先跑完，最后再去调用它们。

   用专业点的术语来说就是，当前这一轮宏任务执行完（也就是当执行上下文栈只剩下全局执行上下文的时候），再去调用 `onFulfilled` 或 `onRejected` 。至于怎么实现这个机制，规范没有明确去规定。

   以chrome为例，就在每个“宏任务” 中，搞了一个“微任务”队列来把这些由 `promise`产生的回调一个个按顺序存放起来。等到"宏任务"即将结束之前，按顺序调用"微任务"中的任务，此时如果又产生了一个"微任务"，会直接丢到”微任务“队列中，如果无限产生”微任务“，则这个”宏任务”就会无限执行下去。

3. 确保异步 __顺序执行__。

   首先根据规范 __then 方法必须返回一个新的 promise__，后一个 `promise` 的状态随前一个 `promise` 的状态变化。这一特性就可以保证回调执行的顺序。(链式调用)

   其中为了方便使用，更是规定了如果前一个 `promise` 的 `onfulfilled` , `onRejected` 如果不是函数。也要直接让后一个 `promise` 接受前一个 `promise` 的状态和值。(返回值穿透)

   __即一个宏任务------>对应一个微任务队列。__

那么基于以上说的3点。就应该能明白谈到 `promise` 时，我们经常看到的高大上名词是什么意思：

1. 延迟绑定回调

2. 链式调用、返回值穿透

本质也就是如此。

# 收获的一点启示

1. `promise` 并没有改变 `javascirpt` 这门语言的任何特性。他完全可以用 `javascirpt` 自己实现，这也是为什么那么多手写 `promise` 的文章。
2. 根据第 1 点，`promise` 的异步能力是借助宿主提供的。比如 chrome 给它提供了 __微任务队列__。
3. `onFulfilled`或`onRejected`，到了触发时机并不是立即回调的，而是放到微任务队列，等同步代码执行完就去按顺序调用。换句话说就是，`promise` 被 `resolved`后，才把 `onFulfilled`，放到微任务队列等待执行。

# 总结

`promise` 的本质是规范化一个表示 __异步状态__ 的对象。并且通过一个 `then` 方法达到延迟绑定回调的目的，巧妙地避免了回调嵌套，解决回调地狱。

上一篇文章我们翻译了 `Promise/A+` 规范，

这篇文章对其进行了分析解读，

下一篇文章，我们在一起来看看
[ECMAScript® 2022 Language Specification (tc39.es)](https://tc39.es/ecma262/#sec-promise-objects) 基于 `Promise/A+` 规范，进行了那些拓展，以及看看 chorme 是怎么实现的。

# 规范文档

先贴上我翻译的中文版

[Promise/A+ 中文翻译 (juejin.cn)](https://juejin.cn/post/7001775082339041288)

下面是官方文档

[Promises/A+ (promisesaplus.com)](https://promisesaplus.com/)