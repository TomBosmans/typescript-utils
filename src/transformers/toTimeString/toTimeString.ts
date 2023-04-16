import { isBlank, isDate } from "../../conditionals"

/**
 * Converts a Date object to a string time in the format HH:mm:ss.
 * @param value The value to be converted to a time string.
 * @returns Returns a time string in the format HH:mm:ss if the input value is a Date object, otherwise returns null or undefined.
 * @throws Throws an error if the input value is not a Date object, null, or undefined.
 * @example
 *
 * toTimeString(new Date('2022-01-01T00:00:00.000Z')); // '00:00:00'
 * toTimeString(null); // null
 * toTimeString(undefined); // undefined
 * toTimeString('not a date'); // Error: can't be cast to time string
 */
export function toTimeString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw new Error("Can't be cast to time string")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(11, 19)
}
