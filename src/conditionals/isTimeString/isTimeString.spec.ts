import { describe, expect, it } from "vitest"
import { isTimeString } from "./isTimeString"

const buildValidSpecs = (): Array<[boolean, string]> => {
  const hoursArray = Array.from(new Array(24), (_, index) => index)
  const minutesArray = Array.from(new Array(60), (_, index) => index)
  const secondsArray = Array.from(new Array(60), (_, index) => index)
  const specs: Array<[boolean, string]> = []

  for (const hoursNumber of hoursArray) {
    const hours = hoursNumber.toString().padStart(2, "0")

    for (const minutesNumber of minutesArray) {
      const minutes = minutesNumber.toString().padStart(2, "0")
      specs.push([true, `${hours}:${minutes}`])

      for (const secondsNumber of secondsArray) {
        const seconds = secondsNumber.toString().padStart(2, "0")
        specs.push([true, `${hours}:${minutes}:${seconds}`])
      }
    }
  }

  return specs
}

describe("isTimeString", () => {
  it.each([
    [false, "hello world"],
    [false, "ab:cd:de"],
    [false, "00"],
    [false, "0:00:00"],
    [false, "0:0:0"],
    [false, "00:00:00:00"],
    ...buildValidSpecs(),
    [false, "23:60"],
    [false, "23:59:60"],
    [false, "24:00"],
    [false, "24:00:00"],
  ])("returns %s when value is %s", (expected, value) => {
    expect(isTimeString(value)).toBe(expected)
  })
})
