import { toTimeString } from "."

describe("toTimeString", () => {
  it.each([[new Date("2020-03-02"), "00:00:00"]])('transforms %s into "%s"', (value, expected) => {
    expect(toTimeString(value)).toEqual(expected)
  })

  it("keeps null as null", () => expect(toTimeString(null)).toEqual(null))
  it("keeps undefined as undefined", () => expect(toTimeString(undefined)).toEqual(undefined))
})
