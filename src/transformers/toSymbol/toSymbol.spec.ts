import { describe, expect, it } from "vitest"
import { toSymbol } from "./toSymbol"

describe("toString", () => {
  it.each([["string", "hello world", Symbol("hello world")]])(
    "transforms %s into string",
    (_, value, expected) => {
      expect(toSymbol(value).toString()).toEqual(expected.toString())
    },
  )

  it("keeps null as null", () => expect(toSymbol(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toSymbol(undefined)).toEqual(undefined))
})
