import { describe, test, expect } from "vitest";
import { isPalindrome } from "./isPalindrome";

describe("isPalindrome function", () => {
  test("returns true for 'madam'", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  test("returns false for 'hello'", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});
