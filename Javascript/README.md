这里是 JavaScript 系列文章的大纲（含链接），点击可以查看具体内容。

## 1 基础

文章地址：[基础](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%9F%BA%E7%A1%80/README.md)

知识点：

* [x] 常见数组 API
* [x] 常见 DOM API
* [x] 数组去重的方法
* [x] 数字化金额：`1234567890` -> `1,234,567,890`
* [x] JS 数据类型：`Boolean`/`Null`/`Undefined`/`Number`/`String`/`Symbol`/`BigInt`/`Object`
* [x] [变量与作用域](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F.md)
* [x] [原型与原型链](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%9F%BA%E7%A1%80/%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.md)
* [x] [this](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%9F%BA%E7%A1%80/this.md)
* [x] [闭包](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%9F%BA%E7%A1%80/%E9%97%AD%E5%8C%85.md)  

## 2 异步系列

文章地址：[JavaScript 异步](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%BC%82%E6%AD%A5/README.md)  

知识点：  

* [x] JavaScript 是单线程的
* [x] 为什么不设计成多线程
* [x] 为什么需要异步
* [x] 如何实现异步
* [x] [Event Loop](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%BC%82%E6%AD%A5/Event%20Loop.md)
* [x] [Promise](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%BC%82%E6%AD%A5/Promise.md)

## 3 手写源码系列

文章地址：[手写系列](https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97)

各个手写具体实现：

* [x] [自定义原生事件](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6.md)
  * [x] 创建自定义事件：`const myEvent = new Event()`、`new CustomEvent()`、`document.createEvent('CustomEvent')`
  * [x] 监听自定义事件：`document.addEventListener('myEvent', callback)`
  * [x] 触发自定义事件：`document.dispatchEvent(myEvent)`
* [x] [Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/Promise.md)
  * [x] 简写版 `Promise`（不支持异步）
  * [x] 手写 `Promise`（`resolve`、`reject`、`then`）
  * [x] 实现 `Promise.all()`
  * [x] 实现 `Promise.race()`
  * [x] 实现 `Promise` 异步调度器
* [x] [防抖和节流](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.md)
  * [x] 防抖
  * [x] 节流
  * [x] 防抖 + 节流（必定能触发的防抖）
* [x] [浅拷贝和深拷贝](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B7%B1%E6%8B%B7%E8%B4%9D.md)
  * [x] 手写浅拷贝
  * [x] `Object.assign`
  * [x] 浅拷贝其他方法：`concat()`、`slice()`、`[...arr]`
  * [x] 手写深拷贝
  * [x] `JSON.parse(JSON.stringify())`
  * [x] Lodash 的 `_.cloneDeep()`
  * [x] JQuery 的 `$.extend()`
* [x] [call+bind+apply](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/call%2Bbind%2Bapply.md)
  * [x] 原生 `call` 和手写 `call`
  * [x] 原生 `bind` 和手写 `bind`
  * [x] 原生 `apply` 和手写 `apply`
* [x] [JSONP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/JSONP.md)
  * [x] 基本原理：利用 `script` 标签的 `src` 没有跨域限制来完成实现
  * [x] 优缺点：只能 `GET`；兼容性好
  * [x] 简单实现：通过 `url, params, callbackKey, callback` 来定义 `JSONP()` 方法的参数
  * [x] 考虑多次调用：基于简单实现，添加数组保存 `callback` 的返回
* [x] [new](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/new.md)
  * [x] 3 行代码手写 `new`
  * [x] 手写 `new` 的 5 个特点
  * [x] 完整版手写 `new`
* [x] [其他](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E5%85%B6%E4%BB%96.md)
  * [x] `Object.create()`
  * [x] ES5 实现类继承
  * [x] `instanceof`
  * [x] 柯里化：求 `add(1)(2)(3)`
  * [x] 迭代器
  * [x] Ajax
  * [x] 数组扁平化：手撕、`flat()`、`reduce()`
  * [x] 数组去重：手撕、`Set`、`filter()`
  * [x] 其他
