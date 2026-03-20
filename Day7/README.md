# Day 7 - REST 基础设计

**日期**: 2026-03-24

**学习目标**: REST 基础设计规范

## 📖 学习笔记

### RESTful API 规范
- 资源命名：用名词复数
- HTTP 方法：GET/POST/PUT/DELETE
- 状态码：200/201/204/400/401/404/500

## 💻 实操产出

- 用内存数据实现 users CRUD
- Week1 mini 项目 README

## 📝 练习题答案

### RESTful 路由示例
```typescript
// GET /users - 获取用户列表
// GET /users/:id - 获取单个用户
// POST /users - 创建用户
// PUT /users/:id - 更新用户
// DELETE /users/:id - 删除用户
```

### 响应状态码
```typescript
// 200 OK - 成功
// 201 Created - 创建成功
// 204 No Content - 删除成功
// 400 Bad Request - 请求错误
// 401 Unauthorized - 未授权
// 404 Not Found - 资源不存在
// 500 Internal Server Error - 服务器错误
```

### 内存版 CRUD 示例
```typescript
const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  user ? res.json(user) : res.status(404).json({ error: 'Not found' })
})

app.post('/users', (req, res) => {
  const user = { id: Date.now(), ...req.body }
  users.push(user)
  res.status(201).json(user)
})
```
