import { describe, test, expect } from "vitest";
import { reverseString } from "./reverseString";

describe("reverseString function", () => {
  test("reverses 'hello' to 'olleh'", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses empty string", () => {
    expect(reverseString("")).toBe("");
  });
});
