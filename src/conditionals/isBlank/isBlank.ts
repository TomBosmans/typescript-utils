import { isNull } from "../isNull"
import { isUndefined } from "../isUndefined"

/**
 * Checks if given value is blank.
 * @remark
 * value is blank when it is null or undefined. Empty strings, arrays or objects are not blank.
*/
export function isBlank<V>(value: V | null | undefined): value is null | undefined {
  if (isNull(value)) return true
  if (isUndefined(value)) return true

  return false
}
