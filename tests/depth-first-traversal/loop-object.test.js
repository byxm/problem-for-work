const { assert } = require("chai");
const {
  deepTraversal,
} = require("../../problem-for-project/technology/src/depth-first-traversal");

describe("遍历对象获取路径", () => {
  it("生成keys路径", () => {
    const obj = {
      personInfo: {
        basicInfo: {
          name: "Simone",
          age: 22,
          school: "北京大学",
        },
        habbit: "唱跳rap篮球",
        lessons: ["英语", "数学"],
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

    assert.deepEqual(deepTraversal(obj), [
      "personInfo.basicInfo.name",
      "personInfo.basicInfo.age",
      "personInfo.basicInfo.school",
      "personInfo.habbit",
      "personInfo.lessons",
      "geoinfo.country.names.cn",
      "geoinfo.country.names.en",
      "geoinfo.province.names.cn",
      "geoinfo.province.names.en",
      "geoinfo.city.names.cn",
      "geoinfo.city.names.en",
      "location.lat",
      "location.lon",
    ]);

    assert.deepEqual(deepTraversal(obj, true), [
      "personInfo.basicInfo.name",
      "personInfo.basicInfo.age",
      "personInfo.basicInfo.school",
      "personInfo.habbit",
      "personInfo.lessons.0",
      "personInfo.lessons.1",
      "geoinfo.country.names.cn",
      "geoinfo.country.names.en",
      "geoinfo.province.names.cn",
      "geoinfo.province.names.en",
      "geoinfo.city.names.cn",
      "geoinfo.city.names.en",
      "location.lat",
      "location.lon",
    ]);
  });
});
