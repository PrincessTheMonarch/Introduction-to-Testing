import { describe, test, expect } from "vitest";
import { multiply } from "./multiply";

describe("multiply function", () => {
  test("multiplies 2 * 3 to equal 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("multiplies 0 * 5 to equal 0", () => {
    expect(multiply(0, 5)).toBe(0);
  });
});
