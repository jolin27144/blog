头部压缩 HPACK 算法 (单独一个请求更新表，也会导致堵塞)
应用层队头堵塞 (传输层 TCP 还是会堵塞，可靠传输导致的)
多路复用（流） (一个流多个帧，多个流传，不影响其他帧)
