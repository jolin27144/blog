import { LinkedList } from "./LinkedList";

function createLinkedList() {
  const linkedList = new LinkedList();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  return linkedList;
}

// 尾部插入
test("push", () => {
  const linkedList = createLinkedList();
  expect(linkedList.getSize()).toBe(4);
});

test("toString", () => {
  const linkedList = createLinkedList();
  expect(linkedList.toString()).toMatch("1,2,3");
});

// 插入
test("insert", () => {
  const linkedList = createLinkedList();
  linkedList.insert(2, 1);
  expect(linkedList.toString()).toMatch("1,2,2,3");
});

// 取某个节点的索引
test("indexOf", () => {
  const linkedList = createLinkedList();
  expect(linkedList.indexOf(1)).toBe(0);
});

// 取对应索引的节点
test("getNodeAt", () => {
  const linkedList = createLinkedList();
  const node = linkedList.getNodeAt(0);
  expect(node?.val).toBe(1);
});

// 删除
test("removeNodeAt", () => {
  const linkedList = createLinkedList();
  const node = linkedList.removeNodeAt(0);
  expect(node?.val).toBe(1);
  const headNode = linkedList.getHead();
  expect(headNode?.val).toBe(2);
});
