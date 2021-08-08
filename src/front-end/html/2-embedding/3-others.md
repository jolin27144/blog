> ⚡️ **预警，前方高能：**
>
> 在本文中，若出现以下 emoji 表情包请特别留意:
>
> - 白色书签：🔖，代表一级标题；
> - 橙色大四边形：🔶，代表二级标题；
> - 蓝色小四边形：🔹，代表三级标题；
> - 黄色闪电：⚡️，代表强调；

## <center>🔖 一、iframe 标签</center>

`<iframe>`元素旨在允许您将其他 Web 文档嵌入到当前文档中。
这很适合将第三方内容纳入您的网站，您可能无法直接控制，也不希望实现自己的版本。
例如来自在线视频提供商的视频，评论系统，在线地图提供商，广告横幅等。

### 🔶 1.1 标签使用介绍

举个 🌰 子：

```
<iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
    Fallback link for browsers that don't support iframes
  </a> </p>
</iframe>
```

- allowfullscreen

  如果设置，`<iframe>`则可以通过全屏 API 设置为全屏模式（稍微超出本文的范围）。

- frameborder

  如果设置为 1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0 删除边框。不推荐这样设置，因为在 CSS 中可以更好地实现相同的效果。border: none;

- src
  该属性与`<video>/<img>`一样包含指向要嵌入文档的 URL 路径。

- width 和 height

  这些属性指定您想要的 iframe 的宽度和高度。

- 备选内容

  与`<video>`等其他类似元素相同，你可以在`<iframe></iframe>`标签之间包含备选内容，如果浏览器不支持`<iframe>`，将会显示备选内容。现在你几乎不可能遇到任何不支持`<iframe>`的浏览器。

- sandbox
  该属性需要在已经支持其他`<iframe>`功能（例如 IE 10 及更高版本）但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置; 我们将在下一节中更加详细地谈到。

⚡️ **注意：为了提高速度，在主内容完成加载后，使用 JavaScript 设置 iframe 的 src 属性是个好主意。这使您的页面可以更快地被使用，并减少您的官方页面加载时间（重要的 SEO 指标）。**

### 🔶 1.2 安全隐患

#### 🔹 1.2.1 点击劫持

> ⚡️ **点击劫持**是一种常见的 iframe 攻击，黑客将隐藏的 iframe 嵌入到您的文档中（或将您的文档嵌入到他们自己的恶意网站），并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。

参考:[点击劫持](https://zh.wikipedia.org/wiki/%E7%82%B9%E5%87%BB%E5%8A%AB%E6%8C%81)

#### 🔹 1.2.2 使用 HTTPS

HTTPS 是 HTTP 的加密版本。您应该尽可能使用 HTTPS 为您的网站提供服务：

- HTTPS 减少了远程内容在传输过程中被篡改的机会，
- HTTPS 防止嵌入式内容访问您的父文档中的内容，反之亦然。

#### 🔹 1.2.3 始终使用 sandbox 属性

sandbox 给嵌入的内容仅能完成自己工作的权限。

一个允许包含在其中的代码以适当的方式执行或者用于测试，但不能对其他代码库（意外或恶意）造成任何损害的容器称为沙盒。

未沙盒化(Unsandboxed)内容可以做很多事情（执行 JavaScript，提交表单，弹出窗口等）。

默认情况下，您应该使用没有参数的 sandbox 属性来强制执行所有可用的限制，如我们前面的示例所示。

如果绝对需要，您可以逐个添加权限（sandbox=""属性值内）:

请参阅[sandbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox)所有可用选项的参考条目。

其中重要的一点是，⚡️ **不应该同时添加 allow-scripts 和 allow-same-origin 到你的 sandbox 属性中**。 因为在这种情况下，嵌入式内容可以绕过阻止站点执行脚本的同源安全策略，并使用 JavaScript 完全关闭沙盒。

#### 🔹 1.2.4 配置 CSP 指令

CSP 代表[内容安全策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)，它提供一组 HTTP 标头（由 web 服务器发送时与元数据一起发送的元数据），旨在提高 HTML 文档的安全性。

在`<iframe>`安全性方面，可以将服务器配置为发送适当的 X-Frame-Options 标题。
这样做可以防止其他网站在其网页中嵌入您的内容（这将导致点击和一系列其他攻击）。

> ⚡️ **可以阅读Frederik Braun的帖子[在X-Frame-Options安全性头](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/)上来获取有关此主题的更多背景信息。显然，在这篇文章中已经解释得很清楚了**

## <center>🔖 二、iframe 标签</center>

## <center>🔖 三、iframe 标签</center>

## <center>🔖 总结</center>

- ✔️ 理解 HTML 中的 iframe 标签
- ✔️ 理解 HTML 中的 embed 标签
- ✔️ 理解 HTML 中的 object 标签

## <center>🔖 参考资料</center>

- 从对象到 iframe - 其他嵌入技术,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/%E5%85%B6%E4%BB%96%E5%B5%8C%E5%85%A5%E6%8A%80%E6%9C%AF
- 点击劫持,
  https://zh.wikipedia.org/wiki/%E7%82%B9%E5%87%BB%E5%8A%AB%E6%8C%81
