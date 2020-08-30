const obj = {
  personInfo: {
    basicInfo: {
      name: "Simone",
      age: 22,
      school: "北京大学",
    },
    habbit: "唱跳rap篮球",
  },
  geoinfo: {
    country: {
      names: {
        cn: "中国",
        en: "English",
      },
    },
    province: {
      names: {
        cn: "四川",
        en: "SiChuan",
      },
    },
    city: {
      names: {
        cn: "成都",
        en: "ChengDu",
      },
    },
  },
  location: {
    lat: 120.23343423,
    lon: 34.342344,
  },
};

const traversal = (traversalObj) => {
  const initArr = [];
  excuteTraversal(traversalObj, initArr);
  console.log("initArr", initArr);
};

const excuteTraversal = (traversalObj, initArr) => {
  const keys = Object.keys(traversalObj);
  keys.forEach((k) => {
    if (typeof traversalObj[k] === "object") {
      excuteTraversal(traversalObj[k], initArr);
    } 
    initArr.push(k);
  });
};


traversal(obj)

module.exports = {
  traversal,
};
