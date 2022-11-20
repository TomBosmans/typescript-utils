export function isSymbol(value: unknown): value is Symbol {
  return typeof value === "symbol"
}
