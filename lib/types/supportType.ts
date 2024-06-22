type SupportType = {
    id: string,
    fullName: string,
    email: string,
    issueType: IssueType,
    tags: TagsType[],
    stepsToReporduce: []
}

enum IssueType {
    BUG = "Bug Report",
    FEATURE = "Feature Request",
    GENERAL = "General Inquiry"
}

enum TagsType {
    UI = "UI",
    BACKEND = "Backend",
    PERFORMANCE = "Performance"
}