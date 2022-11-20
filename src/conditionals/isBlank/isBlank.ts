import { isNull } from "../isNull"
import { isUndefined } from "../isUndefined"

export function isBlank<V>(value: V | null | undefined): value is null | undefined {
  if (isNull(value)) return true
  if (isUndefined(value)) return true

  return false
}
