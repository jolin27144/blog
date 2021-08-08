import { Node } from "../model";

export class LinkedList {
  // 声明链表内需要的变量并定义其类型
  protected count: number;
  protected head: any;

  constructor() {
    // 初始化链表内部变量
    this.count = 0;
    this.head = undefined;
  }
  // 获取链表长度
  getSize(): number {
    return this.count;
  }

  // 获取链表头部元素
  getHead(): Node<any> | undefined {
    return this.head;
  }

  // 判断链表是否为空
  isEmpty(): boolean {
    return this.count === 0;
  }

  /**
   * 取指定索引节点
   * @param index
   */
  getNodeAt(index: number): undefined | Node<any> {
    if (index < 0 || index >= this.getSize()) {
      return undefined;
    }

    if (this.isEmpty()) {
      return undefined;
    }

    let currentNode = this.getHead();

    for (let i = 0; i < index && currentNode; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * 任意位置移除元素
   * @param index
   */
  removeNodeAt(index: number): Node<any> | undefined {
    if (index < 0 || index >= this.getSize()) {
      return undefined;
    }

    if (index === 0) {
      let currentNode = this.getHead();
      this.head = this.head.next;
      this.count--;
      return currentNode;
    }

    const previousNode = this.getNodeAt(index - 1);
    const currentNode = this.getNodeAt(index);
    previousNode!.next = currentNode?.next;
    this.count--;
    return currentNode;
  }

  /**
   * 返回指定元素的索引
   * @param val
   */
  indexOf(val: any): number {
    // 获取链表顶部元素
    let currentNode = this.head;
    // 遍历链表内的元素
    for (let i = 0; i < this.getSize() && currentNode != null; i++) {
      // 判断当前链表中的结点与目标结点是否相等
      if (val === currentNode.val) {
        // 返回索引
        return i;
      }
      // 当前结点指向下一个结点
      currentNode = currentNode.next;
    }
    // 目标元素不存在
    return -1;
  }

  // 尾部插入元素
  push(val: any) {
    const node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let currentNode = this.getHead();
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }
      currentNode!.next = node;
    }

    this.count++;
  }

  /**
   * 任意位置插入元素
   * @param val
   * @param index
   */
  insert(val: any, index: number) {
    if (index < 0 || index >= this.getSize()) {
      return false;
    }

    const node = new Node(val);

    if (index === 0) {
      node.next = this.getHead();
      this.head = node;
      this.count++;
      return true;
    }

    const previousNode = this.getNodeAt(index - 1);
    node.next = previousNode?.next;
    previousNode!.next = node;
    return true;
  }

  toString(): string {
    let arr = [];
    let current = this.getHead();

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr.join(",");
  }
}
