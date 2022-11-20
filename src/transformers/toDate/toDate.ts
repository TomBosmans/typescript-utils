import { isBlank, isString } from "../../conditionals"

export function toDate<Value extends string | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (isString(value)) return new Date(value)
  throw Error("can't be cast to Date")
}
