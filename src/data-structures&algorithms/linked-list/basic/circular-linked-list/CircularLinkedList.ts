import { LinkedList } from "../link-list/LinkedList";
import { Node } from "../model";

export class CircularLinkedList extends LinkedList {
  push(val: any): boolean {
    const node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
      node.next = node;
    } else {
      let currentNode = this.getHead();
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }
      currentNode!.next = node;
      node.next = this.head;
    }

    this.count++;
    return true;
  }

  /**
   * 任意位置插入元素
   * @param val
   * @param index
   */
  insert(val: any, index: number) {
    // FIXMe
    if (index < 0 || index >= this.getSize()) {
      return false;
    }

    const node = new Node(val);

    if (index === 0) {
      const size = this.getSize();
      if (size === 0) {
        this.head = node;
        node.next = node;
      } else {
        const tailNode = this.getNodeAt(this.getSize() - 1);
        tailNode!.next = node;
        node.next = this.getHead();
        this.head = node;
      }
      this.count++;
      return true;
    }

    const previousNode = this.getNodeAt(index - 1);
    node.next = previousNode?.next;
    previousNode!.next = node;
    return true;
  }

  removeNodeAt(index: number): any {
    // TODO
   }
}
