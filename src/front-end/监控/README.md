# 上报字段怎么设计

- 基本日志信息
- 浏览器信息
- 页面信息
- 用户信息
- 业务信息

参考文章
https://time.geekbang.org/column/article/767888

# 监控什么

- [资源监控.md](资源监控.md)
- [接口异常监控.md](接口异常监控.md)
- [脚本异常监控.md](脚本异常监控.md)
- [性能监控.md](网页指标监控)
- [用户数据监控.md](用户数据监控.md)

# 怎么上报

## sendBeacon

第二种方案利用了浏览器 Beacon API 能力。它可以给服务器发送异步和非阻塞请求，这类请求是不需要响应结果的。它最大的优势是浏览器会在保证页面卸载前就把请求发送完成。所以我们经常会利用它将分析数据发送给服务器。

```typescript
// src/core/util.ts

export function sendBeacon(url: string, data: TraceData) {
  if (typeof navigator === "undefined") return;
  navigator.sendBeacon && navigator.sendBeacon(url, JSON.stringify(data));
}
```

## 使用 GIF 图片

第三种方案是通过图片请求的方式完成数据的上报，只要创建一个 Image 对象，并将其 src 属性设为“需要上报的 URL”就可以了。这是一种既简单又快速的方式。它解决了前面两个技术的兼容性问题和跨域问题，甚至还有一个明显的优点，就是不会阻塞页面加载，即使请求失败也不会影响用户对页面的正常交互体验。所以，前端监控平台通常会采用这种方案。

```typescript
// src/core/util.ts

export function sendByImg(url: string, data: TraceData) {
  const spliceStr = url.indexOf("?") === -1 ? "?" : "&";
  const imageUrl = `${url}${spliceStr}data=${encodeURIComponent(
    safeStringify(data)
  )}`;
  let img = new Image();
  img.src = imageUrl;
  img.onload = function () {
    console.log("Tracking data sent successfully!");
    img = null;
  };
  img.onerror = function () {
    console.error("Failed to send tracking data.");
    img = null;
  };
}
```

## 什么时候上报

### 立即上报 (触发少)

网页指标
自定义的指标

### 延迟上报 (触发多)

全局的 Error 事件
全局的 unhandlerrejection 事件
接口异常

#### 延迟上报怎么做

首先，我们定义一个 queue 队列属性，用于存储需要延迟上报的链路日志数据。同时，我们再设定一个时间间隔，规定每隔多长时间上报一次数据。也可以用缓存到一定大小再上传。

```typescript
// src/baseTrace.ts

export class BaseTrace implements BaseTraceInterface {
  // 存储链路日志数据
  public queue: TraceData[] = [];
  // 发送请求时间间隔
  public sendTimer = 1000;
  // 初始化实例
  public static init(options: TraceOptions): BaseTrace {
    const traceSdk = new BaseTrace(options);
    // ...省略部分代码
    setInterval(() => {
      const data = traceSdk.queue.shift();
      if (data) sendByImg(traceSdk.dsn, data);
    }, traceSdk.sendTimer);

    window.traceSdk = traceSdk;
    return traceSdk;
  }
}
```
