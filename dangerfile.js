import { execSync } from "child_process";
import { danger, markdown, schedule } from "danger";

const dangerTestResults = {
    IS_PR_INCLUDE_ISSUE_NUMBER: {
        status: false,
        successMessage: "PR 제목에 #이슈넘버가 포함되어 있습니다.",
        failureMessage: "PR 제목에 #이슈넘버를 포함해주세요.",
    },
    IS_REVIEWER_ASSIGNED: {
        status: false,
        successMessage: "PR에 Reviewer가 지정되어 있습니다.",
        failureMessage: "PR에 Reviewer를 지정해주세요.",
    },
    IS_LABEL_ASSIGNED: {
        status: false,
        successMessage: "PR에 Label이 지정되어 있습니다.",
        failureMessage: "PR에 Label을 지정해주세요.",
    },
    IS_TYPESCRIPT_COMPILE_SUCCESS: {
        status: false,
        successMessage: "TypeScript 컴파일에 성공했습니다.",
        failureMessage: "TypeScript 컴파일에 실패했습니다.",
    },
    IS_ESLINT_SUCCESS: {
        status: false,
        successMessage: "ESLint 결과에서 문제가 발견되지 않았습니다.",
        failureMessage: "ESLint 결과에서 문제가 발견되었습니다.",
    },
};

// 1. PR 제목에 #이슈넘버 포함
if (!/^#\d+/.test(danger.github.pr.title)) {
    dangerTestResults.IS_PR_INCLUDE_ISSUE_NUMBER.status = false;
}

// 2. Reviewer 지정
if (danger.github.requested_reviewers.users.length === 0) {
    dangerTestResults.IS_REVIEWER_ASSIGNED.status = false;
}

// 3. Assignee 지정
if (!danger.github.pr.assignee) {
    dangerTestResults.IS_LABEL_ASSIGNED.status = false;
}

// 4. Label 할당
if (!danger.github.issue.labels || danger.github.issue.labels.length === 0) {
    dangerTestResults.IS_LABEL_ASSIGNED.status = false;
}

// 5. TypeScript 컴파일 결과 확인
schedule(async () => {
    try {
        execSync("npx tsc --noEmit", { stdio: "inherit" });
    } catch {
        dangerTestResults.IS_TYPESCRIPT_COMPILE_SUCCESS.status = false;
    }
});

// 6. ESLint 결과 확인
schedule(async () => {
    try {
        execSync("npx eslint . --ext .ts,.tsx", { stdio: "inherit" });
    } catch {
        dangerTestResults.IS_ESLINT_SUCCESS.status = false;
    }
});

// PR Message
let prMessage = `
    ### 
    | Tests | Message | 
    | --- | --- |
`;

Object.values(dangerTestResults).forEach((testResult) => {
    prMessage += `
    | ${testResult.status ? "✅" : "⚠️"} | ${testResult.status ? testResult.successMessage : testResult.failureMessage} |
`;
});

markdown(prMessage);
