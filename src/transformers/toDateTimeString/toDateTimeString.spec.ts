import { describe, expect, it } from "vitest"
import { toDateTimeString } from "."

describe("toDateTimeString", () => {
  it.each([[new Date("2020-03-02"), "2020-03-02T00:00:00"]])(
    'transforms %s into "%s"',
    (value, expected) => {
      expect(toDateTimeString(value)).toEqual(expected)
    },
  )

  it("keeps null as null", () => expect(toDateTimeString(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toDateTimeString(undefined)).toEqual(undefined))
})
