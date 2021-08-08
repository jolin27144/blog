import { Node } from "../model";

export class DoublyNode<T> extends Node<T> {
  pre: DoublyNode<any> | undefined;
  next: DoublyNode<any> | undefined;

  constructor(val: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
    super(val);
    this.next = next;
    this.pre = prev;
  }
}
