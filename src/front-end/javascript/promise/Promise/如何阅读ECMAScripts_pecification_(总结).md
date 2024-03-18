---
theme: cyanosis
---

# 前言

`Javascript` 引擎依照 ES 规范实现。 规范描述了语法、运行时语义，`APIs` 等。不包括宿主提供得api、如何加载等。最新规范官方地址：[ECMAScript® 2022 Language Specification (tc39.es)](https://tc39.es/ecma262/)

# Runtime semantic

## 规范用类似伪代码但更准确的方式，描述算法步骤。

```
A sample set of algorithm steps are:

    1.  Let a be 1.

    2.  Let b be a + a.

    3.  If b is 2, then

        1.  Hooray! Arithmetics isn’t broken.

    4.  Else

        1.  Boo!
```    

## Abstract operations 抽象方法

    ```
    When `Boolean` is called with argument `value`, the following steps are taken:

    1. Let `b` be ! [ToBoolean](value)
    2. ...
    ```

抽象方法类似函数接受输入、输出。但不暴露给 `JavaScript` 代码，只是用来为了用来描述描述算法时，减少重复描述。

## [[this]] 符号

1. 表示 `Record` 的 `field`

   规范中用 `Record` 是指 `key-value` 集合，类似 `C` 语言的结构体。 只存在于 ES 规范中。

2. 表示 `JavaScirpt Object` 的内部插槽

   不能被 `JavaScirpt` 代码访问。例如 ``` `O`.[[Prototype]].```

3. 表示 `JavaScirpt Object` 的内部方法

   如函数的call方法。 例如 ```F.[[Call]](`V`, `argumentsList`).```

## `?` 和 `!` 符号

前置知识，每个 `runtime semantic` 都会返回一个 `Completion Record`。其中又分为 `normal completion` 和 `abrupt completion`。 [ECMAScript® 2022 Language Specification (tc39.es)](https://tc39.es/ecma262/#sec-completion-record-specification-type)

`?` 确保要调用的抽象操作，最后拿到的是 `normal completion` 的 `[[value]]`。即如果抽象操作抛出异常，这里的算法步骤也终止。

`!` 即明确表示抽象操作一定不会抛异常。

## `JavaScript` 对象

分为原始对象和异变对象，直接上类图

![JavaScript-Object.jpeg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17f4dea117bf4939b972c354bbb0c985~tplv-k3u1fbpfcp-watermark.image)

作者后面还带读者分析了3个规范算法的例子，有兴趣请前往阅读。[How to Read the ECMAScript Specification (timothygu.me)](https://timothygu.me/es-howto/#example-string-prototype-substring)

# 参考资料

[How to Read the ECMAScript Specification (timothygu.me)](https://timothygu.me/es-howto/)

[ECMAScript® 2022 Language Specification (tc39.es)](https://tc39.es/ecma262/)