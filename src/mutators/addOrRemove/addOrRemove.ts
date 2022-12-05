/**
 * When array does not contain value, it will be added.
 * When array does contain value, it will be removed.
 * @remark
 * Value can only be type string or number.
 * @todo
 * Extend to work with more types.
 */
export const addOrRemove = <Value extends string | number>(
  value: Value,
  array: Value[],
): Value[] => {
  if (!array.includes(value)) return [...array, value]

  return array.filter((v) => v !== value)
}
