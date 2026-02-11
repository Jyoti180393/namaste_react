import { sum } from "../sum";

test("should return correct sum of two numbers", () => {
  const result = sum(3, 7);
  expect(result).toBe(10);
});
