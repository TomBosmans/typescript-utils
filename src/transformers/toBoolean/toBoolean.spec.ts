import { describe, expect, it } from "vitest"
import { toBoolean } from "./toBoolean"

describe("toBoolean", () => {
  it.each([
    ["boolean false", false, false],
    ["boolean true", true, true],
    ["string", "random", false],
    ["string", "true", true],
    ["string", "True", true],
    ["string", "TRUE", true],
    ["string", "tRue", true],
    ["string", "false", false],
    ["number", 0, false],
    ["number", 1, true],
    ["number", 69, false],
    ["date", new Date(), false],
    ["object", { hello: true }, false],
  ])("transforms %s into string", (_, value, expected) => {
    expect(toBoolean(value)).toEqual(expected)
  })

  it("keeps null as null", () => expect(toBoolean(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toBoolean(undefined)).toEqual(undefined))
})
