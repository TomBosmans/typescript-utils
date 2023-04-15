import { describe, expect, it } from "vitest"
import { addOrRemove } from "./addOrRemove"

describe("addOrRemove", () => {
  describe("when value is typeof number", () => {
    it("add the value to the array when not included", () => {
      const array = [1, 2, 3]
      const value = 4
      const result = addOrRemove(value, array)
      expect(result).toEqual([1, 2, 3, 4])
    })

    it("removes the value to the array when not included", () => {
      const array = [1, 2, 3]
      const value = 2
      const result = addOrRemove(value, array)
      expect(result).toEqual([1, 3])
    })
  })

  describe("when value is typeof string", () => {
    it("add the value to the array when not included", () => {
      const array = ["1", "2", "3"]
      const value = "4"
      const result = addOrRemove(value, array)
      expect(result).toEqual(["1", "2", "3", "4"])
    })

    it("removes the value to the array when not included", () => {
      const array = ["1", "2", "3"]
      const value = "2"
      const result = addOrRemove(value, array)
      expect(result).toEqual(["1", "3"])
    })
  })
})
