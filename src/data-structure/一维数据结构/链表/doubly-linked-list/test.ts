import { DoublyLinkedList } from "./DoublyLinkedList";

function createDoublyLinkedList(): DoublyLinkedList {
  const doublyLinkList = new DoublyLinkedList();
  doublyLinkList.push(1);
  doublyLinkList.push(2);
  doublyLinkList.push(3);
  return doublyLinkList;
}

test("create", () => {
  const doublyLinkList: DoublyLinkedList = createDoublyLinkedList();
  expect(doublyLinkList.getSize()).toBe(3);
});

test("push", () => {
  const dll: DoublyLinkedList = createDoublyLinkedList();
  dll.push(1);
  expect(dll.getHead()!.val).toBe(1);
  expect(dll.getTail()!.val).toBe(1);
  dll.push(2);
  expect(dll.getHead()!.val).toBe(1);
  expect(dll.getTail()!.val).toBe(2);
  dll.push(3);
  expect(dll.getHead()!.val).toBe(1);
  expect(dll.getTail()!.val).toBe(3);
});

test("toString", () => {
  const doublyLinkList: DoublyLinkedList = createDoublyLinkedList();
  expect(doublyLinkList.toString()).toMatch("1,2,3");
  expect(doublyLinkList.toString(true)).toMatch("3,2,1");
});
