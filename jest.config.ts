import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "babel-jest",
    },
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|jpg|jpeg|png|svg|webp)$": "<rootDir>/fileMock.js",
        "@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json",
        },
    },
};

export default config;
