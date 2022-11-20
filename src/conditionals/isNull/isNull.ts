/**
 * Checks if given value is null
 * @remark
 * undefined is not null
*/
export function isNull(value: unknown): value is null {
  return value === null
}
