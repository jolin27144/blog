声明： 整理自https://github.com/CavsZhouyou/Front-End-Interview-Notebook/blob/master/Css/Css.md

# CSS 优先级算法如何计算？

    ```
        CSS 的优先级是根据样式声明的特殊性值来判断的。

        选择器的特殊性值分为四个等级，如下：

        （1）标签内选择符 x,0,0,0
        （2）ID 选择符 0,x,0,0
        （3）class 选择符/属性选择符/伪类选择符 0,0,x,0
        （4）元素和伪元素选择符 0,0,0,x

        计算方法：

        （1）每个等级的初始值为 0
        （2）每个等级的叠加为选择器出现的次数相加
        （3）不可进位，比如 0,99,99,99
        （4）依次表示为：0,0,0,0
        （5）每个等级计数之间没关联
        （6）等级判断从左向右，如果某一位数值相同，则判断下一位数值
        （7）如果两个优先级相同，则最后出现的优先级高，!important 也适用
        （8）通配符选择器的特殊性值为：0,0,0,0
        （9）继承样式优先级最低，通配符样式优先级高于继承样式
        （10）!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为 1,0,0,0,0。

        计算实例：

        （1）#demo a{color: orange;}/_特殊性值：0,1,0,1_/
        （2）div#demo a{color: red;}/_特殊性值：0,1,0,2_/

        注意：
        （1）样式应用时，css 会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。

        （2）特殊性值越大的声明优先级越高。

        （3）相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）

        (4) 部分浏览器由于字节溢出问题出现的进位表现不做考虑
    ```

# 关于伪类 LVHA 的解释?

    ```
    a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；

    当链接未访问过时：

    （1）当鼠标滑过a链接时，满足:link和:hover两种状态，要改变a标签的颜色，就必须将:hover伪类在:link伪
    类后面声明；
    （2）当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），
    必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。

    当链接访问过时，情况基本同上，只不过需要将:link换成:visited。

    这个顺序能不能变？可以，但也只有:link和:visited可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，
    也就不存在覆盖的问题。

    ```

# 用纯 CSS 创建一个三角形的原理是什么？

    ```
        盒子模型中上下左右边框交界处出呈现平滑的斜线。将元素的宽高设为0，只设置border，把任意三条边隐藏掉（颜色设为transparent），剩下的就是一个三角形。

        #demo {
        width: 0;
        height: 0;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent red transparent;
        }
    ```

# margin 重叠问题的理解。

    ```
       块级元素的上外边距（margin-top）与下外边距（margin-bottom）有时会合并为单个外边距，这样的现象称为“margin合
       并”。

       产生折叠的必备条件：margin必须是邻接的!

       而根据w3c规范，两个margin是邻接的必须满足以下条件：

       •必须是处于常规文档流（非float和绝对定位）的块级盒子，并且处于同一个BFC当中。
       •没有线盒，没有空隙，没有padding和border将他们分隔开
       •都属于垂直方向上相邻的外边距，可以是下面任意一种情况
       •元素的margin-top与其第一个常规文档流的子元素的margin-top
       •元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
       •height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
       •高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top
       和margin-bottom


       margin合并的3种场景：

       （1）相邻兄弟元素margin合并。

       解决办法：
       •设置块状格式化上下文元素（BFC）

       （2）父级和第一个/最后一个子元素的margin合并。

       解决办法：

       对于margin-top合并，可以进行如下操作（满足一个条件即可）：
       •父元素设置为块状格式化上下文元素；
       •父元素设置border-top值；
       •父元素设置padding-top值；
       •父元素和第一个子元素之间添加内联元素进行分隔。

       对于margin-bottom合并，可以进行如下操作（满足一个条件即可）：
       •父元素设置为块状格式化上下文元素；
       •父元素设置border-bottom值；
       •父元素设置padding-bottom值；
       •父元素和最后一个子元素之间添加内联元素进行分隔；
       •父元素设置height、min-height或max-height。

       （3）空块级元素的margin合并。

       解决办法：
       •设置垂直方向的border；
       •设置垂直方向的padding；
       •里面添加内联元素（直接Space键空格是没用的）；
       •设置height或者min-height。
    ```

    margin 重叠指的是在垂直方向上，两个相邻元素的 margin 发生重叠的情况。

    一般来说可以分为四种情形：

    第一种是相邻兄弟元素的 marin-bottom 和 margin-top 的值发生重叠。这种情况下我们可以通过设置其中一个元素为 BFC
    来解决。

    第二种是父元素的 margin-top 和子元素的 margin-top 发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这
    一点来解决这个问题。我们可以为父元素设置 border-top、padding-top 值来分隔它们，当然我们也可以将父元素设置为 BFC
    来解决。

    第三种是高度为 auto 的父元素的 margin-bottom 和子元素的 margin-bottom 发生重叠。它们发生重叠一个是因为它们相
    邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置 border-bottom、padding-bottom 来分隔它们，也可以为
    父元素设置一个高度，max-height 和 min-height 也能解决这个问题。当然将父元素设置为 BFC 是最简单的方法。

    第四种情况，是没有内容的元素，自身的 margin-top 和 margin-bottom 发生的重叠。我们可以通过为其设置 border、pa
    dding 或者高度来解决这个问题。

# 对 BFC 规范（块级格式化上下文：block formatting context）的理解？

    ```
       块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒
       子的区域，也是浮动元素与其他元素的交互限定区域。

       通俗来讲

       •BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。
       •如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

       创建BFC

       （1）根元素或包含根元素的元素
       （2）浮动元素float＝left|right或inherit（≠none）
       （3）绝对定位元素position＝absolute或fixed
       （4）display＝inline-block|flex|inline-flex|table-cell或table-caption
       （5）overflow＝hidden|auto或scroll(≠visible)
    ```

# 请解释一下为什么需要清除浮动？清除浮动的方式

    ```
       浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，
       不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框
       的高度小于浮动框的时候，此时就会出现“高度塌陷”。

       清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。

       清除浮动的方式

       （1）使用clear属性清除浮动。

       （2）使用BFC块级格式化上下文来清除浮动。

       因为BFC元素不会影响外部元素的特点，所以BFC元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元
       素高度塌陷，必然会影响后面元素布局和定位，这显然有违BFC元素的子元素不会影响外部元素的设定。
    ```

# 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

    ```
       我的理解是把常用的css样式单独做成css文件……通用的和业务相关的分离出来，通用的做成样式模块儿共享，业务相关的，放
       进业务相关的库里面做成对应功能的模块儿。
    ```

# 怎么让 Chrome 支持小于 12px 的文字？

    ```
       在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。

       解决办法：

       （1）可以使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size
       -adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器
       已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。

       （2）还可以使用css3的transform缩放属性-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.
       75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/
       inline-block/...；

       （3）使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
    ```

# 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

    ```
       多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms＝16.7ms。
    ```

# 有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。

    ```
      利用flex布局设置主轴方向垂直，另一个div设置flex-grow:1
    ```

# CSS 多列等高如何实现？

    ```
      利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度的特性，来实现多列等高。
    ```

# 水平垂直居中

    ```
      Ⅰ. display:flex

      .outter {
      display: flex;
      align-items: center; /*垂直居中*/
      justify-content: center; /*水平居中*/
      }

      .inner {
      width: 100px;
      height: 100px;
      background-color: pink;
      }

      Ⅱ. 绝对定位&transform

      .inner{
         position: absolute; /*相对定位或绝对定位均可*/
         width: 500px;
         height: 300px;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         background-color: pink; /*方便看效果*/
      }

      Ⅲ. 绝对定位&margin (显然跟transform同理，但需知道宽高。因为transform中百分比相对自身，而marigin是相对父元素)

      .inner{
         position: absolute;/*绝对定位*/
         width: 500px;
         height: 300px;
         top: 50%;
         left: 50%;
         margin: -150px 0 0 -250px;/*外边距为自身宽高的一半*/
         background-color: pink;/*方便看效果*/
      }


      Ⅳ. vertical-align-行内元素

      .outer{
         width: 400px;
         height: 400px;
         background-color: aquamarine;
         text-align: center;
      }

      .outer:after{
         content: '';
         display: inline-block;
         height: 100%; /* 通过增加其他元素,是vertical-align生效。同理，通过设置父元素行高，确定行内高度亦可。*/
         vertical-align: middle;
      }

      .inner{
         height: 200px;
         width: 200px;
         background-color: blueviolet;
         display: inline-block;
         white-space: normal;
         vertical-align: middle;
      }

      Ⅴ. vertical-align-表格单元内容

      .outer{
         width: 400px;
         height: 400px;
         background-color: aquamarine;
         display: table-cell;
         vertical-align: middle;
         text-align: center; /* 水平居中其中的行内元素 */
      }

      .inner{
         height: 200px;
         width: 200px;
         background-color: blueviolet;
         display: inline-block;
      }

    ```

13. 如何实现单行／多行文本溢出的省略（...）？

    ```
      /*单行文本溢出*/
      p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      }

      /*多行文本溢出*/
      p {
      position: relative;
      line-height: 1.5em;
      /*高度为需要显示的行数*行高，比如这里我们显示两行，则为3*/
      height: 3em;
      overflow: hidden;
      }

      p:after {
      content: '...';
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #fff;
      }
    ```

# 实现一个宽高自适应的正方形

    ```
      /*1.第一种方式是利用vw来实现*/
      .square {
      width: 10%;
      height: 10vw;
      background: tomato;
      }

      /*2.第二种方式是利用元素的margin/padding百分比是相对父元素width的性质来实现*/
      .square {
      width: 20%;
      height: 0;
      padding-top: 20%;
      background: orange;
      }

      /*3.第三种方式是利用子元素的margin-top的值来实现的*/
      .square {
      width: 30%;
      overflow: hidden;
      background: yellow;
      }

      .square::after {
      content: '';
      display: block;
      margin-top: 100%;
      }
    ```

# 一个自适应矩形，水平垂直居中，且宽高比为 2:1

    ```
       /*实现原理参考自适应正方形和水平居中方式*/
       .box {
       position: absolute;
       top: 0;
       right: 0;
       left: 0;
       bottom: 0;
       margin: auto;

       width: 10%;
       height: 0;
       padding-top: 20%;
       background: tomato;
       }
    ```

# 你知道 CSS 中不同属性设置为百分比%时对应的计算基准？

    ```
       公式：当前元素某CSS属性值 = 基准 * 对应的百分比
       元素的 position 为 relative 和 absolute 时，top和bottom、left和right基准分别为包含块的 height、width
       元素的 position 为 fixed 时，top和bottom、left和right基准分别为初始包含块（也就是视口）的 height、width，移动设备较为复杂，基准为 Layout viewport 的 height、width
       元素的 height 和 width 设置为百分比时，基准分别为包含块的 height 和 width

       重点：元素的 margin 和 padding 设置为百分比时，基准为包含块的 width（易错）

       元素的 border-width，不支持百分比
       元素的 text-indent，基准为包含块的 width

       元素的 border-radius，基准为分别为自身的height、width
       元素的 background-size，基准为分别为自身的height、width
       元素的 translateX、translateY，基准为分别为自身的height、width


       重点：元素的 line-height，基准为自身的 font-size

       元素的 font-size，基准为父元素字体
    ```

# flex 1

https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex

```
flex 是以下三个值的简写
flex-grow
flex-shrink
flex-basis

/_ 单值，无单位数字：flex-grow
flex-basis 此时等于 0。 _/
flex: 2;

/_ 单值，宽度/高度：flex-basis _/
flex: 10em;
flex: 30px;
flex: min-content;

/_ 双值：flex-grow | flex-basis _/
flex: 1 30px;

/_ 双值：flex-grow | flex-shrink _/
flex: 2 2;

/_ 三值：flex-grow | flex-shrink | flex-basis _/
flex: 2 2 10%;

```
