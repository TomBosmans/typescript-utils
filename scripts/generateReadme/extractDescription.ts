import fs from "fs"

function buildObject(comment: string) {
  const regex =
    /([\s\S]*?)@param\s*(\S*)\s*(.*?)\n*(@returns\s*(.*?)\n)?(@throws\s*(.*?)\n)?@example([\s\S]*?)$/
  const match = regex.exec(comment)
  if (!match) return {}

  return {
    description: match[1].trim(),
    paramName: match[2].trim(),
    paramDescription: match[3].trim(),
    returnsDescription: match[5]?.trim() || "",
    throwsDescription: match[7]?.trim() || "",
    example: match[8].trim(),
  }
}

export default function extractDescription(filePath: string) {
  const content = fs.readFileSync(filePath, "utf8")
  const match = content.match(/\/\*\*([\s\S]*?)\*\//)

  if (match && match[1]) {
    const comment = match[1]
      .split("\n")
      .map((line) => line.trim().replace(/^\*/, "").trim())
      .join("\n")
      .trim()

    return buildObject(comment)
  }

  return {}
}
