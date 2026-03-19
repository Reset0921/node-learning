# Day 2 - Promise、async/await

**日期**: 2026-03-19

**学习目标**: Promise、async/await、错误处理

## 📖 学习笔记

### Promise
- Promise 是异步操作的封装
- 三种状态：pending、fulfilled、rejected

### async/await
- async 函数返回 Promise
- await 等待 Promise resolve

### 错误处理
- Promise 使用 .catch()
- async/await 使用 try-catch

## 💻 实操产出

- utils/async-demo.ts - 异步工具函数

## 📝 练习题答案

### 1. 回调改为 Promise
```javascript
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: 'Tom' }), 100)
  })
}
```

### 2. async/await 错误处理
```javascript
async function fetchUserSafe() {
  try {
    const response = await fetch('/api/user')
    return await response.json()
  } catch (error) {
    console.error('Error:', error.message)
    return null
  }
}
```

### 3. Promise.all 并行调用
```javascript
async function getAllData() {
  const [r1, r2, r3] = await Promise.all([api1(), api2(), api3()])
  return [r1, r2, r3]
}
```
