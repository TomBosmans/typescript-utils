import fs from "fs"
import { execSync } from "child_process"
import { TestReport } from "./types"

export default function extractSpecifications(filePath: string): string | null {
  const specFilePath = filePath.replace(".ts", ".spec.ts")

  if (fs.existsSync(specFilePath)) {
    try {
      const testReport = JSON.parse(
        execSync(`npx vitest run --reporter=json ${specFilePath}`).toString(),
      ) as TestReport
      return testReport.testResults
        .map((testResult) => {
          return testResult.assertionResults.map((result) => `- ${result.title}`).join("\n")
        })
        .join("\n")
    } catch (error) {
      console.error("Error executing vitest:", (error as Error).message)
      return null
    }
  }

  return null
}
