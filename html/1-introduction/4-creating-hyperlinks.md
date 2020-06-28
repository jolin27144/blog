## <center>🔖 什么是超链接</center>

> 超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。
> 🔥**超链接使我们能够将我们的文档链接到任何其他文档（或其他资源），也可以链接到文档的指定部分**，
> 我们可以在一个简单的网址上提供应用程序（与必须先安装的本地应用程序或其他东西相比）。
> 几乎任何网络内容都可以转换为链接，点击（或激活）超链接将使网络浏览器转到另一个网址（URL）。

> 注意：URL 可以指向 HTML 文件、文本文件、图像、文本文档、视频和音频文件以及可以在网络上保存的任何其他内容。
> 如果浏览器不知道如何显示或处理文件，它会询问您是否要打开文件（需要选择合适的本地应用来打开或处理文件）或下载文件（以后处理它）。

🌰 例如:

![html](https://cdn.jsdelivr.net/gh/jolin27144/blog@master/images/html/1-intruduction/4-creating-hyperlinks/qq.jpeg)

腾讯网首页，蓝色背景导航栏每个元素即为超链接，提供了导航功能。

## 🔖 超链接分类

### 基本链接

使用`<a>`元素创建基本链接，在 href (Hypertext Reference)属性中，包含你希望指向的 URL 或 URL 片段。

🌰 例如：

```
<a href="https://juejin.im/user/5eb4366ee51d4528dd23bfad">我的掘金主页</a>.
```

结果如下所示：
[我的掘金主页](https://juejin.im/user/5eb4366ee51d4528dd23bfad)

> URL 片段是哈希标记（#）前面的名称，哈希标记指定当前文档中的内部目标位置（HTML 元素的 ID）。

> URL 不限于基于 Web（HTTP）的文档，也可以使用浏览器支持的任何协议。
> 例如，在大多数浏览器中正常工作的 file:、ftp:和 mailto：。

> ⚡ **注意: 可以使用 href="#top" 或者 href="#" 链接返回到页面顶部。这种行为是 HTML5 的特性。**

### 块级链接

除了文字，你可以将一部分内容转换为链接，甚至是块级元素。
如你想要将一个图像转换为链接，只需把图像元素放到`<a></a>`标签中间。

🌰 例如：

```
<a href="https://juejin.im/user/5eb4366ee51d4528dd23bfad">
  <img src="https://cdn.jsdelivr.net/gh/jolin27144/blog@master/images/html/1-intruduction/4-creating-hyperlinks/qq.jpeg" alt="块级链接">
</a>
```

## 🔖 统一资源标志符(URI)

> ⚡️**统一资源标识符（英语：Uniform Resource Identifier，缩写：URI）在电脑术语中是一个用于标识某一互联网资源名称的字符串。**

![URI包含URL和URN](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/URI_Euler_Diagram_no_lone_URIs.svg/1920px-URI_Euler_Diagram_no_lone_URIs.svg.png)

### 统一资源定位符(URL)

#### 绝对 URL

#### 相对 URL

### 统一资源名称(URN)

## 🔖 路径(path)

## 🔖 总结

- [x] 理解 HTML 超链接
- [x] 理解 URI 和其两种常见形式 URL、URN
- [x] 理解 URL 中“#” “？” &“”号的作用

## 🔖 参考资料

- Creating hyperlinks,
  https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
- `<a>: The Anchor element`,
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a
- 什么是 URL？,
  https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URLa
- 统一资源标志符(URI),
  https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6
- 统一资源定位符(URL),
  https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6
- 统一资源标志符(URN),
  https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%90%8D%E7%A7%B06
- URL 中“#” “？” &“”号的作用,
  https://www.cnblogs.com/kaituorensheng/p/3776527.html
