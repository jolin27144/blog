export class Node<T> {
  val: T;
  next: Node<any> | undefined;

  constructor(val: T, next?: Node<T>) {
    this.val = val;
    this.next = next;
  }
}
