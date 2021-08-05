/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1627977329525_9570';

  // add your middleware config here
  config.middleware = ['printdate', 'forbiddenip'];
  config.printdate = {
    aaa: 'aaaaaa'
  }
  config.forbiddenip = {
    forbidips: ['127.0.0.1', '192.168.0.67']
  }

  config.view = {
    mapping: {
      '.html': 'ejs',		// 修改后表示后缀名为 .html 的文件是模板引擎，要用 ejs 来解析它
    },
  };

  config.api = 'http://www.phonegap100.com/';

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
