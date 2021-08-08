> ⚡️ **预警，前方高能：**
>
> 在本文中，若出现以下 emoji 表情包请特别留意:
>
> - 白色书签：🔖，代表一级标题；
> - 橙色大四边形：🔶，代表二级标题；
> - 蓝色小四边形：🔹，代表三级标题；
> - 黄色闪电：⚡️，代表强调；

## <center>🔖 一、视频</center>

`<video>` 元素 用于在 HTML 文档中嵌入媒体播放器，支持文档内的视频播放。

你也可以将 `<video>` 标签用于音频内容，但是`<audio>`元素可能在用户体验上更合适。

### 🔶 1.1 Video 标签属性

举个 🌰 子：

```
<video
       src="rabbit320.webm"
       controls
       width="400"
       height="400"
       autoplay
       loop
       muted
       poster="poster.png"
       >
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

解析：

- src

  同 `<img>`标签使用方式相同。提供视频资源的 URL。

- controls

  Gecko 会提供用户控制，允许用户控制视频的播放，包括音量，跨帧，暂停/恢复播放。

- width,height

  可以用属性控制视频的尺寸，也可以用 CSS 来控制视频尺寸。 无论使用哪种方式，视频都会保持它原始的长宽比 — 也叫做纵横比。

  如果你设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色。

- autoplay

  这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。

- loop

  这个属性可以让音频或者视频文件循环播放。同样不建议使用，除非有必要。

- muted

  这个属性会导致媒体播放时，默认关闭声音。

- poster

  指向一个图像的 URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。

- preload

  用来缓冲较大的文件，有 3 个值可选：

  - "none" ：不缓冲
  - "auto" ：页面加载后缓存媒体文件
  - "metadata" ：仅缓冲文件的元数据

- 在 `<video></video>` 标签中间的内容，是针对浏览器不支持此元素时候的降级处理。

  这个叫做后备内容 — 当浏览器不支持 `<video>` 标签的时候，就会显示这段内容，这使得我们能够对旧的浏览器提供回退内容。你可以添加任何后备内容，在这个例子中我们提供了一个指向这个视频文件的链接，从而使用户至少可以访问到这个文件，而不会局限于浏览器的支持。

### 🔶 1.2 使用多个播放源提供兼容性

举个 🌰 子：

```
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

将 src 属性从 `<video>` 标签中移除。将它放在几个单独的标签 `<source>` 当中。

在这个例子当中，浏览器将会检查 `<source>` 标签，并且播放第一个与其自身 codec 相匹配的媒体。你的视频应当包括 WebM 和 MP4 两种格式，这两种在目前已经足够支持大多数平台和浏览器。

每个 `<source>` 标签页含有一个 type 属性，这个属性是可选的，但是建议你添加上这个属性 — 它包含了视频文件的 MIME types ，同时浏览器也会通过检查这个属性来迅速的跳过那些不支持的格式。如果你没有添加 type 属性，浏览器会尝试加载每一个文件，直到找到一个能正确播放的格式，这样会消耗掉大量的时间和资源。

## <center>🔖 二、音频</center>

### 🔶 2.1 audio 标签

`<audio>` 标签与 `<video>` 标签的使用方式几乎完全相同，有一些细微的差别。

```
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，可点击<a href="viper.mp3">此链接</a>收听。</p>
</audio>
```

音频播放器所占用的空间比视频播放器要小，由于它没有视觉部件 — 你只需要显示出能控制音频播放的控件。

一些与 HTML5`<video>` 的差异如下：

`<audio>` 标签不支持 width/height 属性 — 因为其并没有视觉部件，也就没有可以设置 width/height 的内容。
同时也不支持 poster 属性 — 同样因为没有视觉部件。
除此之外，`<audio>` 标签支持所有 `<video>` 标签拥有的特性。

## <center>🔖 总结</center>

- ✔️ 理解 HTML Video 标签
- ✔️ 理解 HTML Audio 标签

## <center>🔖 参考资料</center>

- 视频和音频内容,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
- `<video>`标签,
  https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
- `<audio>`标签,
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio
