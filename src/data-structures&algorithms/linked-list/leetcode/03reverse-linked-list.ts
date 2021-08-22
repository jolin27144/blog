/**
 * Definition for singly-linked list.
 */
// @ts-ignore
class LinkedNode {
  val: number;
  next: LinkedNode | null;
  constructor(val?: number, next?: LinkedNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
 * 1、双指针解法(我个人理解这实际上是3个指针)
 * 图示意
 *       head->node1->node2->null
 * null<-head<-node1<-node2
 *
 *  双指针(我个人理解这实际上是3个指针)思路：A跟B 交换一次，那么A，B就反转了。如果不保存C，跟C就断了。因此要先取到C。
 *  因此这实际上是取三个节点指针，反转前两个节点。然后往后一位，重复。直到后一位是空
 */
// function reverseList(head: LinkedNode | null): LinkedNode | null {
//   // previousNode 指向空（假设是第一个节点）
//   let previousNode = null;
//   // currentNode  指向头（当作第二个节点）
//   let currentNode = head;
//   while (currentNode) {
//     // temp指向 第三个节点
//     const temp = currentNode.next;
//
//     // 反转, 令第二个节点指向第一个节点
//     currentNode.next = previousNode;
//
//     // 后移一位
//     previousNode = currentNode;
//     currentNode = temp;
//   }
//
//   return previousNode;
// }

/**
 * 2、递归解法
 * 跟循环原理一样。只是把循环改成递归。看注释
 */
function reverse(
  pre: LinkedNode | null,
  cur: LinkedNode | null
): LinkedNode | null {
  // 结束条件，cur指向null了，返回pre
  if (!(cur instanceof LinkedNode)) {
    return pre;
  }
  // const temp = cur.next;
  cur.next = pre;

  // 递归就是在做这个事件
  // pre = cur;
  // cur = temp;
  return reverse(cur, cur.next);
}

function reverseList(head: LinkedNode | null): LinkedNode | null {
  // 双指针开始调用
  return reverse(null, head);
}
