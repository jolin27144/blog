# 实现一个函数，可以给 node 节点添加 className，第一个参数是 node 节点，第二个参数 className

```javascript
function addClassToNode(node, className) {
  // 检查是否传入了有效的节点和类名
  if (!node || !className) {
    console.error("Please provide valid node and className.");
    return;
  }

  // 使用classList.add()方法添加类名
  node.classList.add(className);
}

// 示例用法
const myNode = document.getElementById("myNode");
addClassToNode(myNode, "newClass");
```

# 介绍 node 节点的一些属性和方法

nodeType：节点类型，用于区分元素节点、文本节点、注释节点等。

1：元素节点
3：文本节点
8：注释节点
nodeName：节点名称，通常为大写的标签名（对于元素节点）或 #text（对于文本节点）。

nodeValue：节点的值，对于文本节点是文本内容，对于元素节点和注释节点为 null。

parentNode：父节点，返回节点的父节点。

childNodes：子节点列表，返回一个 NodeList 对象，包含节点的所有子节点。

firstChild 和 lastChild：返回节点的第一个和最后一个子节点。

previousSibling 和 nextSibling：返回节点的前一个和后一个兄弟节点。

attributes：属性列表，返回一个 NamedNodeMap 对象，包含节点的所有属性节点。

classList：返回一个 DOMTokenList 对象，包含节点的所有类名，用于操作节点的类。

常用的方法：
appendChild(node)：向节点的子节点列表的末尾添加一个新的子节点。

removeChild(node)：从节点的子节点列表中删除指定的子节点。

replaceChild(newNode, oldNode)：用新节点替换节点的一个子节点。

insertBefore(newNode, referenceNode)：在节点的子节点列表中的指定位置插入一个新的子节点。

cloneNode(deep)：复制节点，参数 deep 控制是否深度复制，即是否复制子节点。

hasChildNodes()：检查节点是否有子节点。

contains(node)：检查节点是否包含指定的子节点。

setAttribute(name, value) 和 getAttribute(name)：设置和获取节点的属性值。

addEventListener(type, listener) 和 removeEventListener(type, listener)：添加和移除事件监听器。

这些属性和方法可以让你方便地操作 DOM 树中的节点，进行节点的增删改查以及事件处理等操作。

# node 节点的增删改查方法

同上

# js 正则常用的标志，然后匹配前后的空格。

```javascript
const trimmedStr = str.replace(/^\s+|\s+$/g, '');
```

# 随机生成 15 到 20 的正整数

```javascript
// 生成15到20之间的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomInt(15, 20);
console.log(randomInt);

```
