import { isBlank, isBoolean, isDate, isNumber, isSymbol } from "../../conditionals"

export function toString<
  Value extends number | Date | boolean | Symbol | undefined | null
>(value: Value) {
  if (isBlank(value)) return value
  if (isDate(value)) return value.toISOString()
  if (isBoolean(value)) return value.toString()
  if (isSymbol(value)) return value.toString()
  if (isNumber(value)) return value.toString()

  throw Error("can't be cast to string")
}
