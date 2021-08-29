---
theme: cyanosis
---

**本文严格参照最新的官方文档内容撰写，确保所有术语、关键代码，变量命名都来源于官方文档。**

# 规范文档

先贴上官方文档。

[Promises/A+ (promisesaplus.com)](https://promisesaplus.com/)

# Promises/A+ 中文翻译

**行文排版安全按照官方文档，直译保证准确性。（即 promise、then、value、reason、pending、fulfilled、rejected 术语等不会强行进行翻译）。**

**关于为什么要直译：因为本人认为规范文档，是必须要具备严谨性、准确性的。意译，容易引入译者的理解偏差。当然，读原文必然是最原汁原味的，因此，本人建议读原文，本文翻译只作为辅助。**

---

翻译正文：

**一个开放、健全且通用的 JavaScript Promise 标准。由开发者制定，供开发者参考。**

一个 promise 表示异步操作的最终结果。与 promise 进行交互的主要方式是通过它的方法 then。该方法通过注册回调来得到这个 promise 的最终 value ，或者为什么这个 promise 不能被 fulfilled 的 reason 。

该规范详细说明了 then 方法的行为，提供了一个可互操作的基础，因此所有符合 Promises/A+ 的 promise 实现都可以依赖该基础。尽管 Promises/A+ 组织可能偶尔会通过向后兼容的微小更改来修改此规范，以解决新发现的情况，但我们只有在仔细考虑、讨论和测试后才会进行大的或向后不兼容的更改。因此, **该规范应该被认为是十分稳定的** 。

从历史上看, Promises/A+ 阐明了早期 [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A) 的条款，并将部分事实上已经实现的拓展涵盖其中，以及对某些未指定或者有问题的部分省略。

最后，Promises/A+ 规范的核心不包括：如何 create 、fulfill 或 reject promises。而是选择专注于提供可互操作的 then 方法。不过伴随规范的未来工作可能会涉及这些主题。(**译者注： 由此可以看出 Promises/A+ 规范目前的核心是规范 then 方法，并没有对如何实现 promise 以及如何改变 promise 的状态进行限制。**)

## 1.术语

1. "prmoise" 是一个拥有符合本规范的 then 方法的对象或者函数。

2. "thenable" 是一个定义了 then 方法的对象或者函数。

3. "value" 是 JavaScript 的任意合法值(包括 undefined, thenable, promise)。

4. "exception" 是一个用 throw 语句抛出的 value 。

5. "reason" 是一个表示 promise 被 rejected 的 value 。

## 2.要求

1. **promise 的状态**

   pormise 必须是一下三个状态其中之一: pending, fulfilled, rejected.

    1. 当 promise 处于 pending 状态时:

        1. 可以转换到 fulfilled 或 rejected 状态。

    2. 当 promise 处于 fulfilled 状态时:

        1. 不能转换到其他状态。
        2. 必须有一个 value ，并且不能改变。

    3. 当 promise 处于 rejected 状态时：

        1. 不能转换到其他状态。
        2. 必须有 reason ，并且不能改变。

2. **then 方法**

   promise 必须提供一个 then 方法，能由此去访问当前或最终的，value 或者 reason 。(**译者注： 延迟绑定回调**)

   pormise 的 then 方法， 接受两个参数

   `promise.then(onFulfilled, onRejected)`

    1. `onFulfilled` 和 `onRejected` 都是可选参数。

        1. 如果 `onFulfilled` 不是函数，则忽略。
        2. 如果 `onRejected` 不是函数，则忽略。

    2. 如果 `onFulfilled` 是一个函数:

        1. 它必须在 `promise` 被 `fulfilled` 后，以 `promise` 的 `value` 作为第一个参数，调用。
        2. 它不能在 `promise` 被 `fulfilled` 之前调用。
        3. 它不能被调用多次。

    3. 如果 `onRejected` 是一个函数:

        1. 它必须在 `promise` 被 `rejected` 后，以 `promise` 的 `reason` 作为第一个参数，调用。
        2. 它不能能在 `promise` 被 `rejected` 之前调用。
        3. 它不能被调用多次。

    4. 在 [execution context](https://es5.github.io/#x10.3)  栈（执行上下文栈）只包含平台代码之前， `onFulfilled`  或者  `onRejected`  不能被调用[[3.1](#3.备注)].

    5. `onFulfilled`  或者  `onRejected` 必须以函数形式调用（即不能有`this`值）[[3.2](#3.备注)]

    6. `then` 方法可以被同一个 `promise` 调用多次。

        1. 如果或者当 `promise` 处于 `fulfilled` 状态， 所有自己的 `onFulfilled` 回调函数，必须要按照 `then` 注册的顺序被调用。
        2. 如果或者当 `promise` 处于 `rejected` 状态， 所有自己的 `onRejected` 回调函数，必须要按照 `then` 注册的顺序被调用。

    7. `then` 方法必须要返回 `promise`[[3.3](#3.备注)]

       `promise2 = promise1.then(onFulfilled, onRejected);`

        1. 如果 `onFulfilled` 或者 `onRejected` 返回一个值 `x` ，则执行 **Promise Resolution Procedure**.
        2. 如果 `onFulfilled` 或者 `onRejected` 抛出异常 `e` ， `promise2` 必须以 `e` 作为 reason ，转到 rejected 状态。
        3. 如果 `onFulfilled` 不是函数，并且 `promise1` 处于 fulfilled 状态 ，则 `promise2` 必须以与 `promise1` 同样的 value 被 fulfilled . （**译者注：值穿透**）
        4. 如果 `onRejected` 不是函数，并且 `promise1` 处于 rejected 状态 ，则 `promise2` 必须以与 `promise1` 同样的 reason 被 rejected . （**译者注：值穿透**）

3. **Promise Resolution Procedure**

   Promise Resolution Procedure 是一个抽象操作。它以 一个 promise 和 一个 value 作为输入，我们记作：`[[Resolve]](promise, x)` 。 如果 `x` 是一个 thenable , 它会尝试让 promise 变成与 x 的一样状态 ，前提 x 是一个类似的 promise 对象。否则，它会让 promise 以 `x` 作为 value 转为 fulfilled 状态。

   这种对 thenables 的处理允许不同的 promise 进行互操作，只要它们暴露一个符合 Promises/A+ 的 then 方法。它还允许 Promises/A+ 实现使用合理的 then 方法“同化”不一致的实现。

   `[[Resolve]](promise, x)` 执行以下步骤:

    1. 如果 `promise` 和 `x` 引用的是同一个对象，则以一个 `TypeError` 作为 reason 让 `promis`` 转为 rejeted 状态。

    2. 如果 `x` 也是一个 promise ，则让 `promise` 接受它的状态[[3.4](#3.备注)]:

        1. 如果 `x` 处于 pending 状态，`promise` 必须保持 pending 状态，直到 `x` 变成 fulfilled 或者 rejected 状态，`promise` 才同步改变。
        2. 如果或者当 `x` 处于 fulfilled 状态， 以同样的 value 让 `promise` 也变成 fulfilled 状态。
        3. 如果或者当 `x` 处于 rejected 状态， 以同样的 reason 让 `promise` 也变成 rejected 状态。

    3. 如果 `x` 是一个对象或者函数。

        1. 令 `then` 等于 `x.then`. [[3.5](#3.备注)]
        2. 如果读取 `x.then` 抛出异常 `e` ， 以 `e` 作为 reason 让 `promise` 变成 rejected 状态。
        3. 如果 `then` 是一个函数，以 `x` 作为 `this` 调用它，传入第一个参数 `resolvePromise` ， 第二个参数 `rejectPromise` 。

            1. 如果 `resolvePromise` 被传入 `y` 调用， 则执行 `[[Resolve]](promise, y)`
            2. 如果 `rejectedPromise` 被传入 `r` 调用，则用，`r` 作为 reason 让 `promise` 变成 rejected 状态
            3. 如果 `resolvePromise` 和 `rejectPromise` 都被调用了，或者被调用多次了。只有第一次调用生效，其余会被忽略。
            4. 如果调用 `then` 抛出异常 `e` ,

                1. 如果 `resolvepromise` 或 `rejectPromise` 已经被调用过了，则忽略它。
                2. 否则, 以 `e` 作为 reason 让 `promise` 变成 rejected 状态。

        4. 如果 `then` 不是一个函数，以 `x` 作为 value 让 `promise` 变成 fulfilled 状态。

    4. 如果 `x` 不是对象或函数， 以 `x` 作为 value 让 `promise` 变成 fulfilled 状态。

如果一个 promise 被一个循环的 thenable 链中的对象 resolved，而  `[[Resolve]](promise, thenable)`  的递归性质又使得其被再次调用，根据上述的算法将会陷入无限递归之中。算法虽不强制要求，但也鼓励实现者检测这样的递归是否存在，并且以 `TypeError` 作为 reason 拒绝 promise[[3.6](#3.备注)]。

## 3.备注

- **注 1**  这里的**平台代码**指的是引擎、环境以及 promise 的实施代码。实践中要确保  `onFulfilled`  和  `onRejected`  方法异步执行，且应该在  `then`  方法被调用的那一轮事件循环之后的新执行栈中执行。这个事件队列可以采用“宏任务（macro-task）”机制或者“微任务（micro-task）”机制来实现。由于 promise 的实施代码本身就是平台代码（**译者注：**即都是
  JavaScript），故代码自身在处理在处理程序时可能已经包含一个任务调度队列。

  两个类别的具体分类如下：

    - **macro-task:**  script（整体代码）, `setTimeout`, `setInterval`, `setImmediate`, I/O, UI rendering
    - **micro-task:**  `process.nextTick`, `Promises`（这里指浏览器实现的原生 Promise）, `Object.observe`, `MutationObserver`

  详见  [stackoverflow 解答](http://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context)

- **注 2**  也就是说在**严格模式（strict）**中，函数  `this`  的值为  `undefined` ；在非严格模式中其为全局对象。

- **注 3**  代码实现在满足所有要求的情况下可以允许  `promise2 === promise1` 。每个实现都要文档说明其是否允许以及在何种条件下允许  `promise2 === promise1` 。

- **注 4**  总体来说，如果  `x`  符合当前实现，我们才认为它是真正的  *promise* 。这一规则允许那些特例实现接受符合已知要求的 Promises 状态。

- **注 5**  这步我们先是存储了一个指向  `x.then`  的引用，然后测试并调用该引用，以避免多次访问  `x.then`  属性。这种预防措施确保了该属性的一致性，因为其值可能在检索调用时被改变。

- **注 6**  实现不应该对  *thenable*  链的深度设限，并假定超出本限制的递归就是无限循环。只有真正的循环递归才应能导致  `TypeError`  异常；如果一条无限长的链上  *thenable*  均不相同，那么递归下去永远是正确的行为。
