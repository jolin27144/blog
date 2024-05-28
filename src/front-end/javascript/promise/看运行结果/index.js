let a = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timeOut");
    resolve("10000");
  });
  reject(3);
});

console.log(2);
a.then((e) => {
  console.log("不走");
})
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log(4);
  });