import { isNull } from "../isNull"
import { isUndefined } from "../isUndefined"

export function isPresent<V>(value: V | null | undefined): value is V {
  if (isNull(value)) return false
  if (isUndefined(value)) return false

  return true
}
