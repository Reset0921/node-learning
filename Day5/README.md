# Day 5 - 泛型与工具类型

**日期**: 2026-03-22

**学习目标**: 泛型与工具类型（Partial、Pick、Omit、Record）

## 📖 学习笔记

### 泛型
-  generics - 泛型允许创建可复用的组件
- 泛型函数、泛型类、泛型接口

### 工具类型
- Partial - 所有属性可选
- Pick - 选择部分属性
- Omit - 排除部分属性
- Record - 定义对象类型

## 💻 实操产出

- types/response.ts - 通用响应类型封装

## 📝 练习题答案

### 1. 基础泛型
```typescript
function identity<T>(arg: T): T {
  return arg
}
const num = identity<number>(123)
```

### 2. 泛型约束
```typescript
function logLength<T extends { length: number }>(arg: T): number {
  return arg.length
}
```

### 3. ApiResponse 封装
```typescript
interface ApiResponse<T> {
  code: number
  data: T
  message: string
}
```

### 4. 分页响应
```typescript
interface Paginated<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
```
