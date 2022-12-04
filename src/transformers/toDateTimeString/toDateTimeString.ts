import { isBlank, isDate } from "../../conditionals"

/**
 * Casts the given Date to a string formatted yyyy-mm-ddThh:mm:ss
 * @remark
 * the type of the value will determine the type of the return,
 * if value can be null and/or undefined so will the return type.
 */
export function toDateTimeString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw Error("can't be cast to Date time string")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(0, 19)
}
