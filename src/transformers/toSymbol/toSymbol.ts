import { isBlank, isString } from "../../conditionals"

/**
 * Casts the given value to a symbol
 * @remark
 * the type of the value will determine the type of the return,
 * if value can be null and/or undefined so will the return type.
 */
export function toSymbol<Value extends string | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (isString(value)) return Symbol(value)
  throw Error("can't be cast to Symbol")
}
