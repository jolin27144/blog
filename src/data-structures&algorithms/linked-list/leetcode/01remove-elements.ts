/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null;
  }

  let current: ListNode | null = head;

  while (current) {
    // 头节点的情况
    if (current.val === val) {
      head = current.next;
      current = head;
      continue;
    } else if (current.next && current.next.val === val) {
      current.next = current.next.next;
      continue;
    }
    current = current.next;
  }

  return head;
}

export { removeElements };
