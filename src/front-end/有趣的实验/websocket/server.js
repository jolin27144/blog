const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// 使用 Express 提供静态文件
app.use(express.static('public'));

// 创建 HTTP 服务器并传递给 WebSocket 服务器
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// 监听 WebSocket 连接事件
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // 监听消息事件
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
    ws.send('Received Client message!');
  });

  // 发送消息给客户端
  ws.send('Hello, client!');
});

// 监听 HTTP 服务器的端口
const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});