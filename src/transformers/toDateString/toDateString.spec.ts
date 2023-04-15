import { describe, expect, it } from "vitest"
import { toDateString } from "."

describe("toDateString", () => {
  it.each([
    [new Date("2020-03-02"), "2020-03-02"],
    [new Date("2022-01-01T23:00:00"), "2022-01-01"],
  ])('transforms %s into "%s"', (value, expected) => {
    expect(toDateString(value)).toEqual(expected)
  })

  it("keeps null as null", () => expect(toDateString(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toDateString(undefined)).toEqual(undefined))
})
