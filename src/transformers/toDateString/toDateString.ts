import { isBlank, isDate } from "../../conditionals";

export function toDateString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw Error("can't be cast to String date")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(0, 10)
}
