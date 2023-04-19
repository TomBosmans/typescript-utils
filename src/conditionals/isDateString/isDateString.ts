const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const MONTH_LENGTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/**
 * Checks if the given string value is a valid date string in the format "YYYY-MM-DD".
 * @param value The string value to be checked.
 * @returns Returns `true` if the given value is a valid date string, `false` otherwise.
 * @example
 * isDateString('2022-04-16'); // true
 * isDateString('2022/04/16'); // false
 */
export function isDateString(value: string) {
  if (!DATE_REGEX.test(value)) return false

  const dateParts = value.split("-")
  const year = parseInt(dateParts[0], 10)
  const month = parseInt(dateParts[1], 10)
  const day = parseInt(dateParts[2], 10)

  if (month < 1 || month > 12) return false

  const monthLengths = [...MONTH_LENGTHS]

  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLengths[1] = 29
  }

  return day > 0 && day <= monthLengths[month - 1]
}
