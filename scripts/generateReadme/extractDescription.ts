import fs from "fs"

export default function extractDescription(filePath: string): string {
  const content = fs.readFileSync(filePath, "utf8")
  const match = content.match(/\/\*\*([\s\S]*?)\*\//)

  if (match && match[1]) {
    return match[1]
      .split("\n")
      .map((line) => line.trim().replace(/^\*/, "").trim())
      .join("\n")
      .trim()
  }

  return ""
}
