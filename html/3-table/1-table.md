> ⚡️ **预警，前方高能：**
>
> 在本文中，若出现以下 emoji 表情包请特别留意:
>
> - 白色书签：🔖，代表一级标题；
> - 橙色大四边形：🔶，代表二级标题；
> - 蓝色小四边形：🔹，代表三级标题；
> - 黄色闪电：⚡️，代表强调；

## <center>🔖 一、超链接</center>

### 🔶 1.1 什么是超链接

> 超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。
> ⚡️ **超链接使我们能够将我们的文档链接到任何其他文档（或其他资源），也可以链接到文档的指定部分**，
> 我们可以在一个简单的网址上提供应用程序（与必须先安装的本地应用程序或其他东西相比）。
> 几乎任何网络内容都可以转换为链接，点击（或激活）超链接将使网络浏览器转到另一个网址（URL）。

> 注意：URL 可以指向 HTML 文件、文本文件、图像、文本文档、视频和音频文件以及可以在网络上保存的任何其他内容。
> 如果浏览器不知道如何显示或处理文件，它会询问您是否要打开文件（需要选择合适的本地应用来打开或处理文件）或下载文件（以后处理它）。

举个 🌰 子：

![hyperlinks example](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-1-4-1.jpeg)

腾讯网首页，蓝色背景导航栏每个元素即为超链接，提供了导航功能。

### 🔶 1.2 超链接分类

#### 🔹 1.2.1 基本链接

使用`<a>`元素创建基本链接，在 href (Hypertext Reference)属性中，包含你希望指向的 URL 或 URL 片段。

举个 🌰 子：

```
<a href="https://juejin.im/user/5eb4366ee51d4528dd23bfad">我的掘金主页</a>.
```

结果如下所示：
[我的掘金主页](https://juejin.im/user/5eb4366ee51d4528dd23bfad)

> URL 片段是哈希标记（#）前面的名称，哈希标记指定当前文档中的内部目标位置（HTML 元素的 ID）。

> URL 不限于基于 Web（HTTP）的文档，也可以使用浏览器支持的任何协议。
> 例如，在大多数浏览器中正常工作的 file:、ftp:和 mailto：。

> ⚡ **注意: 可以使用 href="#top" 或者 href="#" 链接返回到页面顶部。这种行为是 HTML5 的特性。**

#### 🔹 1.2.2 块级链接

除了文字，你可以将一部分内容转换为链接，甚至是块级元素。
如你想要将一个图像转换为链接，只需把图像元素放到`<a></a>`标签中间。

举个 🌰 子：

```
<a href="https://juejin.im/user/5eb4366ee51d4528dd23bfad">
  <img src="https://cdn.jsdelivr.net/gh/jolin27144/blog@master/images/html/1-intruduction/4-creating-hyperlinks/qq.jpeg" alt="块级链接">
</a>
```

## <center>🔖 二、URI、URL、URN</center>

> ⚡️ **统一资源标识符（英语：Uniform Resource Identifier，缩写：URI）是一个用于标识某一互联网资源的字符串。**

### 🔶 2.1 URI 和 URL、URN 的关系

先看看它们的发展历史(不感兴趣可略过)：

> 如文章开头提到，正是超链接的诞生，提供了互联网进行“互联”的一种方式。
>
> 与此同时，URL 也作为一个”超链接的目标资源的短字符串"而被引入。
>
> 往后几年的发展中，为了区别：⚡️ **"提供资源访问"** ⚡️ **"资源标记"** 这两种字符串。
>
> 两个专业术语也因此诞生：“统一资源定位符”和“统一资源名称”。
>
> 也就是我们今天所说的 URL 和 URN。
>
> 后来，在人们意识到两者事实上基于同一个基础的“资源标识”的概念。因此[RFC 3986](https://tools.ietf.org/html/rfc3986)提出: URL 和 URN 是 URI 的子集。
>
> 同时提出，未来的规格和相关文件应使用通用术语“ URI”，而不是限制性更强的术语“ URL”和“ URN”。

⚡️ **概括：**

- **URL 和 URN 是 URI 的子集。**

- **URL 除了识别资源外，还提供了一种通过描述资源的主要访问机制来定位资源。**

- **URN 则用一个独一无可、不可改变的名称标识资源，无论资源是否不存在或不可用**

![URI包含URL和URN](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-1-4-uri&-url&urn.png)

上图表示 URI 和 URL、URN 的关系。

### 🔶 2.2 URI 的格式

![URI 格式](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-1-4-2.png)

1. **scheme**：表示资源应该使用哪种协议来访问。
   如 HTTP、HTTPS 协议。此外还有其他不是很常见的 scheme，例如 ftp、ldap、file、news 等。

2. **scheme 和 authority 之间**，必须是三个特定的字符 ⚡️ **“://”** ，它把 scheme 和后面的部分分离开。注意: URN 则只有":"。

3. **authority**：表示资源所在的主机名，通常的形式是“host:port”，即主机名加端口号。主机名可以是 IP 地址或者域名的形式，必须要有，否则浏览器就会找不到服务器。但端口号有时可以省略

4. **path**：以"/"开头。采用了类似文件系统“目录”“路径”的表示方式，因为早期互联网上的计算机多是 UNIX 系统，所以采用了 UNIX 的“/”风格。其实也比较好理解，它与 scheme 后面的“://”是一致的。

5. **query**：附加一些额外的修饰参数。

6. **fragment**：它是 URI 所定位的资源内部的一个“锚点”或者说是“标签”，浏览器可以在获取资源后直接跳转到它指示的位置。但片段标识符仅能由浏览器这样的客户端使用，服务器是看不到的。也就是说，浏览器永远不会把带“#fragment”的 URI 发送给服务器，服务器也永远不会用这种方式去处理资源的片段。

### 🔶 2.3 绝对 URL 和相对 URL

⚡️ **绝对 URL** ： 指向由其在 Web 上的绝对位置定义的位置。 包括协议+域名。

举个 🌰 子：

1. 如果 index.html 页面在 projects 这一目录 。

2. projects 目录位于 web 服务站点的根目录。

3. web 站点的域名为`http://www.example.com`。

4. 那么这个页面就可以通过`http://www.example.com/projects/index.html`访问。

   ( 或者通过`http://www.example.com/projects/`来访问, 因为在没有指定特定的 URL 的情况下，大多数 web 服务会默认访问加载 index.html 这类页面)

`http://www.example.com/projects/index.html`即为绝对 URL。

⚡️ **相对 URL**： 指向与您链接的文件相关的位置。

举个 🌰 子：

1. 如果我们访问了`http://www.example.com/projects/index.html`这个文件。

2. 想转到和`index.html`相同目录下的一个 PDF 文件, 那个可以直接将该文件名作为 URL。例如 `project-brief.pdf`。

3. 如果 PDF 文件在 projects 的子目录 pdfs 中。 那么相对路径就是 `pdfs/project-brief.pdf`。
   (对应的绝对 URL 就是 http://www.example.com/projects/pdfs/project-brief.pdf.)

`pdfs/project-brief.pdf`即为相对 URL。

## <center>🔖 三、路径</center>

⚡️ **URL 使用路径查找文件。**

### 🔶 3.1 URL 中使用的路径

![目录结构图](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html1-4-path.png)

此目录结构的根目录称为 resume。当在网站上工作时， 你会有一个包含整个网站的目录。

在根目录，我们有一个 resume.html，作为主页

我们的根目录还有两个目录—— dist 和 images，它们分别包含一个 index.html 文件和一个 img.png 文件。

- ⚡️ **指向当前目录** ：如果 resume.html 想要包含 style.css。因为它与当前文件是在同一个目录的。可以用"./"表示当前目录，或者直接省略。

  URL 为：`style.css`或`./style.css`

- ⚡️ **指向子目录** ：如果 resume.html 想要包含 images 目录下的 img.png。

  URL 为：`images/img.png`

- ⚡️ **指向上级目录** ： 如果想在 dist/index.html 中包含一个指向 images/img.png 的超链接，你必须先返回上级目录，然后再回到 images 目录。返回上一个目录级使用两个英文点号表示 ".."。

  URL 为: `../imgaes/img.png`

## <center>🔖 总结</center>

- ✔️ 理解 HTML 超链接
- ✔️ 理解 URI 和 URL、URN
- ✔️ 理解 URL 中使用的路径

## <center>🔖 参考资料</center>

- Creating hyperlinks,
  https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
- `<a>`: The Anchor element,
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
- RFC 3986,https://tools.ietf.org/html/rfc3986
