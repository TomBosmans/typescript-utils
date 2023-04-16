import fs from "fs"
import generateMarkdown from "./generateMarkdown"
import walkDir from "./walkDir"

const srcDir = "src"
let readmeContent = ""
let currentCategory = ""

walkDir(srcDir, (filePath) => {
  const category = filePath.split("/")[1]
  if (currentCategory !== category) {
    currentCategory = category
    const formattedCategory = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)
    readmeContent += `## ${formattedCategory}\n`
  }
  readmeContent += generateMarkdown(filePath)
})

fs.writeFileSync("README.md", readmeContent)
