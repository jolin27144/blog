// https://mp.weixin.qq.com/s/WXdl8yoGQqMNfIDPqSQ75Q
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.set({
    Expires: new Date('2020-09-15 22:20:00').toUTCString()
  });
  //   ctx.set({});
  ctx.body = 'Hello World';
});

app.listen(3000);
