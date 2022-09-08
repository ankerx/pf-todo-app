module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 120],
    "type-enum": [
      2,
      "always",
      [
        "assets",
        "build",
        "ci",
        "core",
        "docs",
        "env",
        "fix",
        "mocks",
        "perf",
        "refactor",
        "revert",
        "tests",

        // modules
        "auth",
        "task",
      ],
    ],
  },
};
