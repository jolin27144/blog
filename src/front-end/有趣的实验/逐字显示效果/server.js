const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'  // 允许所有来源访问
    });

    let id = 0;

    const sendEvent = () => {
      const data = `data: 当前时间是 ${new Date().toLocaleTimeString()}\n\n`;
      res.write(`id: ${id}\n`);
      res.write(data);
      id++;

      // 假设我们只发送5个事件，然后关闭连接
      if (id > 5) {
        clearInterval(intervalId);
        res.write('event: end\n\n');
        res.end();  // 关闭连接
      }
    };

    sendEvent();
    const intervalId = setInterval(sendEvent, 1000);
    

    req.on('close', () => {
      clearInterval(intervalId);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});