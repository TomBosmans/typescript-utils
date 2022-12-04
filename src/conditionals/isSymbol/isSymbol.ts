/**
 *  Checks if given value is a symbol.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol"
}
