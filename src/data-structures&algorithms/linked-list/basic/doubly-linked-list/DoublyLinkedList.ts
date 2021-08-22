import { LinkedList } from "../link-list/LinkedList";
import { DoublyNode } from "./DoublyNode";

export class DoublyLinkedList extends LinkedList {
  protected tail: DoublyNode<any> | undefined;

  constructor() {
    super();
    this.tail = undefined;
  }

  // 获取链表头部元素
  getHead(): DoublyNode<any> | undefined {
    return this.head;
  }

  // 获取链表尾部元素
  getTail(): DoublyNode<any> | undefined {
    return this.tail;
  }

  // 清空
  clear() {
    super.clear();
    this.tail = undefined;
  }

  /**
   * 任意位置插入
   * @param val
   * @param index
   */
  insert(val: any, index: number): boolean {
    if (index < 0 || index > this.getSize()) {
      return false;
    }
    const node = new DoublyNode(val);
    if (index === 0) {
      let head = this.getHead();
      if (!head) {
        this.push(node);
      }
      head!.pre = node;
      node.next = head;
      this.head = node;
    } else if (index === this.getSize()) {
      this.push(node.val);
    } else {
      // 这里还可以优化判断一下index大于this.getSize()/2，则从尾部往前搜索。
      const previous = this.getNodeAt(index - 1) as DoublyNode<any>;
      node.next = previous.next;
      node.pre = previous;
      previous.next = node;
    }

    this.count++;
    return true;
  }

  /**
   * 移除链表任意位置元素(removeAt)
   * @param index
   */
  removeNodeAt(index: number): any {
    if (index < 0 || index >= this.getSize()) {
      return undefined;
    }

    let current: DoublyNode<any>;
    if (index === 0) {
      current = this.getHead() as DoublyNode<any>;
      if (this.getSize() === 1) {
        this.tail = undefined;
        this.head = undefined;
      } else {
        this.head = current.next;
        current.next!.pre = undefined;
      }
    } else if (index === this.getSize() - 1) {
      const tail = this.getTail() as DoublyNode<any>;
      this.tail = tail.pre;
      this.tail!.next = undefined;
      current = tail;
    } else {
      current = this.getNodeAt(index) as DoublyNode<any>;
      const previous = current.pre;
      const next = current.next;
      previous!.next = next;
      next!.pre = previous;
    }

    this.count--;
    return current!.val;
  }

  /**
   * 尾部追加
   * @param val
   */
  push(val: any) {
    const doublyNode = new DoublyNode(val);

    if (this.isEmpty()) {
      this.head = doublyNode;
      this.tail = doublyNode;
    } else {
      let currentNode = this.getTail();
      this.tail = doublyNode;
      currentNode!.next = doublyNode;
      doublyNode.pre = currentNode;
    }
    this.count++;

    return true;
  }

  inverseToString() {
    let current = this.tail;
    if (!current) {
      return "";
    }
    let arr = [];
    while (current != null) {
      arr.push(current.val);
      current = current.pre;
    }
    return arr.join(",");
  }
}
