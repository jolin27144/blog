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

test("inverseToString", () => {
  const doublyLinkList: DoublyLinkedList = createDoublyLinkedList();
  expect(doublyLinkList.inverseToString()).toMatch("3,2,1");
});

test("insert", () => {
  const doublyLinkList: DoublyLinkedList = createDoublyLinkedList();
  expect(doublyLinkList.insert(4, 1)).toBeTruthy();
  expect(doublyLinkList.toString()).toMatch("1,4,2,3");
  expect(doublyLinkList.insert(0, 0)).toBeTruthy();
  expect(doublyLinkList.toString()).toMatch("0,1,4,2,3");
  expect(doublyLinkList.insert(5, doublyLinkList.getSize())).toBeTruthy();
  expect(doublyLinkList.toString()).toMatch("1,4,2,3,5");
});

test("removeNodeAt", () => {
  const doublyLinkList: DoublyLinkedList = createDoublyLinkedList();
  doublyLinkList.push(4);
  expect(doublyLinkList.removeNodeAt(0)).toBe(1);
  expect(doublyLinkList.toString()).toMatch("2,3,4");
  expect(doublyLinkList.removeNodeAt(1)).toBe(3);
  expect(doublyLinkList.toString()).toMatch("2,4");
  expect(doublyLinkList.removeNodeAt(1)).toBe(4);
  expect(doublyLinkList.toString()).toMatch("2");
});
