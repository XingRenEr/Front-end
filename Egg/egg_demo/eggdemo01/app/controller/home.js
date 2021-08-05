'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.session.username = '张三';
    this.ctx.session.userage = '14';
    await this.ctx.render('home');
  }
  async add() {
    console.log(this.ctx.request.body);
  }
}

module.exports = HomeController;
