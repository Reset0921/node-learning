# Day 6 - 工程规范

**日期**: 2026-03-23

**学习目标**: 工程规范（ESLint、Prettier、脚本约定）

## 📖 学习笔记

### ESLint
- 代码检查工具
- 发现代码问题

### Prettier
- 代码格式化工具
- 统一代码风格

### 脚本约定
- dev: 开发运行
- lint: 代码检查
- format: 代码格式化
- lint:fix: 自动修复

## 💻 实操产出

- 配置好 lint、format、dev 脚本的项目

## 📝 练习题答案

### 1. 安装 ESLint
```bash
pnpm add -D eslint
npx eslint --init
```

### 2. .eslintrc.js
```javascript
module.exports = {
  env: { node: true, es2021: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: { 'no-unused-vars': 'warn' }
}
```

### 3. Prettier .prettierrc
```json
{ "semi": false, "singleQuote": true, "tabWidth": 2 }
```

### 4. package.json 脚本
```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write \"src/**/*.ts\""
  }
}
```
