/**
 *  Checks if given value is a symbol.
 */
export function isSymbol(value: unknown): value is Symbol {
  return typeof value === "symbol"
}
