1.  创建、添加、移除、移动、替换、复制、查找节点？

    - 创建
      ```
        Document.createDocumentFragment(Node);
        Document.createElement(Node);
        Document.createTextNode(text);
      ```
    - 添加

      ```
        ParentNode.append(Node||DOMString)// 最后一个后代后面添加
        ParentNode.prepend(Node||DOMString) // 第一个后代前添加
        Node.insertBefore(newNode,referenceNode||null) // referenceNode前插入，null就在最后插入
      ```

    - 移除

      ```
         Node.removeChild(Node)
      ```

    - 替换

      ```
         Node.replaceChild(new,old)
      ```

    - 复制

      ```
         Node.cloneNode()
      ```

    - 移动

      ```
        target = ParentNode.querySelector("target")
        clonetarget = target.cloneNode(true)
        removeChild = ParentNode.querySelector("referenceNode")
        ParentNode.removeChild(target)
        ParentNode.insertBefore(clonetarget,referenceNode)
      ```

    - 查找

      ```

       Document.getElementById();
       Document.getElementsByName();
       Document.getElementsByTagName();
       Document.getElementsByClassName();
       ParentNode.querySelector();
       ParentNode.querySelectorAll();

      ```

2.  css 类操作

    - 查看类

      ```
        Element.className

        Element.classList.forEach(value=>console.log(value))
      ```

    - 添加类

      ```
        Element.add(token1[, token2[, ...tokenN]])
      ```

    - 删除类

      ```
        Element.remove(token1[, token2[, ...tokenN]])
      ```

    - 替换类

      ```
        Element.replace(oldToken, newToken)
      ```

    - 切换类

      ```
      Element.toggle(token [, force])
      ```

3.  innerHTML 与 outerHTML 的区别？

    ```
        对于这样一个 HTML 元素：<div>content<br/></div>。

        innerHTML：内部 HTML，content<br/>；
        outerHTML：外部 HTML，<div>content<br/></div>；
        innerText：内部文本，content ；
        outerText：内部文本，content ；
    ```

4.  innerText 与 outerText

    ```
        innerText：内部文本，content ；
        outerText：内部文本，content ；
    ```
5. 
