import fs from "fs"
import path from "path"

export default function walkDir(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)

    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, callback)
    } else if (
      path.extname(filePath) === ".ts" &&
      !file.endsWith(".spec.ts") &&
      file !== "index.ts" &&
      file !== "types.ts"
    ) {
      callback(filePath)
    }
  })
}
