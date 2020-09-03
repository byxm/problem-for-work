const deepTraversal = (traversalObj, isIterateArray = false) => {
  const initArr = [];
  excuteTraversal(traversalObj, initArr, [], isIterateArray);
  return initArr;
};

const excuteTraversal = (traversalObj, initArr, keyPath, isIterateArray) => {
  const keys = Object.keys(traversalObj);
  keys.forEach((k) => {
    keyPath.push(k);
    const isIteratorArray = !isIterateArray
      ? !(traversalObj[k] instanceof Array)
      : true;
    if (typeof traversalObj[k] === "object" && isIteratorArray) {
      excuteTraversal(traversalObj[k], initArr, keyPath, isIterateArray);
      keyPath.pop();
    } else {
      initArr.push(keyPath.join("."));
      keyPath.pop();
    }
  });
};

module.exports = {
  deepTraversal,
};
