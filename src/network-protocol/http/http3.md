![img_2.png](img_2.png)
流、tls 都给下层 QUIC 实现了。http3 实际上比 http2 精简了。


## 原理

基于 QUIC

QUIC 基于 UDP 重新实现 TCP 的可靠传输,拥塞控制等，同时集成 TLS.

流式传输彻底解决对头阻塞问题
