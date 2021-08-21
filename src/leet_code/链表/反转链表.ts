/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
 * 图示意
 *       head->node1->node2->null
 * null<-head<-node1<-node2
 *
 *  双指针思路：A跟B 交换一次，那么A，B就反转了。如果不保存C，跟C就断了。因此要先取到C。
 *  实际上是取三个节点，反转前两个节点。然后往后一位，重复。直到后一位是空
 */
function reverseList(head: ListNode | null): ListNode | null {
  // previousNode 指向空（假设是第一个节点）
  let previousNode = null;
  // currentNode  指向头（当作第二个节点）
  let currentNode = head;
  while (currentNode) {
    // temp指向 第三个节点
    const temp = currentNode.next;

    // 反转, 另第二个节点指向第一个节点
    currentNode.next = previousNode;

    // 后移一位
    previousNode = currentNode;
    currentNode = temp;
  }

  return previousNode;
}

function reverse(pre: ListNode | null, cur: ListNode | null) {
  if (!cur) {
    return pre;
  }

  const temp = cur.next;
  cur.next = pre;
  // pre = cur;
  // cur = temp;

  reverse(cur, temp);
}

function reverseList(head: ListNode | null): ListNode | null {
  return reverse(null, head);
}

/**
 * 递归解法
 * 参考:
 * https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/
 *
 * 核心：
 * 1、利用递归，找到尾节点。
 * 2、出栈，上层函数中，head参数为倒数第二个节点。此处就可以做反转的操作。
 * 3、同时该函数的终止条件为head.next === null，则返回的cur就是尾节点。利用递归栈带回到第一次调用。返回
 *
 */
// function reverseList(head: ListNode | null): ListNode | null {
//   //递归终止条件是当前为空，或者下一个节点为空
//   if (head == null || head.next == null) {
//     return head;
//   }
//   //这里的cur就是最后一个节点
//   let cur = reverseList(head.next);
//   //这里请配合动画演示理解
//   //如果链表是 1->2->3->4->5，那么此时的cur就是5
//   //而head是4，head的下一个是5，下下一个是空
//   //所以head.next.next 就是5->4
//   head.next.next = head;
//   //防止链表循环，需要将head.next设置为空
//   head.next = null;
//   //每层递归函数都返回cur，也就是最后一个节点
//   return cur;
// }
