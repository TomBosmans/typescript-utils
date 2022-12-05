/**
 * Checks if given value is not undefined.
 */
export function isDefined<V>(value: V | null | undefined): value is V | null {
  return value !== undefined
}
