# Node.js JSON Server

一个简单的 Node.js 服务，用于读取本地 JSON 文件并通过 HTTP 接口返回。

## 功能特性

- ✅ 读取本地 JSON 文件
- ✅ 返回 HTTP JSON 响应
- ✅ 完善的错误处理
- ✅ CORS 支持
- ✅ 异步操作使用 try/catch

## 项目结构

```
day3/
├── server.js       # 主服务文件
├── data.json       # 示例 JSON 数据文件
├── package.json    # 项目配置文件
└── README.md       # 项目说明文档
```

## 安装与运行

### 1. 安装依赖
```bash
npm install
```

### 2. 启动服务
```bash
npm start
```

### 3. 访问服务
服务启动后，在浏览器或使用 curl 访问：
```
http://localhost:3000
```

## API 说明

### GET /

读取并返回 `data.json` 文件的内容。

**响应示例：**
```json
{
  "name": "Node.js JSON Server",
  "version": "1.0.0",
  "description": "示例数据文件",
  "features": [
    "读取本地 JSON 文件",
    "返回 HTTP 响应",
    "错误处理",
    "CORS 支持"
  ],
  "author": "CodeFree",
  "timestamp": "2026-03-19T07:17:57.201Z"
}
```

**错误响应：**

- 404: JSON 文件不存在
- 400: JSON 格式错误
- 405: 不支持的 HTTP 方法
- 500: 服务器内部错误

## 自定义配置

在 `server.js` 中可以修改以下配置：

```javascript
const PORT = 3000;  // 修改端口号
const JSON_FILE_PATH = path.join(__dirname, 'data.json');  // 修改 JSON 文件路径
```

## 代码规范

- 变量命名：`camelCase`
- 缩进：2个空格
- 注释：复杂逻辑需添加行内说明
- 错误处理：异步操作必须用 `try/catch`

## 技术栈

- Node.js 原生 `http` 模块
- Node.js 原生 `fs` 模块（异步 API）
- Node.js 原生 `path` 模块
