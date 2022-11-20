import { isBlank, isDate } from "../../conditionals"

export function toTimeString<Value extends Date | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (!isDate(value)) throw Error("can't be cast to time string")

  const isoTimestamp = value.toISOString()
  return isoTimestamp.slice(11, 19)
}
