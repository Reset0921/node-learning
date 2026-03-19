# Day 3 - Node 核心模块

**日期**: 2026-03-20

**学习目标**: Node 核心模块 fs、path、http

## 📖 学习笔记

### fs 模块
- 文件系统操作
- 支持同步和异步（推荐异步）

### path 模块
- 路径处理
- `path.join()`、`path.resolve()`

### http 模块
- 创建 HTTP 服务
- `http.createServer()`

## 💻 实操产出

- mini-http-server.ts - 读取本地 JSON 的 HTTP 服务

## 📝 练习题答案

### 1. 读取文件
```javascript
import fs from 'fs/promises'
import path from 'path'

async function readJsonFile(filename) {
  const filePath = path.join(__dirname, 'data', filename)
  const content = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(content)
}
```

### 2. HTTP 服务
```javascript
import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Hello!' }))
})

server.listen(3000)
```

### 3. 完整示例
```javascript
import http from 'http'
import fs from 'fs/promises'

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  try {
    const data = await fs.readFile('./data.json', 'utf-8')
    res.end(data)
  } catch (err) {
    res.end(JSON.stringify({ error: 'File not found' }))
  }
})

server.listen(8080, () => console.log('Server running on 8080'))
```
