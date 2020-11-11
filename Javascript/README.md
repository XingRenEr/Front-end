这里是 JavaScript 系列文章的大纲（含链接），点击可以查看具体内容。

## 1 基础

文章地址：[基础](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E5%9F%BA%E7%A1%80/README.md)

知识点：

* [x] 常见数组 API
* [x] 常见 DOM API
* [x] 数组去重的方法
* [x] 数字化金额：`1234567890` -> `1,234,567,890`
* [x] JS 数据类型：`Boolean`/`Null`/`Undefined`/`Number`/`String`/`Symbol`/`BigInt`/`Object`
* [x] 变量与作用域

## 1.2 this

文章地址：[this](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/this.md)

知识点：

* [x] `this` 永远指向最后调用它的那个对象
  * [x] 普通函数中 `this` 的指向，是 `this` 执行时的上下文
  * [x] 箭头函数中 this 的指向，是 this 定义时的上下文
* [x] 全局执行上下文中的 `this`
* [x] 函数执行上下文中的 `this`
  * [x] 通过 `call/bind/apply` 改变 `this` 指向
  * [x] 通过对象调用方法设置
  * [x] 通过构造函数设置
* [x] React 中 `this` 问题
* [x] 题目

## 1.3 原型和原型链



文章地址：[原型和原型链](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.md)

知识点：

* [x] 构造函数 `funciton Person() {}`
* [x] 实例 `const person = new Person()`
* [x] 原型 `Person.prototype`
* [x] 隐藏属性 `constructor`
  * [x] 等式 1：`person.constructor === Person`
  * [x] 等式 2：`Person.prototype.constructor === Person`
* [x] `new`
  * [x] `new` 的原生例子
  * [x] 手写 `new`：判断首参为函数；通过 `Object.create()` 创建新对象并且绑定原型链；通过 `call` 或者 `apply` 修正 `this` 指向和传参；通过 `typeof` 判断函数对象和普通对象；函数对象和普通对象返回构造函数的 `return` 值，否则返回新对象
  * [x] 通过对手写 `new` 过程的了解来做题
* [x] 查找实例对应的对象的原型 `person.__proto__ === Person.prototype`
* [x] 函数对象指向
  * [x] `person.__proto__ === Person.prototype`
  * [x] `Person.__proto__ === Function.prototype`
* [x] 普通对象指向
  * [x] `obj.__proto__ === Object.prototype`
* [x] 原型链
  * [x] `foo.__proto__ === Object.prototype`
  * [x] `F.__proto__ === Function.prototype`
  * [x] `F.__proto__.__proto__ === Object.prototype`

## 1.4 DOM



文章地址：[DOM](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/DOM.md)

知识点：

* [x] DOM 常用 API
* [x] 虚拟 DOM：浏览器渲染过程 -> 真实 DOM 和虚拟 DOM -> Diff 算法

## 2 异步系列

异步系列存放地址：

* [x] [JavaScript 异步](https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97)
  * [x] JavaScript 是单线程的
  * [x] 为什么不设计成多线程
  * [x] 为什么需要异步
  * [x] 如何实现异步

各种异步知识点：

* [x] [Event Loop](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Event%20Loop.md)
  * [x] 单线程和多线程
  * [x] 浏览器 Event Loop
  * [x] Node 和浏览器 Event Loop 区别
  * [x] 训练题目
* [x] [Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Promise.md)
  * [x] Promise 初探：是什么、为什么、怎么用
  * [x] Promise 基础：`new Promise` 和 `Promise` 状态
  * [x] 题库：基础题
  * [x] 题库：结合 `setTimeout`
  * [x] `.then()` 链式操作：两个参数、链式调用
  * [x] `.catch()` 捕获问题
  * [x] `.finally()` 强制执行
  * [x] 题库：`.then()、.catch()、.finally()`
  * [x] `.all()` 接力赛
  * [x] `.race()` 个人赛
  * [x] 题库：`.all()、.race()`
  * [x] Promise 源码
  * [x] 题库：结合 `async/await`
  * [x] 综合题
  * [x] 大厂题
  * [x] 总结

## 3 手写源码系列



手写系列存放位置：

* [x] [手写系列](https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97)

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

