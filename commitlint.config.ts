/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:25:44
 * @LastEditTime: 2023-11-19 15:23:36
 * @LastEditors: chenzechao
 * @Description:
 * @FilePath: /tius-manager-system/commitlint.config.ts
 */
module.exports = {
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "scope-empty": [2, "never"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "type-enum": [
      2,
      "never",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "type-empty": [2, "never"],
  },
  prompt: {
    settings: {},
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: {
        description: "请选择本次提交的类型",
        enum: {
          feat: {
            description: "添加新功能",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "修复BUG",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          format: {
            description:
              "修改代码格式（空格，格式化，省略分号等），对代码运行没有影响",
            title: "Format",
            emoji: "💎",
          },
          style: {
            description: "修改样式（CSS，SCSS等）",
            title: "Styles",
            emoji: "💎",
          },
          merge: {
            description: "代码合并，分支合并",
            title: "Merge",
            emoji: "🗑",
          },
          refactor: {
            description: "重构，不影响原功能（既不是修 bug ，也不是加功能）",
            title: "Code Refactoring",
            emoji: "📦",
          },
          perf: {
            description: "性能优化",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          test: {
            description: "测试相关，编写单元测试、E2E 测试等",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description: "构建流程、外部依赖变更，比如升级 npm 包、修改配置等",
            title: "Builds",
            emoji: "🛠",
          },
          docs: {
            description: "只修改了文档",
            title: "Documentation",
            emoji: "📚",
          },
          ci: {
            description: "ci 相关的更改",
            title: "Continuous Integrations",
            emoji: "⚙️",
          },
          chore: {
            description: "对构建过程或辅助工具和库（如文档生成）的更改",
            title: "Chores",
            emoji: "♻️",
          },
          revert: {
            description: "撤销一个先前的修改",
            title: "Reverts",
            emoji: "🗑",
          },
        },
      },
      scope: {
        description:
          "本次提交改动的范围 (例如：模块名称、组件名称、文件名称等)",
      },
      subject: {
        description: "输入一行简短的文字说明本次改动的内容",
      },
      body: {
        description: "输入一段较长的文字详细说明本次改动的内容",
      },
      isBreaking: {
        description: "在本次提交内容中是否存在破坏性的变更?",
      },
      breakingBody: {
        description:
          "提交一次破坏性的变更请求需要具有正文，请输入一段更长的文字来详细描述该破坏性变更请求",
      },
      breaking: {
        description: "描述一下本次破坏性变更内容",
      },
    },
  },
};
