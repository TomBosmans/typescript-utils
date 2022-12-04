export type ToSpec =
  | "array"
  | "boolean false"
  | "boolean true"
  | "date"
  | "empty array"
  | "empty object"
  | "empty string"
  | "empty symbol"
  | "negative number"
  | "null"
  | "number 0"
  | "object"
  | "positive number"
  | "string"
  | "symbol"
  | "undefined"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SpecTable = [boolean, ToSpec, any]
