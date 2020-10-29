// const deepTraversal = (traversalObj, isIterateArray = false) => {
//   const initArr = [];
//   excuteTraversal(traversalObj, initArr, [], isIterateArray);
//   return initArr;
// };

// const excuteTraversal = (traversalObj, initArr, keyPath, isIterateArray) => {
//   const keys = Object.keys(traversalObj);
//   keys.forEach((k) => {
//     keyPath.push(k);
//     const isIteratorArray = !isIterateArray
//       ? !(traversalObj[k] instanceof Array)
//       : true;
//     if (typeof traversalObj[k] === "object" && isIteratorArray) {
//       excuteTraversal(traversalObj[k], initArr, keyPath, isIterateArray);
//       keyPath.pop();
//     } else {
//       initArr.push(keyPath.join("."));
//       keyPath.pop();
//     }
//   });
// };

// 做完leetcode-257号问题后的优化解法
const deepTraversal = (traversalObj, key) => {
  const res = [];
  if (key && typeof traversalObj[key] !== "object") {
    res.push(key);
    return res;
  }
  const keys = Object.keys(key ? traversalObj[key] : traversalObj);
  keys.forEach((k) => {
    const deepPaths = deepTraversal(key ? traversalObj[key] : traversalObj, k);
    for (let i = 0; i < deepPaths.length; i++) {
      res.push(`${key ? `${key}.` : ""}${deepPaths[i]}`);
    }
  });
  return res;
};

module.exports = {
  deepTraversal,
};
