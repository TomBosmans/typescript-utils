type TestResult = {
  assertionResults: Array<{
    ancestorTitles: string[]
    fullName: string
    status: string
    title: string
    duration: number
    failureMessages: string[]
  }>
  startTime: number
  endTime: number
  status: string
  message: string
  name: string
}

export type TestReport = {
  numTotalTestSuites: number
  numPassedTestSuites: number
  numFailedTestSuites: number
  numPendingTestSuites: number
  numTotalTests: number
  numPassedTests: number
  numFailedTests: number
  numPendingTests: number
  numTodoTests: number
  startTime: number
  success: boolean
  testResults: TestResult[]
}
