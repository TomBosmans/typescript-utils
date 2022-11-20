import { isBlank, isString } from "../../conditionals"

export function toSymbol<Value extends string | null | undefined>(value: Value) {
  if (isBlank(value)) return value
  if (isString(value)) return Symbol(value)
  throw Error("can't be cast to Symbol")
}
