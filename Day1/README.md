# Day 1 - Node.js 基础

**日期**: 2026-03-18

**学习目标**: Node 运行时、事件循环、CommonJS 和 ESM

## 📖 学习笔记

### Node.js 运行时
- Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时
- 允许在服务端执行 JavaScript

### 事件循环
- Node.js 使用事件循环处理异步操作
- 任务队列：宏任务(macroTasks) → 微任务(microTasks)

### CommonJS vs ESM
- CommonJS: `module.exports = {}`
- ESM: `export default {}`

## 💻 实操产出

- 初始化 node-ts-starter 项目
- hello-node-ts 运行成功

## 📝 练习题答案

### 1. 事件循环输出顺序
```
1. 开始
4. 结束
3. Promise
2. setTimeout
```

### 2. 模块导出
```javascript
// CommonJS
module.exports = { add: (a, b) => a + b }

// ESM
export const add = (a, b) => a + b
```

### 3. 初始化项目
```bash
mkdir node-ts-starter && cd node-ts-starter
pnpm init
pnpm add -D typescript ts-node @types/node
npx tsc --init
```
