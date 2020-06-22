# 什么是 HTML 头部?

让我们简单的回顾下上一章提到的 HTML

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

HTML 头部即包含在`<head>`元素里面的内容。

`<head>`元素里面的内容不会在浏览器中显示。

# `<head>元素`

它包含了像页面的标题,CSS，指向自定义图标的链接,元数据(描述 HTML 的数据，比如，作者，和描述文档的重要关键词), 脚本等。

即以下几类标签:

1. `<title>元素`
2. `<meta>元素`
3. `<link>元素`
4. `<script>元素`

下面分别从介绍。

# `<title>元素`

我们之前已经了解过`<title>`，它可以用来给 html 文档添加一个标题。

你可能会将它和给 body 添加标题的 `<h1>`元素混淆，有些时候`<h1>`也会被称作网页标题。但是它们是不同的。

- 当被加载到浏览器中的时候，元素 `<h1>` 会出现在页面中 —— 通常它应该在一个页面中只被使用一次，它被用来标记你的页面内容的标题（故事的标题，新闻标题或者任何适当的方式）。

- 元素 `<title>` 是用来表示整个 HTML 文档标题的元数据（不是文档的内容）。
  1. 被作为建议的书签名。
  2. 被用在搜索的结果中。

# `<meta>元素`

元数据就是描述数据的数据，而 HTML 有一个“官方的”方式来为一个文档添加元数据—— `<meta>`元素,是一个空元素。

> HTML `<meta>` 元素表示那些不能由其它 HTML 元相关元素 (`<base>, <link>, <script>, <style> 或 <title>`) 之一表示的任何元数据信息`。

有很多不同种类的`<meta>`元素可以被包含进你的页面的`<head>`元素。

- 如果设置了 name 属性，meta 元素提供的是文档级别（document-level）的元数据，应用于整个页面。
- 如果设置了 http-equiv 属性，meta 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 charset 属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 itemprop 属性，meta 元素提供用户定义的元数据。

> 注意: 全局属性 name 在`<meta>`元素中具有特殊的语义；另外， 在同一个`<meta>`标签中，name, http-equiv 或者 charset 三者中任何一个属性存在时，itemprop 属性不能被使用。

下面分别介绍:

## 1.设置了 name 属性

name 属性一般和 content 属性一起使用。

以名-值对的方式给文档提供元数据。

其中 name 作为元数据的名称，content 作为元数据的值。

即：name="" content=""

几个常用的 name 属性:

- author，就是这个文档的作者名称，可以用自由的格式去定义。
- description，其中包含页面内容的简短和精确的描述。 一些浏览器，如 Firefox 和 Opera，将其用作书签页面的默认描述。

  description 也被使用在搜索引擎显示的结果页中。下面通过一个例子来说明：

  1. 访问 [MDN Web Docs](https://developer.mozilla.org/zh-CN/)。
  2. 查看网页源代码（通过鼠标右键点击网页在弹出的菜单中选择[查看网页源代码]）
  3. 找到 name = "description" 的 meta 标签。
  4. 在你喜欢的搜索引擎里搜索“MDN Web Docs”。
  5. 仔细观察`<meta>`中的 description 和 `<title>` 元素如何在搜索结果里显示

  ![结果图](https://media.prod.mdn.mozit.cloud/attachments/2018/07/03/16074/03e99e180d14d2c1e006734ef4cacb45/mdn-search-result.png)

- viewport, 它提供有关视口初始大小的提示，仅供移动设备使用。

  手机浏览器是把页面放在一个虚拟的“窗口”（viewport）中，通常这个虚拟的“窗口”（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

  示例:`<meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>`

  下表是 name="viewport"时,content 的可能内容:
  | Value | 可能值 | 描述 |
  | ------------- | ---------------------------------- | ------------------------------------------------------------------------------------ |
  | width | 一个正整数或者字符串 device-width | 以 pixels（像素）为单位， 定义 viewport（视口）的宽度。 |
  | height | 一个正整数或者字符串 device-height | 以 pixels（像素）为单位， 定义 viewport（视口）的高度。 |
  | initial-scale | 一个 0.0 到 10.0 之间的正数 | 定义设备宽度（纵向模式下的设备宽度或横向模式下的设备高度）与视口大小之间的缩放比率。 |
  | maximum-scale | 一个 0.0 到 10.0 之间的正数 | 定义缩放的最大值；它必须大于或等于 minimum-scale 的值，不然会导致不确定的行为发生。 |
  | minimum-scale | 一个 0.0 到 10.0 之间的正数 | 定义缩放的最小值；它必须小于或等于 maximum-scale 的值，不然会导致不确定的行为发生。 |
  | user-scalable | 一个布尔值（yes 或者 no） | 如果设置为 no，用户将不能放大或缩小网页。默认值为 yes。 |

  > 注意:关于 name="viewport" 虽然标准化程度不高，但由于事实上的支配地位，大多数移动浏览器都尊重这一声明。不同设备和浏览器之间的默认值可能不同。

> 许多 `<meta>` 特性已经不再使用。 例如，keyword `<meta>` 元素（`<meta name="keywords" content="fill, in, your, keywords, here">`）— 提供关键词给搜索引擎，根据不同的搜索词，查找到相关的网站 — 已经被搜索引擎忽略了， 因为作弊者填充了大量关键词到 keyword， 错误地引导搜索结果。

> 在 [standard metadata names](https://wiki.developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name) 中查看在 HTML 规范中定义的标准元数据名称的更多细节。

## 2.设置了 http-equiv 属性

该属性定义了一个编译指示指令。这个属性叫做 http-equiv(alent) 是因为所有允许的值都是特定 HTTP 头部的名称，如下：

- content-security-policy

  它允许页面作者定义当前页的 内容策略。 内容策略主要指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。

- content-type

  如果使用这个属性，其值必须是"text/html; charset=utf-8"。注意：该属性只能用于 MIME type 为 text/html 的文档，不能用于 MIME 类型为 XML 的文档。

- default-style

  设置默认 CSS 样式表组的名称。

- x-ua-compatible

  X-ua-compatible 是针对 IE8 版本的一个特殊文件头标记，用于为 IE8 指定不同的页面渲染模式，对于 ie8 之外的浏览器是不识别的
  如果指定则，则需设置 content=""

- refresh

  这个属性指定:
  如果 content 只包含一个正整数,则是重新载入页面的时间间隔(秒);
  如果 content 包含一个正整数并且跟着一个字符串 ';url=' 和一个合法的 URL，则是重定向到指定链接的时间间隔(秒)

  示例：

  ```
  <!-- Redirect page after 3 seconds -->
  <meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
  ```

## 3.设置了 charset 属性

```
<meta charset="utf-8">
```

这个元素简单的指定了文档的字符编码 —— 在这个文档中被允许使用的字符集。

## 4.设置了 itemprop 属性

itemprop 是全局属性 被用于向一个物体中添加属性

meta 元素中也可以使用。

如：

```
<meta itemprop="description" content="my description" />
```

> 注意: 全局属性 name 在`<meta>`元素中具有特殊的语义；另外， 在同一个 `<meta>` 标签中，name, http-equiv 或者 charset 三者中任何一个属性存在时，itemprop 属性不能被使用。
> 如：

```
// 正确
<meta name="description" content="my description" />

// 正确
<meta itemprop="description" content="my description" />

// 错误
<meta itemprop="description" name="description" content="" />
```

# `<link>元素`

HTML 外部资源链接元素 (`<link>`) 规定了当前文档与外部资源的关系。该元素最常用于链接样式表，此外也可以被用来创建站点图标(比如 PC 端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。

`<link>` 元素经常位于文档的头部。这个 link 元素有 2 个属性，rel="stylesheet"表明这是文档的样式表，而 href 包含了样式表文件的路径：

1. 要链接一个外部的样式表，你需要像这样在你的<head>中包含一个<link>元素：

   ```
   <link href="main.css" rel="stylesheet">
   ```

2. 增加自定义图标

   ```
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
   ```

# `<script>元素`

`<script>` 部分没必要非要放在文档头部；实际上，把它放在文档的尾部（在 </body>标签之前）是一个更好的选择，这样可以确保在加载脚本之前浏览器已经解析了 HTML 内容（如果脚本加载某个不存在的元素，浏览器会报错)。

```
<script src="my-js-file.js"></script>
```

> 注意： `<script>`元素看起来像一个空元素，但它并不是，因此需要一个结束标记。您还可以选择将脚本放入`<script>`元素中，而不是指向外部脚本文件。

# 参考资料

- `<head>`标签里有什么? Metadata-HTML 中的元数据,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
- `<head>: The Document Metadata (Header) element`,
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head

- `<link>: The External Resource Link element`,
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link

- `<meta>: The Document-level Metadata element`,
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta

- `<title>: The Document Title element`,
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

- `<script>: The Script element`,
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

- 移动前端开发之 viewport 的深入理解,
  https://www.cnblogs.com/2050/p/3877280.html

- `<meta>标签 name="viewport" 详解`,
  https://www.jianshu.com/p/32f0761261b7
