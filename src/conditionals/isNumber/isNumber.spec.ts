import { describe, expect, it } from "vitest"
import { SpecTable } from "../types"
import { isNumber } from "./isNumber"

describe("isNumber", () => {
  it.each<SpecTable>([
    [false, "array", [1, 2, 3]],
    [false, "boolean false", false],
    [false, "boolean true", true],
    [false, "date", new Date()],
    [false, "empty array", []],
    [false, "empty object", {}],
    [false, "empty string", ""],
    [false, "empty symbol", Symbol()],
    [true, "negative number", -10],
    [false, "null", null],
    [true, "number 0", 0],
    [false, "object", { hello: "world" }],
    [true, "positive number", 10],
    [false, "string", "hello world"],
    [false, "symbol", Symbol("hello world")],
    [false, "undefined", undefined],
  ])("returns %s when value is %s", (expected, _, value) => {
    expect(isNumber(value)).toBe(expected)
  })
})
