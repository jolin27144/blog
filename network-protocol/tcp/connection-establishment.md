# TCP 连接的建立
```
前置知识:TCP
```

条件:

- 在客户端尝试与服务器连接之前，服务器必须首先绑定并侦听端口以打开端口以进行连接。
  即：被动打开( passive open)
- 一旦建立了被动打开，客户端就可以发起主动打开。

建立连接:

1. SYN: The active open is performed by the client sending a SYN to the server. The client sets the segment's sequence number to a random value A.
2. SYN-ACK: In response, the server replies with a SYN-ACK. The acknowledgment number is set to one more than the received sequence number i.e. A+1, and the sequence number that the server chooses for the packet is another random number, B.
3. ACK: Finally, the client sends an ACK back to the server. The sequence number is set to the received acknowledgement value i.e. A+1, and the acknowledgement number is set to one more than the received sequence number i.e. B+1.

完成：

- 此时，客户端和服务器都已收到连接的确认。
- 步骤 1、2 建立一个方向的连接参数（序列号），并确认该参数。
- 步骤 2、3 为另一个方向建立连接参数（序列号），并确认该参数。
- 利用这些，建立了全双工通信
