import extractDescription from "./extractDescription"
import extractSpecifications from "./extractSpecifications"

export default function generateMarkdown(filePath: string): string {
  const header = filePath
    .replace(/^src\//, "")
    .replace(/\.ts$/, "")
    .split("/")
    .pop() as string
  const { description, example } = extractDescription(filePath)
  const specifications = extractSpecifications(filePath)

  return `
### ${header}
${description}

#### Specifications
${specifications}

#### Examples
\`\`\`typescript
${example}
\`\`\`
`
}
