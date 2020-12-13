import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongoose: {
    enable: true, // 开启插件
		package: 'egg-mongoose'
  },
  csrf: {
    enable: false
  }
};

export default plugin;
