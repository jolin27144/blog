https://juejin.cn/post/7251501955250667575


TypeScript 中interface 和 type 的区别和应用场景。
interface 和 type 的区别在于：

interface 只能定义对象类型，而 type 可以定义任何类型。
interface 可以被合并（merge），如果多个同名接口存在，它们会被自动合并为一个接口，而 type 不行。
interface 支持扩展（extends），可以扩展其他接口；而 type 不支持扩展。
type 可以定义类型别名，它们可以使用 & 运算符合并多个类型，生成一个新的类型。

