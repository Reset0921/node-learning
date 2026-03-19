const http = require('http');
const fs = require('fs');
const path = require('path');

// 配置
const PORT = 3000;
const JSON_FILE_PATH = path.join(__dirname, 'data.json');

// 创建 HTTP 服务器
const server = http.createServer(async (req, res) => {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理 OPTIONS 预检请求
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // 只处理 GET 请求
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    // 读取 JSON 文件
    const data = await fs.promises.readFile(JSON_FILE_PATH, 'utf-8');
    const jsonData = JSON.parse(data);

    // 返回成功响应
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonData, null, 2));
  } catch (error) {
    // 处理文件不存在错误
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON file not found' }));
      return;
    }

    // 处理 JSON 解析错误
    if (error instanceof SyntaxError) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON format' }));
      return;
    }

    // 处理其他错误
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error', message: error.message }));
  }
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Reading JSON file from: ${JSON_FILE_PATH}`);
});
