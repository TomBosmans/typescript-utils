import { isNull } from "../isNull"
import { isUndefined } from "../isUndefined"

/**
 * Checks if given value is present.
 * @remark
 * A value is always present when it is not null or undefined.
*/
export function isPresent<V>(value: V | null | undefined): value is V {
  if (isNull(value)) return false
  if (isUndefined(value)) return false

  return true
}
