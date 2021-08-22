import { removeElements } from "./01remove-elements";

describe("01removeElements", () => {
  test("1", () => {
    const head = [1, 2, 6, 3, 4, 5, 6],
      val = 6,
      res = [1, 2, 3, 4, 5];
    expect(removeElements(head, val)).toEqual(res);
  });
});
