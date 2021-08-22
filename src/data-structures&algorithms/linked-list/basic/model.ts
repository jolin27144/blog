/**
 * 单向节点类
 */
export class Node<T> {
  // 值
  val: T;
  // 后继节点
  next: Node<any> | undefined;

  constructor(val: T, next?: Node<T>) {
    this.val = val;
    this.next = next;
  }
}
