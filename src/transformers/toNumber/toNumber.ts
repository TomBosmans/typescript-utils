import { isBlank, isBoolean, isDate, isString } from "../../conditionals"

export function toNumber<
  Value extends string | Date | boolean | null | undefined
>(value: Value) {
  if (isBlank(value)) return value
  if (isString(value)) return Number(value)
  if (isDate(value)) return Number(value)
  if (isBoolean(value)) return Number(value)
  throw Error("can't be cast to number")
}
