function race(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((p) => {
      p.then(resolve);
      p.catch(reject);
    });
  });
}
