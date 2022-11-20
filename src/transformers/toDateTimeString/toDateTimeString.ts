import { isBlank, isDate } from "../../conditionals";

export function toDateTimeString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw Error("can't be cast to Date time string")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(0, 19)
}
