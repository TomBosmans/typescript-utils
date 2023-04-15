import { describe, expect, it } from "vitest"
import { SpecTable } from "../types"
import { isArray } from "./isArray"

describe("isArray", () => {
  it.each<SpecTable>([
    [true, "array", [1, 2, 3]],
    [false, "boolean false", false],
    [false, "boolean true", true],
    [false, "date", new Date()],
    [true, "empty array", []],
    [false, "empty object", {}],
    [false, "empty string", ""],
    [false, "empty symbol", Symbol()],
    [false, "negative number", -10],
    [false, "null", null],
    [false, "number 0", 0],
    [false, "object", { hello: "world" }],
    [false, "positive number", 10],
    [false, "string", "hello world"],
    [false, "symbol", Symbol("hello world")],
    [false, "undefined", undefined],
  ])("returns %s when value is %s", (expected, _, value) => {
    expect(isArray(value)).toBe(expected)
  })
})
