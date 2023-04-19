const TIME_REGEX = /^([0-1][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$/

/**
 * Checks if the given string value is a valid time string in the format "HH:MM:SS" or "HH:MM".
 * @param value The string value to be checked.
 * @returns Returns `true` if the given value is a valid time string, `false` otherwise.
 * @example
 * isTimeString('23:59:59'); // true
 * isTimeString('24:00:00'); // false
 * isTimeString('12:34'); // true
 * isTimeString('12:34:56:78'); // false
 */
export function isTimeString(value: string) {
  return TIME_REGEX.test(value)
}
