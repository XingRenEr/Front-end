// 引入第三方模块
// https://www.npmjs.com/package/silly-datetime
var sd = require('silly-datetime');
module.exports = {
    formatTime(param) {
        // this 是 helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象
        var time = sd.format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
        return time;
    },
};