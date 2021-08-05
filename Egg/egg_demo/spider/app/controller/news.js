'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // 获取数据显示到新闻界面
    var list = await this.service.news.getNewsList();
    // console.log(list);
    // this.ctx.body = '新闻系统';
    await this.ctx.render('news', {
        list
    });
  }
  async content() {
    // console.log(this.ctx.query.aid);
    var content = await this.service.news.getNewsContent(this.ctx.query.aid);
    // console.log(content);
    await this.ctx.render('newscontent',{
        content: content[0]
    })
  }
}

module.exports = NewsController;
