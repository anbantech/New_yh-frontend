const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  /**
   * 将 Browser 和 Node 环境都注入到规则中，子项目不需要重复配置
   */
  env: { browser: true, es2020: true, node: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin", "import", "react-refresh"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
      typescript: {},
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
  ],
  ignorePatterns: [".eslintrc.cjs", "dist", ".eslintrc.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": WARN,
    "@typescript-eslint/interface-name-prefix": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    /**
     * 关闭 "no-unused-vars" 规则，该规则和 "@typescript-eslint/no-unused-vars" 冲突
     */
    "no-unused-vars": OFF,
    "@typescript-eslint/no-unused-vars": ERROR,
    /**
     * 关闭 "no-redeclare" 规则，该规则和 "@typescript-eslint/no-redeclare" 冲突
     */
    "no-redeclare": OFF,
    "@typescript-eslint/no-redeclare": ERROR,
    /**
     * TS 自身支持检查，且开启该规则后找不到全局 typings 定义
     */
    "no-undef": OFF,
    quotes: [
      ERROR,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [ERROR, "never"],
    "no-whitespace-before-property": ERROR,
    "space-before-blocks": [ERROR, "always"],
    "space-before-function-paren": [OFF, "never"],
    "no-multi-spaces": ERROR,
    "no-multi-str": ERROR,
    "no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
          "unknown",
        ],
        pathGroupsExcludedImportTypes: ["type"],
        pathGroups: [
          {
            pattern: "@anban/**",
            group: "internal",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: false,
      },
    ],
    "import/extensions": [
      ERROR,
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
    "import/no-extraneous-dependencies": [ERROR, { devDependencies: true }],
    "import/prefer-default-export": OFF,
    "import/no-unresolved": ERROR,
    "semi-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "eol-last": [ERROR, "always"],
    "no-debugger": WARN
  },
};
