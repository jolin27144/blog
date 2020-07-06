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

不同于传统的宽屏PC，移动互联网时代带来了retina屏、各种分辨率相差甚远的移动设备。传统的一张固定大小的图片，并不能够很好的适应这些分辨率的变化。

举个 🌰 子:



### 🔶 2.2 怎么创建自适应的图片

## <center>🔖 三、HTML 中的矢量图形</center>

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
