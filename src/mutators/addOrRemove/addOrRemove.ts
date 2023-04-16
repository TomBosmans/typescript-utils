/**
 * Adds or removes the given value from an array, depending on whether it is already present or not.
 * @param value The value to be added or removed.
 * @param array The array to add or remove the value from.
 * @returns Returns a new array with the value added or removed, depending on whether it was already present or not.
 * @example
 * addOrRemove('hello', ['world']); // ['world', 'hello']
 * addOrRemove('world', ['world']); // []
 */
export const addOrRemove = <Value extends string | number>(
  value: Value,
  array: Value[],
): Value[] => {
  if (!array.includes(value)) return [...array, value]

  return array.filter((v) => v !== value)
}
