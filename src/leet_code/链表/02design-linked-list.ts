// 节点类
class LinkedNode {
  val: number;
  next: LinkedNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

// 链表
class MyLinkedList {
  // 链表长度
  private size: number;
  private head: LinkedNode | null;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  protected validateIndex(index: number): boolean {
    return index >= 0 && index <= this.size - 1;
  }

  // 此方法，方便插入、删除节点
  getNodeAtIndex(index: number): LinkedNode | null {
    if (!this.validateIndex(index)) {
      return null;
    }

    let i = 0;
    let current = this.head as LinkedNode;
    while (i !== index) {
      current = current.next as LinkedNode;
      i++;
    }
    return current;
  }

  get(index: number): number {
    const node = this.getNodeAtIndex(index);
    if (node instanceof LinkedNode) {
      return node.val;
    }
    return -1;
  }

  addAtHead(val: number): void {
    const myLinkNode: LinkedNode = new LinkedNode(val);
    const head = this.head;
    // 空链表
    if (!head) {
      this.head = myLinkNode;
    } else {
      // 非空
      myLinkNode.next = head;
      this.head = myLinkNode;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const myLinkNode: LinkedNode = new LinkedNode(val);
    const head = this.head;

    // 空链表
    if (!head) {
      this.head = myLinkNode;
    } else {
      // 非空
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = myLinkNode;
    }

    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      // 如果index小于等于0，则在头部插入节点。
      this.addAtHead(val);
      return;
    } else if (index === this.size) {
      // 如果 index 等于链表的长度，则该节点将附加到链表的末尾
      return this.addAtTail(val);
    } else if (index > this.size) {
      // 如果 index 大于链表长度，则不会插入节点
      return;
    }

    const myLinkNode: LinkedNode = new LinkedNode(val);
    // index 是有效的, 因此一定能返回节点
    const pre = this.getNodeAtIndex(index - 1) as LinkedNode;
    myLinkNode.next = pre.next;
    pre!.next = myLinkNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    // 0开始。无效索引返回
    if (!this.validateIndex(index)) {
      return;
    }
    if (index === 0) {
      // 删除头节点
      this.head = this.head!.next;
    } else if (index === this.size - 1) {
      // 删除尾节点, 处理倒数第二个节点
      const pre = this.getNodeAtIndex(index - 1);
      pre!.next = null;
    } else {
      // 其他情况,一定会有pre.next.next；例如删除倒数第二个节点，取倒数第三个节点，则有pre.next.next
      const pre = this.getNodeAtIndex(index - 1);
      pre!.next = pre!.next!.next;
    }
    this.size--;
  }
}
