# 对象深度优先遍历

这是在项目中遇到的一个需求，需要对对象进行深度优先遍历来解决一个业务问题。目的大概是这样：

```javascript
// 有一个这样的对象
const obj = {
  personInfo: {
    basicInfo: {
      name: "Simone",
      age: 22,
      school: "北京大学",
    },
    habbit: '唱跳rap篮球',
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
```

现在需要对这个对象进行深度优先遍历，想要得到所有属性值对应的属性关系链，也就是这样的结果

```javascript
[
  "personInfo.basicInfo.name",
  "personInfo.basicInfo.age",
  "personInfo.basicInfo.school",
  "personInfo.basicInfo.habbit",
  "geoinfo.country.names.cn",...
];
```
也就是需要遍历出对象的所有属性，并将他们每一级的关联关系串联起来