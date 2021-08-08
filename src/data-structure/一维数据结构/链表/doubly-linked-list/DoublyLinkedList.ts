import { LinkedList } from "../link-list/LinkedList";
import { DoublyNode } from "./DoublyNode";

export class DoublyLinkedList extends LinkedList {
  protected previous: DoublyNode<any> | undefined;

  constructor() {
    super();
    this.previous = undefined;
  }

  // 获取链表头部元素
  getHead(): DoublyNode<any> | undefined {
    return this.head;
  }

  push(val: any) {
    const doublyNode = new DoublyNode(val);

    if (this.isEmpty()) {
      this.head = doublyNode;
    } else {
      let currentNode = this.getHead();
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }
      currentNode!.next = doublyNode;
      doublyNode.pre = currentNode;
    }

    this.count++;
  }

  // toString(reverse?: boolean): string {
  //   if (reverse === undefined) {
  //     return super.toString();
  //   }
  //
  //   const arr = [];
  //   let current = this.getHead();
  //   while (current?.next) {
  //     current = current.next;
  //   }
  //
  //   while (current?.pre) {
  //     arr.push(current.val);
  //     current = current.pre;
  //   }
  //
  //   return arr.join(",");
  // }
}
