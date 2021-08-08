import { DoublyLinkedList } from "./DoublyLinkedList";

function createDoublyLinkedList() {
  const doublyLinkList = new DoublyLinkedList();
  doublyLinkList.push(1);
  doublyLinkList.push(2);
  doublyLinkList.push(3);
  return doublyLinkList;
}

test("create", () => {
  const doublyLinkList = createDoublyLinkedList();
  console.log(doublyLinkList.toString())
  expect(doublyLinkList.getSize()).toBe(3);
});

test("toString", () => {
  const doublyLinkList = createDoublyLinkedList();
  console.log(doublyLinkList.toString())
  // expect(doublyLinkList.toString()).toMatch("1,2,3");
  // expect(doublyLinkList.toString(true)).toMatch("3,2,1");
});
