import { describe, test, expect } from "vitest";
import { findMax } from "./findMax";

describe("findMax function", () => {
  test("returns max number in array", () => {
    expect(findMax([1, 3, 5, 2])).toBe(5);
  });

  test("works with negative numbers", () => {
    expect(findMax([-10, -3, -20])).toBe(-3);
  });
});
