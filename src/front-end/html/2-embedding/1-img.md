> ⚡️ **预警，前方高能：**
>
> 在本文中，若出现以下 emoji 表情包请特别留意:
>
> - 白色书签：🔖，代表一级标题；
> - 橙色大四边形：🔶，代表二级标题；
> - 蓝色小四边形：🔹，代表三级标题；
> - 黄色闪电：⚡️，代表强调；

## <center>🔖 一、HTML 中如何引入图片</center>

### 🔶 1.1 img 标签引入

HTML 中可以用`<img>` 元素引入图片。

它是一个空元素，最少只需要一个 src （一般读作其全称 source）来使其生效。

⚡️ **注意：像`<img>`和`<video>`这样的元素有时被称之为替换元素，因为这样的元素的内容和尺寸由外部资源（像是一个图片或视频文件）所定义，而不是元素自身。**

#### 🔹 1.1.1 src 属性

src 属性包含了指向我们想要引入的图片的路径，可以是相对或绝对 URL。

举个 🌰 子：

你的网站中有一张图片 dinosaur.jpg 存储在和 HTML 页面同路径的 images 文件夹下（这也是 Google 推荐的做法，利于 SEO），那么你可以采用如下形式引入到 HTML 文件中：

`<img src="images/f1.jpg">`

当然也可以，使用绝对路径：

`<img src="https://www.example.com/images/f1.jpg>`

![结果](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-imgtag.png)

⚡️ **但是这种方式是不被推荐的，这样做只会使浏览器做更多的工作，例如重新通过 DNS 再去寻找 IP 地址。通常我们都会把图片和 HTML 放在同一个服务器上。**

> 警告：大多数图片是有版权的。不要在你的网页上使用一张图片，除非：
>
> 你是图片版权所有者
>
> 你有图片版权所有者明确的、书面上的使用授权
>
> 你有充分的证据证明这张图片是公共领域内的
>
> 侵犯版权是违法并且不道德的。此外，在得到授权之前永远不要把你的 src 属性指向其他人网站上的图片。这被称为"盗链（hotlinking）"。同样，盗取其他人的带宽也是违法的。而且这会降低你的页面的加载速度，而且图片可能会在不受你控制的情况下被移走或用别的令人尴尬的东西替换掉。

#### 🔹 1.1.2 alt 属性

alt 属性 ，它的值应该是对图片的文字描述，用于图片无法显示情况。

举个 🌰 子,1.1.1 例子可以做如下改进：

```
<img src="images/f1.jpg
     alt="这是一张f1照片"
/>
```

测试 alt 属性最简单的方式就是故意拼错图片文件名，这样浏览器就无法找到该图片从而显示备选的文本。如果我们将上例的图片文件名改为 f1111.jpg，浏览器就不能显示图片，而显示：

![](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-alt.png)

#### 🔹 1.1.3 width 和 height 属性

你可以用宽度和高度属性来指定你的图片的高度和宽度。

举个 🌰 子：

```
<img src="images/f1.jpg"
     alt="这是一张f1照片"
     width="400"
     height="300"
/>
```

⚡️ **如果设定的宽高比例跟图片的原始比例不一样，会导致图片变形。**

⚡️ **注意：你应该使用 CSS 而不是 HTML，改变图片尺寸。**

#### 🔹 1.1.4 title 属性

类似于超链接，可以给图片增加 title 属性来提供需要更进一步的支持信息。

举个 🌰 子：

```
<img src="images/f1.jpg"
     title="f1舒马赫"
/>
```

![结果](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-title.png)

#### 🔹 1.1.5 HTML5 `<figure>` 元素

> HTML `<figure>` 元素代表一段独立的内容, 经常与说明（caption） `<figcaption>` 配合使用, 并且作为一个独立的引用单元。当它属于主内容流（main flow）时，它的位置独立于主体。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。

举个 🌰 子：

```
<figure>
  <img src="images/f1.jpg"
     title="f1舒马赫"
  />
  <figcaption>围场中的车王舒马赫</figcaption>
</figure>
```

![结果](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-figure.png)

### 🔶 1.2 css 引入

也可以使用 CSS 把图片嵌入网站中，CSS 属性 `background-image` 和其他 `background-\*` 属性是用来放置背景图片的。

举个 🌰 子，为页面中的所有段落设置一个背景图片，你可以这样做：

```
p {
  background-image: url("images/f1.png");
}
```

⚡️ **注意：CSS 背景图片只是为了装饰。如果你只是想要在你的页面上添加一些漂亮的东西，来提升视觉效果，那 CSS 的做法是可以的。但是这样插入的图片完全没有语义上的意义，它们不能有任何备选文本，也不能被屏幕阅读器识别。这就是 HTML 图片和 CSS 图片的区别。**

## <center>🔖 二、HTML 中的自适应图片</center>

### 🔶 2.1 什么是自适应的图片

⚡️ **自适应图片是一种可以在不同的屏幕尺寸和分辨率的设备上都能良好工作以及具有其他新特性的图片**

### 🔶 2.1 为什么要用自适应的图片

不同于传统的宽屏 PC，移动互联网时代带来了 retina 屏、各种分辨率相差甚远的移动设备。传统的一张固定大小的图片，并不能够很好的适应这些分辨率的变化。

举个 🌰 子:

![正常](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-ResponsiveImages1.png)

上图中页眉的图片在宽度为 1200px 的分辨下，图片显示效果较好。

![窄屏](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-ResponsiveImages2.png)

上图中页眉的图片在宽度为窄屏下，图片两边都被截去了。

### 🔶 2.2 怎么创建自适应的图片

HTML 有两种方案创建自适应图片。下面分别介绍：

#### 🔹 2.2.1 提供不同尺寸的图片

为不同的屏幕宽度，提供不同尺寸的图片。

(1)第一种方法：

举个 🌰 子：

```
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">

```

转换为自适应的写法：

```
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

上面引入了两个新的属性。srcset 和 sizes 属性。

- srcset

  1. 文件名。
  2. 空格。
  3. 图像的真实宽度+w。(以像素为单位。注意到这里使用 w 单位，而不是你预计的 px。)

- sizes 定义了一组媒体条件指明当条件为真时，什么宽度的图片尺寸是最佳选择。

  1. 一个媒体条件。(max-width:480px),意思是：“当可视窗口的宽度是 480 像素或更少”。
  2. 一个空格。
  3. 当媒体条件为真时，将用图片填充的槽的宽度。（440px）

> ⚡️ **注意: 对于槽的宽度，你可以会提供一个固定值 (px, em) 或者是一个相对于视口的长度(vw)，但不能是百分比。你也许已经注意到最后一个槽的宽度是没有媒体条件的，它是默认的，当没有任何一个媒体条件为真时，它就会生效。 当浏览器成功匹配第一个媒体条件的时候，剩下所有的东西都会被忽略，所以要注意媒体条件的顺序。**

⚡️ **有了这些属性，浏览器会：**

1. 查看设备宽度
2. 检查 sizes 列表中哪个媒体条件是第一个为真
3. 查看给予该媒体查询的槽大小
4. 加载 srcset 列表中引用的最接近所选的槽大小的图像

如果浏览器以 480px 的视窗宽度来加载页面，那么(max-width: 480px)的媒体条件为真，因此 440px 的槽会被选择，所以 elva-fairy-480w.jpg 将加载，因为它的的固定宽度（480w）最接近于 440px。800px 的照片大小为 128KB 而 480px 版本仅有 63KB 大小，节省了 65KB。现在想象一下，如果这是一个有很多图片的页面。使用这种技术会节省移动端用户的大量带宽。

另外一种方法：

举个 🌰 子：

```
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
```

`<source>`元素包含一个 media 属性，这一属性包含一个媒体条件。从上往下，条件为真，那么就会显示这张图片。
上面的例子中，如果视窗的宽度为 799px 或更少，第一个`<source>`元素的图片就会显示。如果视窗的宽度是 800px 或更大，就显示第二张图片。

srcset 属性包含要显示图片的路径。(请注意，`<source>`可以使用引用多个图像的 srcset 属性和 sizes 属性。不过通常不会这样做。)

最后，必须在 `</picture>`之前正确提供一个`<img>`元素以及它的 src 和 alt 属性，否则不会有图片显示。当媒体条件都不返回真的时候，它会提供图片；如果浏览器不支持`<picture>`元素时，它可以作为后备方案。

#### 🔹 2.2.2 提供相同尺寸，不同分辨率的图片

如果你支持多种分辨率显示，但希望每个不同宽度屏幕上看到的图片的实际尺寸是相同的，可以使用这种方法。

举个 🌰 子：

```
// html
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">

// css 控制图片宽度为320px
img {
  width: 320px;
}
```

CSS 会应用在图片上，img 元素的宽度在屏幕上是 320 像素（也称作 CSS 像素）。

⚡️ **和 2.2.1 相比，这种方法，去掉了 sizes 属性。**

浏览器通过视窗宽度，提供 srcset 引用的最适合的图像。

因此，如果访问页面的设备具有标准/低分辨率显示，一个设备像素表示一个 CSS 像素，elva-fairy-320w.jpg 会被加载（1x 是默认值，所以你不需要写出来）。

如果设备有高分辨率，两个或更多的设备像素表示一个 CSS 像素，elva-fairy-640w.jpg 会被加载。
640px 的图像大小为 93KB，320px 的图像的大小仅仅有 39KB。

## <center>🔖 三、HTML 中的矢量图形</center>

### 🔶 3.1 什么是矢量图形

> - 位图使用像素网格来定义 — 一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.)
> - 矢量图使用算法来定义 — 一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 SVG 格式可以让我们创造用于 Web 的精彩的矢量图形。

> 此外，矢量图形相较于同样的位图，通常拥有更小的体积，因为它们仅需储存少量的算法，而不是逐个储存每个像素的信息。

### 🔶 3.2 使用 SVG 创建矢量图形

> SVG 是用于描述矢量图像的 XML 语言。 它基本上是像 HTML 一样的标记，只是你有许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。 SVG 用于标记图形，而不是内容。 非常简单，你有一些元素来创建简单图形，如`<circle>` 和`<rect>`。更高级的 SVG 功能包括 `<feColorMatrix>`（使用变换矩阵转换颜色）`<animate>`（矢量图形的动画部分）和 `<mask>`（在图像顶部应用模板）

![矢量图](https://cdn.jsdelivr.net/gh/jolin27144/blog-images/html-pic/html-2-1-矢量图.png)

SVG 很容易手工编码，可以在文本编辑器中手动编写简单的 SVG。对于复杂的图像，可以使用矢量图形编辑器，如 Inkscape 或 Illustrator。 这些软件包允许您使用各种图形工具创建各种插图，并创建照片的近似值（例如 Inkscape 的跟踪位图功能）。

SVG 优点:

1. 矢量图像中的文本可访问（这也有利于 SEO)）。
2. SVG 可以很好配合 css/js。

SVG 缺点：

1. SVG 非常容易变得复杂，这意味着文件大小会增加; 复杂的 SVG 也会在浏览器中占用很长的处理时间。
2. SVG 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像。
3. 旧版浏览器不支持 SVG，因此如果您需要在网站上支持旧版本的 IE，则可能不适合（SVG 从 IE9 开始得到支持）。

### 🔶 3.3 HTML 中引入 SVG

#### 🔹 3.3.1 用 img 元素引入

举个 🌰 子：

```
<img
    src="equilateral.svg"
    alt="triangle with all three sides equal"
    height="87px"
    width="100px" />
```

优点：

1. 快速，熟悉的图像语法与 alt 属性中提供的内置文本等效。
2. 可以通过在`<a>`元素嵌套`<img>`，使图像轻松地成为超链接。

缺点:

1. 无法使用 JavaScript 操作图像。
2. 如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。 （从 SVG 文件调用的外部样式表不起作用）
3. 不能用 CSS 伪类。

#### 🔹 3.3.2 用 svg 元素引入

举个 🌰 子：

```
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="green" />
</svg>
```

优点:

1. 将 SVG 内联减少 HTTP 请求，可以减少加载时间。
2. 您可以为 SVG 元素分配 class 和 id，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。 实际上，您可以使用任何 SVG 外观属性 作为 CSS 属性。
3. 可以 CSS 伪类（如:focus）和 CSS 动画。
4. 您可以通过将 SVG 标记包在`<a>`元素中，使其成为超链接。

缺点：

1. 这种方法只适用于在一个地方使用的 SVG。多次使用会导致资源密集型维护（resource-intensive maintenance）。
2. 额外的 SVG 代码会增加 HTML 文件的大小。
3. 浏览器不能像缓存普通图片一样缓存内联 SVG。
4. 您可能会在`<foreignObject>`元素中包含回退，但支持 SVG 的浏览器仍然会下载任何后备图像。你需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。

#### 🔹 3.3.3 用 iframe 元素引入

举个 🌰 子：

```
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

⚡️ **不推荐**

缺点:

1.  iframe 有一个回退机制，如果浏览器不支持 iframe，则只会显示回退。
2.  除非 SVG 和您当前的网页具有相同的 origin，否则你不能在主页面上使用 JavaScript 来操纵 SVG。

## <center>🔖 总结</center>

- ✔️ 理解 HTML 引入图片的方式
- ✔️ 理解 HTML 中的自适应图片
- ✔️ 理解 HTML 中的矢量图形

## <center>🔖 参考资料</center>

- HTML 中的图片,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
- `<figure>`：可附标题内容元素,
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure
- `<img>`：图像嵌入元素,
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img
- 响应式图片,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- `<picture>`：picture 元素,
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture
- 在网页中添加矢量图形,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
- SVG,
  https://developer.mozilla.org/zh-CN/docs/Glossary/SVG
