> ⚡️**预警，前方高能：**
>
> 在本文中，若出现以下 emoji 表情包请特别留意:
>
> - 白色书签：🔖， 代表一级标题；
> - 橙色大四边形：🔶 ,代表二级标题；
> - 蓝色小四边形：🔹， 代表三级标题；
> - 黄色闪电：⚡️，代表强调；

## <center>🔖 什么是 HTML?</center>

> HTML (HyperText Markup Language) 不是一门编程语言，而是一种用来告知浏览器如何组织页面的标记语言。HTML 可复杂、可简单，一切取决于开发者。它由一系列的元素（elements）组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。 一对标签（ tags）可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。

> ⚡️**HTML 标签不区分大小写**。也就是说，输入标签时既可以使用大写字母也可以使用小写字母。 `例如，标签 <title> 写作 <title>、<TITLE>、<Title>、<TiTlE>，等等都可以正常工作。不过，从一致性、可读性等各方面来说，最好仅使用小写字母。`

## <center>🔖 HTML 文档</center>

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>我的测试站点</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```

分析如下:

1. `<!DOCTYPE html>:` 声明文档类型. 很久以前，早期的 HTML(大约 1991 年 2 月)，文档类型声明类似于链接，规定了 HTML 页面必须遵从的良好规则，能自动检测错误和其他有用的东西。使用如下：
   `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`
   然而这种写法已经过时了，这些内容已成为历史。
   ⚡️**只需要知道 `<!DOCTYPE html>` 是最短有效的文档声明。**

2. `<html></html>: <html>`元素。这个元素包裹了整个完整的页面，是一个根元素。

3. `<head></head>: <head>`元素. 这个元素是一个容器，它包含了所有你想包含在 HTML 页面中但不想在 HTML 页面中显示的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述，CSS 样式，字符集声明等等。以后的章节能学到更多关于`<head>`元素的内容。
   `<meta charset="utf-8">:` 这个元素设置文档使用 utf-8 字符集编码，utf-8 字符集包含了人类大部分的文字。基本上他能识别你放上去的所有文本内容。毫无疑问要使用它，并且它能在以后避免很多其他问题。

4. `<title></title>`: 设置页面标题，出现在浏览器标签上，当你标记/收藏页面时它可用来描述页面。

5. `<body></body>: <body>`元素。 包含了你访问页面时所有显示在页面上的内容，文本，图片，音频，游戏等等。

## <center>🔖 HTML 元素</center>

![HTML elment](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html1-1-1.png)

1.  开始标签（Opening tag）：包含元素的名称（本例为 p），被左、右角括号所包围。表示元素从这里开始或者开始起作用 —— 在本例中即段落由此开始。

2.  结束标签（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾 —— 在本例中即段落在此结束。初学者常常会犯忘记包含结束标签的错误，这可能会产生一些奇怪的结果。

3.  内容（Content）：元素的内容，本例中就是所输入的文本本身。

4.  元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

### 🔶 元素分类

> 注: [查看-所有 HTML 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

#### 🔹 块级元素和内联元素

> 注: HTML5 重新定义了元素的类别：见 [元素内容分类(译文)](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)。尽管这些新的定义更精确，但却比上述的 “块级元素” 和 “内联元素” 更难理解，因此在之后的讨论中仍使用旧的定义。
> 个人认为：HTML5 对元素的重新定义,主要是建立在元素使用规范上。规范了某个元素它可以包含哪一类内容。
> 例如: ⚡️**章节元素`<article>, <aside>, <nav> and <section>`**

在 HTML 中有两种你需要知道的重要元素类别，块级元素和内联元素。

- 块级元素在页面中以块的形式展现 —— 相对于其前面的内容它会出现在新的一行，其后的内容也会被挤到下一行展现。块级元素通常用于展示页面上结构化的内容，例如段落、列表、导航菜单、页脚等等。一个以 block 形式展现的块级元素不会被嵌套进内联元素中，但可以嵌套在其它块级元素中。

- 内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行：它通常出现在一堆文字之间例如超链接元素`<a>或者强调元素<em>和 <strong>`。

> 注: 在这篇文章中提到的“块”和“内联”，不应该与 the types of CSS boxes 中的同名术语相混淆. 尽管他们默认是相关的，但改变 CSS 显示类型并不会改变元素的分类，也不会影响它可以包含和被包含于哪些元素。防止这种混淆也是 HTML5 摒弃这些术语的原因之一。

> 注: 你可以查阅包含了块级元素和内联元素列表的参考页面—see Block-level elements and Inline elements.

> [行内元素(内联元素)参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)

> [块级元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)

#### 🔹 空元素

> 不是所有元素都拥有开始标签，内容，结束标签。一些元素只有一个标签，通常用来在此元素所在位置插入/嵌入一些东西。例如：元素`<img>`,是用来在其所在位置插入一张指定的图片。例子如下：

```
<img src="https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site/images/firefox-icon.png">

```

显示如下：

![img元素示例](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html1-1-2.png)

### 🔶 元素属性

元素也可以拥有属性，如下：

![元素属性图](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html1-1-3.png)

一个属性必须包含如下内容：

1. 一个空格，在属性和元素名称，或属性与属性之间。
2. 属性名称。
3. 属性值，由一对引号“ ”引起来(布尔属性可省略)。

#### 🔹 布尔属性

有时你会看到没有值的属性，它是合法的。这些属性被称为布尔属性，他们只能有跟它的属性名一样的属性值。例如 disabled 属性，他们可以标记表单输入使之变为不可用(变灰色)，此时用户不能向他们输入任何数据。

例如：

```
<input type="text" disabled="disabled">

简写为=>

<input type="text" disabled>
```

#### 🔹 属性值的引号

虽然属性值不强制要求加引号。但是不加引号，会导致属性值有空格时的解析问题。
如：

```
// 正确
<a href=https://www.mozilla.org/>收藏页面</a>

// 出错,
// 它会把title属性理解为三个属性——title的属性值为"The"，
// 另外还有两个布尔属性“Mozilla”和“homepage”
<a href=https://www.mozilla.org/ title=The Mozilla homepage>收藏页面</a>
```

#### 🔹 属性值的引号使用单引号或者双引号

都能正确解析。一般使用双引号。

## <center>🔖 HTML 空格</center>

下面的两个代码片段是等价的：

```
<p>狗 狗 很 呆 萌。</p>

<p>狗 狗        很
         呆 萌。</p>
```

无论你在 HTML 元素的内容中使用多少空格(包括空白字符，包括换行)，当渲染这些代码的时候，HTML 解释器会将连续出现的空白字符减少为一个单独的空格符。

那么为什么我们会在 HTML 元素的嵌套中使用那么多的空白呢? 答案就是为了可读性 —— 如果你的代码被很好地进行格式化，那么就很容易理解你的代码是怎么回事，反之就只有聚做一团的混乱.。在我们的 HTML 代码中，我们让每一个嵌套的元素以两个空格缩进。 你使用什么风格来格式化你的代码取决于你 (比如所对于每层缩进使用多少个空格)，但是你应该坚持使用某种风格。

## <center>🔖 HTML 特殊字符</center>

在 HTML 中，字符 <, >,",' 和 & 是特殊字符. 它们是 HTML 语法自身的一部分, 那么你如何将这些字符包含进你的文本中呢, 比如说如果你真的想要在文本中使用符号&或者小于号, 而不想让它们被浏览器视为代码并被解释?

我们必须使用字符引用 —— 表示字符的特殊编码, 它们可以在那些情况下使用. 每个字符引用以符号&开始, 以分号(;)结束.

| 原义字符 | 转义字符 |
| -------- | -------- |
| <        | `&lt;`   |
| >        | `&gt;`   |
| "        | `&quot;` |
| '        | `&apos;` |
| &        | `&amp;`  |

示例：

```
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

在下面的实时输出中，你会看到第一段是错误的，因为浏览器会认为第二个<p>是开始一个新的段落！ 第二段是正确的，因为我们用字符引用来代替了角括号（'<'和'>'符号)。

```
HTML 中用
来定义段落元素。

HTML 中用 <p> 来定义段落元素
```

> ⚡️**维基百科上有一个包含所有可用 HTML 字符实体引用的列表：[XML 和 HTML 字符实体引用列表](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)。**

## <center>🔖 HTML 注释</center>

为了将一段 HTML 中的内容置为注释，你需要将其用特殊的记号`<!--和-->`包括起来， 比如：

```
<p>我没有被注释！</p>

<!-- <p>我被注释了！</p> -->
```

## <center>🔖 总结</center>

- [x] 理解 HTML 的文档结构
- [x] 理解 HTML 的元素结构
- [x] 理解 HTML 的空格
- [x] 理解 HTML 的特殊字符
- [x] 理解 HTML 的注释

## <center>🔖 参考资料</center>

- HTML 介绍—开始学习 HTML,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started
