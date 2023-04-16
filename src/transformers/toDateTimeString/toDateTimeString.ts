import { isBlank, isDate } from "../../conditionals"

/**
 * Converts a Date object to a string in YYYY-MM-DDTHH:mm:ss format.
 * @param value The Date object to be converted.
 * @returns Returns a string in YYYY-MM-DDTHH:mm:ss format if the input value is a Date object, otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a Date object, null, or undefined.
 * @example
 * const myDate = new Date('2022-01-01T00:00:00.000Z');
 * toDateTimeString(myDate); // '2022-01-01T00:00:00'
 * toDateTimeString(null); // null
 * toDateTimeString(undefined); // undefined
 * toDateTimeString('2022-01-01'); // Error: can't be cast to Date time string
 */
export function toDateTimeString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw Error("can't be cast to Date time string")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(0, 19)
}
