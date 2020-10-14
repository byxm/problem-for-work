// // promise.all捕获错误的方法
// // promise.all中有一个发生错误整个并行操作都会终止，需要采用点方式抛出错误，而将剩余正常的操作继续执行

// const promiseResolve = (content) => {
//   return new Promise((resolve) => {
//     resolve(content);
//   });
// };

// const promiseReject = (content) => {
//   return new Promise((resolve, reject) => {
//     reject(content);
//   });
// };

// const promise = []
// promise.push(promiseResolve('hahaha'))
// promise.push(promiseResolve('hahaha'))
// promise.push(promiseReject('hahaha'))
// promise.push(promiseResolve('hahaha'))

// Promise.all(promise.map((el) => {
//     return el.catch((err) => {
//         return err;
//     })
// })).then((res) => {
//     console.log('res', res);
// }).catch(err => {
//     console.log('err', err);
// })

const promiseResove = (promiseResolveSecond = function (n = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        resolveAfterSeconds: n,
      });
    }, n * 100);
  });
});

const promiseReject = (promiseRejectSecond = function (n = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject({
        rejectAfterSeconds: n,
      });
    }, n * 100);
  });
});

var promiseArray = [];
promiseArray.push(promiseResove(1));
promiseArray.push(promiseReject(3));
promiseArray.push(promiseResove(2));

var handlePromise = Promise.all(
  promiseArray.map(function (promiseItem) {
    return promiseItem.catch(function (err) {
      return err;
    });
  })
);
handlePromise
  .then(function (values) {
    console.log("all promise are resolved", values);
  })
  .catch(function (reason) {
    console.log("promise reject failed reason", reason);
  });

// 参考答案
//   https://stackoverflow.com/questions/30362733/handling-errors-in-promise-all