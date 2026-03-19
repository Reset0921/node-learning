# Day 4 - TypeScript 类型系统

**日期**: 2026-03-21

**学习目标**: TypeScript 类型系统（interface、type、union）

## 📖 学习笔记

### interface
- 定义对象结构
- 可选属性、只读属性

### type
- 定义类型别名
- 联合类型、交叉类型

### 工具类型
- Partial、Pick、Omit、Record

## 💻 实操产出

- types/api.ts - 接口类型定义

## 📝 练习题答案

### 1. 定义 interface
```typescript
interface User {
  id: number
  name: string
  email: string
  age?: number  // 可选属性
}
```

### 2. type 和 union
```typescript
type Status = 'pending' | 'success' | 'error'

type Response<T> = {
  code: number
  data: T
  message: string
}
```

### 3. HTTP 响应加类型约束
```typescript
interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

interface User {
  id: number
  name: string
}

type UserResponse = ApiResponse<User>
```

### 4. 工具类型
```typescript
type PartialUser = Partial<User>
type UserPreview = Pick<User, 'id' | 'name'>
type UserWithoutPassword = Omit<User, 'password'>
type UserMap = Record<number, User>
```
