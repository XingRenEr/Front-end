'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    var api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    var response = await this.ctx.curl(api);
    // console.log(response.data);
    var data = JSON.parse(response.data);
    // console.log(data);
    return data.result;
  }
  async getNewsContent(aid) {
    var api = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    var response = await this.ctx.curl(api);
    // console.log(JSON.parse(response.data));
    return JSON.parse(response.data).result;
  }
}

module.exports = NewsService;
