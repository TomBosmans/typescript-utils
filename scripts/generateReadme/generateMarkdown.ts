import extractDescription from "./extractDescription"
import extractSpecifications from "./extractSpecifications"

export default function generateMarkdown(filePath: string): string {
  const header = filePath
    .replace(/^src\//, "")
    .replace(/\.ts$/, "")
    .split("/")
    .pop() as string
  const specifications = extractSpecifications(filePath)
  const description = extractDescription(filePath)

  return `
### ${header}

#### Description
${description}

#### Specifications
${specifications}
`
}
