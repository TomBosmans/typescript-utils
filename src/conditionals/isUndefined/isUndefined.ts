/**
 *  Checks if given value is undefined.
 *  @remark
 *  null is not considered to be undefined
*/
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}
