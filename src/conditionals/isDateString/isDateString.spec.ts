import { describe, expect, it } from "vitest"
import { isDateString } from "./isDateString"

const buildSpecsForMonth = (
  year: string,
  month: string,
  numberOfDays: number,
): Array<[boolean, string]> => {
  const days = Array.from(new Array(numberOfDays), (_, index) => index + 1)
  const validSpecs: Array<[boolean, string]> = days.map((day) => [
    true,
    `${year}-${month}-${day.toString().padStart(2, "0")}`,
  ])

  return [
    [false, `${year}-${month}-00`],
    ...validSpecs,
    [false, `${year}-${month}-${(numberOfDays + 1).toString().padStart(2, "0")}`],
  ]
}

const buildSpecsFor = (year: string, leapYear = false): Array<[boolean, string]> => [
  [false, `${year}-00-01`],
  ...buildSpecsForMonth(year, "01", 31),
  ...buildSpecsForMonth(year, "02", leapYear ? 29 : 28),
  ...buildSpecsForMonth(year, "03", 31),
  ...buildSpecsForMonth(year, "04", 30),
  ...buildSpecsForMonth(year, "05", 31),
  ...buildSpecsForMonth(year, "06", 30),
  ...buildSpecsForMonth(year, "07", 31),
  ...buildSpecsForMonth(year, "08", 31),
  ...buildSpecsForMonth(year, "09", 30),
  ...buildSpecsForMonth(year, "10", 31),
  ...buildSpecsForMonth(year, "11", 30),
  ...buildSpecsForMonth(year, "12", 31),
  [false, `${year}-13-01`],
]

describe("isDateString", () => {
  it.each([
    ...buildSpecsFor("2020", true),
    ...buildSpecsFor("2021"),
    ...buildSpecsFor("2022"),
    ...buildSpecsFor("2023"),
    ...buildSpecsFor("2024", true),
    ...buildSpecsFor("2025"),
    ...buildSpecsFor("2026"),
    ...buildSpecsFor("2027"),
    ...buildSpecsFor("2028", true),
    ...buildSpecsFor("2029"),
  ])("returns %s when value is %s", (expected, value) => {
    expect(isDateString(value)).toBe(expected)
  })
})
