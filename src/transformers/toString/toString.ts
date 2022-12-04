import { isBlank, isBoolean, isDate, isNumber, isSymbol } from "../../conditionals"

/**
 * Casts the given value to a string
 * @remark
 * the type of the value will determine the type of the return,
 * if value can be null and/or undefined so will the return type.
 */
export function toString<Value extends number | Date | boolean | symbol | undefined | null>(
  value: Value,
) {
  if (isBlank(value)) return value
  if (isDate(value)) return value.toISOString()
  if (isBoolean(value)) return value.toString()
  if (isSymbol(value)) return value.toString()
  if (isNumber(value)) return value.toString()

  throw Error("can't be cast to string")
}
