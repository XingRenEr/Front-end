'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = '新闻页面';
    var username = this.ctx.session.username;
    var userage = this.ctx.session.userage;
    await this.ctx.render('news', {
      username,
      userage
    });
  }
  async content() {
    console.log(this.ctx.query);
    this.ctx.body = '新闻详情';
  }
  async newslist() {
    console.log(this.ctx.params);
    this.ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
