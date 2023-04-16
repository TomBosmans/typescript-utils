import { isBlank, isDate } from "../../conditionals"

/**
 * Converts a Date object to a string in YYYY-MM-DD format.
 * @param value The Date object to be converted.
 * @returns Returns a string in YYYY-MM-DD format if the input value is a Date object, otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a Date object, null, or undefined.
 * @example
 *
 * const myDate = new Date('2022-01-01T00:00:00.000Z');
 * toDateString(myDate); // '2022-01-01'
 * toDateString(null); // null
 * toDateString(undefined); // undefined
 * toDateString('2022-01-01'); // Error: can't be cast to String date
 */
export function toDateString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw Error("can't be cast to String date")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(0, 10)
}
