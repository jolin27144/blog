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

  getTail(): DoublyNode<any> | undefined {
    return this.tail;
  }

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

    return this;
  }

  toString(reverse?: boolean): string {
    if (reverse === undefined) {
      return super.toString();
    }

    const arr: any[] = [];
    let current = this.getTail();
    while (current) {
      arr.push(current.val);
      current = current.pre;
    }

    return arr.join(",");
  }
}
