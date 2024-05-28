function promiseAll(promises) {
  const result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((v) => {
          result[index] = v;
          if (result.length === promises.length) {
            return resolve(result);
          }
        })
        .catch(reject);
    });
  });
}
