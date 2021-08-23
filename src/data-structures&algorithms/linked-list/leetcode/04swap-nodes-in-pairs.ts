class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 *   cur->1->2->3->4->5
 *
 *   step1: cur.next => 2
 *   step2: 2.next   => 1
 *   step3：1.next   => 3
 *
 *   一组交换完，cur向后移动两位
 *
 */
function swapPairs(head: ListNode | null): ListNode | null {
  // 构造虚拟头节点
  const dummyNode: ListNode = new ListNode(0, head);
  let cur = dummyNode;

  // 目的是将后两个节点交换,所以终止条件为后两个节点其中之一为空.
  while (cur.next !== null && cur.next.next !== null) {
    const temp1 = cur.next;
    const temp2 = cur.next.next;
    const temp3 = cur.next.next.next;

    cur.next = temp2;
    cur.next.next = temp1;
    cur.next.next.next = temp3;

    cur = cur.next.next;
  }

  return dummyNode.next;
}
