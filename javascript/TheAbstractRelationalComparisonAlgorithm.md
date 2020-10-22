> ⚡️ **预警，前方高能：**
>
> 在本文中，若出现以下 emoji 表情包请特别留意:
>
> - 白色书签：🔖， 代表一级标题；
> - 橙色大四边形：🔶 ,代表二级标题；
> - 蓝色小四边形：🔹， 代表三级标题；
> - 黄色闪电：⚡️，代表强调；
>
> 通过阅读本文，你能收获到的知识：javascript 中的关系运算符的比较逻辑是怎么实现的。以 <为例。
>
> ⚡️ **本文基于查阅："Draft ECMA-262 / October 15, 2020ECMAScript® 2021 Language Specification"， 即 es2021 规范，根据自己的理解记录。有理解错误的地方欢迎各位大佬指出。**

## <center>🔖 背景 </center>

问题的背景，不感兴趣可直接跳过哈。

今天想用 js 写一个冒泡排序。用了 node.js 的 readline，通过命令行输入一串以逗号分隔的数字。再将其转换为数组，然后从大到小排序，最后输出。

我输入的是: 11,8,7,6,15

输出的结果是：8,7,6,15,11

显然结果不对，然后就开始 debugger，发现通过 readline 输入传到回调函数的是一串字符串: '11,8,7,6,15'。

到此，显然发现了算法中比较的是字符串，而不是数字，与我写代码时的本意不对。此时将代码字符串数组强制转换为数字数组问题自然解决。但秉着好奇心。我还是跟着代码去看看，到底发生了什么：

1. 将其转为数组的之后：'11,8,7,6,15'.split(',') ---> ['11','8','7','6','15']。
2. 根据结果 '6' > '15' ，也即 '15' < '6'。
3. 因此问题就出在为什么在 js 中, '15' < '6'。

于是，也秉着遇到问题先看官方文档的程序员基本素养哈哈哈，我去翻了: [ECMAScript® 2021 Language Specification](https://tc39.es/ecma262/#sec-abstract-relational-comparison)

于是，有了这篇文档。

下面正文开始。

## <center>🔖 一、 关于<运算的定义</center>

以下片段节选自[ECMAScript® 2021 Language Specification]https://tc39.es/ecma262/#sec-relational-operators-runtime-semantics-evaluation：

![RelationalExpression:RelationalExpression<ShiftExpression](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/LessThan.png)

可以清楚看到进行<运算时。对两个操作数取值后，得到 lval、rval，然后运用 Abstract Relational Comparison 算法进行比较，⚡️ **注意最后一行"7.如果返回 undefined，则得出结果 false,否则为 true。"**

下面进行 Abstract Relational Comparison 算法的简单解读。

## <center>🔖 二、关于规范中进行关系运算时使用到的 Abstract Relational Comparison 算法的简单解读</center>

首先，看看主体流程。

以下片段节选自[ECMAScript® 2021 Language Specification]https://tc39.es/ecma262/#sec-abstract-relational-comparison:

![Abstract Relational Comparison](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/AbstractRelationalComparison.png)

下面按顺序进行解读：

1. 调用 ToPrimitive(x, number)方法，如果操作数不是 Object 类型，则直接返回。否则将其转换为非 Object 类型返回, 转换失败则抛出异常。(对于 Object 类型，这一步，会涉及到调用@@toPrimitive 方法，或者 OrdinaryToPrimitive 类型,后面会进行解析。此处不影响我们理解这个比较算法。)

2. 如果 px,py 都是 String 类型。

   2. 如果 py 是 px 的前缀。 ⚡️ **算法终止，返回 false**
   3. 如果 px 是 py 的前缀。 ⚡️ **算法终止，返回 true**
   4. 找出 px 与 py 第一个不同字符的编码值（整型）。 通过比较该字符的编码值得出大小关系。⚡️ **算法终止，返回 true 或 false**。

3. 如果一个操作数是 BigInt，另一个操作数是 String。利用 StringToBigInt 方法将 String 类型的操作数转换为 BigInt。

   1. 如果转换后的操作数为 NaN。 ⚡️ **算法终止，返回 undefind**
   2. 利用 BigInt::lessThan(nx, py),进行两个 BigInt 类型的操作数的大小比较。根据结果： ⚡️ **算法终止，返回 true 或 false**

4. 调用 ToNumeric 方法，如果操作数是 BigInt 类型，则返回。如果操作数不是 BigInt 则会调用 ToNumber 方法。按照下表规则转换：

   节选自[ECMAScript® 2021 Language Specification]https://tc39.es/ecma262/#sec-tonumber

   ![tonumber](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/ToNumberConversions.png)

   注意：在上表规则中：

   - undefined 转换为 NaN,
   - Null 转换为 0,
   - Boolean 转换为 0 或 1,
   - Symbol 抛出异常。
   - Number 直接返回。
   - 对于 String，比较复杂,可理解为调用 parseFloat()转换为 Number 类型。
   - ⚡️ **不会出现 BigInt 类型的转换情况，因为在上一层，已经进行了对 BigInt 类型的判断。**
   - ⚡️ **由于在算法第一步，我们已经将 Object 类型的操作数转换为非 Object 类型返回。这里也不需要考虑 Object 类型的转换。**

5. 经过以上转换和判断后，最后操作数的组合只有以下三种情况：

   - BigInt 和 BigInt, 可直接比较
   - Number 和 Number, 可直接比较
   - BigInt 和 Number, 将 Number 转换为 BigInt 比较

   注意当有一个操作数为 NaN(NaN 属于 Number 类型)时， ⚡️ **算法终止，返回 undefind** , 其他情况则按照数学比较(当然当中包含正无穷和负无穷的情况。例如只要 px 为负无穷，或者 py 为正无穷，则一定返回 true) ⚡️ **算法终止，返回 true 或 false**

到此，这个 Abstract Relational Comparison 算法就解析完毕了。

简单总结：

Abstract Relational Comparison 算法做了以下的事情：

1. 两个操作数都是 String 类型，则按照 String 比较大小的规则进行。
2. 其中一个是 String 类型，另一个是 BigInt 类型，则将 String 类型转换为 BigInt 类型再进行比较。
3. 将除了 BigInt 类型的其他所有类型都转换为 Number 类型。最后进行比较的操作数只能是 BigInt 和 Number 类型，即可按照数学逻辑进行大小比较。
4. 最后算法只会返回 undefined,false,true。(⚡️ **对应第一节提出的<运行时，<运算只会得出 false,true 两种结果**)

再简单一点总结：

⚡️ **除非两个操作数都是 String 类型，否则会将操作数隐式转换"数字类型"再进行比较。(这里数字类型指的是 Number 和 BigInt,Number 还包括了 NaN,Infinity 等)**

举个 🌰 子：
String 和 Number 比较

```
"a" < 1
1. "a" 隐式转换为 NaN。
2. 根据Abstract Relational Comparison 算法，只要有操作数为NaN，则返回undefined。
3. 最后结束Abstract Relational Comparison 算法的调用,返回undefined。回到< 运行时语义，则得出结果为false。

因此 "a" < 1 输出 false。
```

基于第一，第二节的内容，就可以清楚解析我在问题背景中遇到的问题。下面重新来分析一下：

输入字符 11,8,7,6,15 转换为字符串数组 ---> ['11','8','7','6','15']

字符串从大大小排序后得出： ["8","7","6","15","11"]

因为都是字符串的比较,运用结论中的第一点"两个操作数都是 String 类型，则按照 String 比较大小的规则进行", 显然 "11"< "15" < "6" <"7" < "8"。

⚡️ **读到这里，相信大家都跟我一样有疑问，既然 Abstract Relational Comparison 算法是可以接受 Object 类型进行比较的，那到底 Object 类型又是怎么进行比较呢?**

## <center>🔖 三、关于 Abstract Relational Comparison 算法中用到的 ToPrimitive 算法的解读。 </center>

通过第二节的解读，我们知道在 js 中，对象类型也是可以进行关系运算的。下面就以 ToPrimitive 这个算法为入口来看看，关系运算时，对象是怎么处理的。

节选自[ECMAScript® 2021 Language Specification]https://tc39.es/ecma262/#sec-toprimitive

![ToPrimitive](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/ToPrimitive.png)

可以看到 ToPrimitive 算法，接收一个 input 参数和一个可选 preferredType。如果 input 不是 Object 类型，则返回自身。如果 input 是 Object 类型，则按以下步骤进行操作。

1. 获取@@toPrimitive 方法。（@@toPrimitive 指的是[Symbol.toPrimitive]这个方法，举例：Date 对象，Symbol 对象中都定义了这个方法。而通过字面量创造的对象一般没有这个方法。）

2. 如果存在@@toPrimitive 方法。则对 preferredType 进行判断，赋值到 hint 。结合 hint 和 input,调用@@toPrimitive 方法。得出结果，如果结果不为 Object 类型，则返回这个结果。否则抛出异常。

3. 如果不存在@@toPrimitive 方法。则对 preferredType 进行判断，赋值到 hint 。结合 hint 和 input,调用 OrdinaryToPrimitive 方法(下面进行详细解析)。得出结果,并返回。

并且我们可以发现：

- 当没有提供 preferredType 时，也没有@@toPrimitive 方法时，preferredType 会默认设为"number",影响调用 OrdinaryToPrimitive 方法。
- 我们可以提供@@toPrimitive 方法覆盖，默认行为。例如 Date 对象，提供了@@toPrimitive 方法。

而 3 中用到的 OrdinaryToPrimitive 方法如下:

节选自[ECMAScript® 2021 Language Specification]https://tc39.es/ecma262/#sec-toprimitive

![OrdinaryToPrimitive](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/OrdinaryToPrimitive.png)

可以看出，这个 OrdinaryToPrimitive 方法也比较简单。

1. 首先传入的 O，必须要是 Obejct 类型。

2. hint 必须为"string"或者"number"。

3. 确定下一步调用 toString,valueOf 这两个方法的顺序。如果 hint 是"string"，则为：toString,valueOf。如果 hint 是"number",则为：toString,valueOf

4. 按 3 中的确定顺序依次调用 3 中提出的两个方法，如果其中一个方法得出的结果不是 Object 类型则终止 OrdinaryToPrimitive 方法，返回这个结果。

5. 经过 1-4 没有得出结果，则抛出异常。

⚡️ **看完这两个算法，相信大家都知道了，对对象进行比较，其实也是同样的套路将对象隐式转换为非对象类型进行比较。**

举个 🌰 子：

```
[1,2,3] < 1

1. 在Abstract Relational Comparison 算法中的第一步对[1,2,3]这种对象类型的操作数，进行隐式转换，即调用ToPrimitive方法。并且是以 ToPrimitive(x, number)的形式调用ToPrimitive方法。
2. 因为[1,2,3]没有定义@@toPrimitive方法。因此调用OrdinaryToPrimitive方法。并且因为1中传入的preferredType是"number"。因此以OrdinaryToPrimitive(input,number)的形式调用OrdinaryToPrimitive方法。
3. 因为在OrdinaryToPrimitive中，hint为number,因此先调用toString方法。得出"1,2,3"字符串，非Object类型，返回这个结果。(如果toString方法返回的是对象，接着会调用valueOf,[1,2,3].valueOf返回的是"自身")
4. 到3，对象的已经隐式转换为非对象类型。接着回到第二节的Abstract Relational Comparison 算法中的第4步的d中，将非String 转换为Number类型。"1,2,3"的转换结果是"NaN"
5. 左边的操作数成功由对象类型转换为了Number类型变成:   NaN < 1
6. 根据第二节的Abstract Relational Comparison 算法，只要有操作数为NaN，则返回undefined。
7. 最后结束Abstract Relational Comparison 算法的调用,返回undefined。回到< 运行时语义，则得出结果为false。

因此，[1,2,3] < 1 输出 false。
```

## <center>🔖 总结</center>

在 js 语言规范中，当进行关系运算时，是有可能会把两个操作数按一定的规则进行隐式转换后进行比较的。

对于对象类型默认有 valueOf,和 toString 方法将其转换为非对象类型，调用顺序则取决于调用隐式转换时 OrdinaryToPrimitive 这个方法时传入的第二参数 hint。

最后我们还可以在对象中定义@@toPrimitive 方法(@@toPrimitive 指的是[Symbol.toPrimitive]这个方法)，去控制隐式转换的结果。Date 对象中便定义了@@toprimitive 这个属性。

## <center>🔖 参考资料</center>

- ECMAScript® 2021 Language Specification,
  https://tc39.es/ecma262/
- How does javascript do a relational comparison?,
  https://transang.me/how-does-javascript-do-a-relational-comparison/
- ECMAScript7 规范中的 ToPrimitive 抽象操作,
  https://segmentfault.com/a/1190000016325587
