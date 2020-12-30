手写源码系列
===

<!-- 目录开始 -->
## <a id="one"></a>一 目录

| 目录 |
| --- |
| [二 文章导航](#two) |
| [三 参考文献](#three) |
| &emsp;[3.1 手写系列文章](#three-one) |
| &emsp;[3.2 手写 call/bind/apply](#three-two) |
| &emsp;[3.3 手写深拷贝和浅拷贝](#three-three) |
| &emsp;[3.4 手写 Promise](#three-four) |
<!-- 目录结束 -->

## <a id="two"></a>二 文章导航
> [返回目录](#one)

* [x] 集合引用类型
  * [x] ★ [数组去重](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#eleven)
  * [x] ★ [数组扁平化](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#night)
  * [x] 数组最值
  * [x] 数组乱序-洗牌算法
  * [x] 数组 API 实现：filter、map、forEach、reduce
  * [x] ★ [对象扁平化](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#ten)
* [x] 迭代器与生成器
  * [x] [迭代器](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#seven)
* [x] 对象、类与面向对象编程
  * [x] ★★ [手写new](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/new.md)
    * [x] **3 行代码手写 `new`**
    * [x] **手写 `new` 的 5 个特点**
    * [x] **完整版手写 `new`**
  * [x] ★ [ES5继承](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#four)
  * [x] ★ [实现instanceof](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#five)
  * [x] [Object.create()](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#three)
* [x] 函数
  * [x] ★★ [call、apply、bind](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/Promise.md)
    * [x] **原生 `call` 和手写 `call`**
    * [x] **原生 `bind` 和手写 `bind`**
    * [x] **原生 `apply` 和手写 `apply`**
  * [x] ★ [函数柯里化](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#six)
* [x] Promise与异步函数
  * [x] ★★ [Promise](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/Promise.md)
    * [x] **简写版 `Promise`（不支持异步）**
    * [x] **手写 `Promise`（`resolve`、`reject`、`then`）**
    * [x] **实现 `Promise.all()`**
    * [x] **实现 `Promise.race()`**
    * [x] **实现 `Promise` 异步调度器**
  * [x] 异步串行|异步并行
  * [x] 异步并发数限制
* [x] 事件
  * [x] [自定义事件](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#two)
* [x] 动画与Canvas图形
  * [x] ★★ [防抖、节流](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.md)
    * [x] **防抖**
    * [x] **节流**
    * [x] **防抖 + 节流（必定能触发的防抖）**
* [x] JSON
  * [x] JSON.parse()、JSON.stringify()
* [x] 网络请求与远程资源
  * [x] [Ajax](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E5%85%B6%E4%BB%96.md#eight)
  * [x] ★★ [JSONP](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/JSONP.md)
    * [x] **基本原理**：利用 `script` 标签的 `src` 没有跨域限制来完成实现
    * [x] **优缺点**：只能 `GET`；兼容性好
    * [x] **简单实现**：通过 `url, params, callbackKey, callback` 来定义 `JSONP()` 方法的参数
    * [x] **考虑多次调用**：基于简单实现，添加数组保存 `callback` 的返回
* [x] 其他
  * [x] ★★ [浅拷贝和深拷贝](https://github.com/XingRenEr/Front-end/blob/master/Javascript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81/%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B7%B1%E6%8B%B7%E8%B4%9D.md)
    * [x] **手写浅拷贝**
    * [x] **`Object.assign`**
    * [x] **浅拷贝其他方法**：`concat()`、`slice()`、`[...arr]`
    * [x] **手写深拷贝**
    * [x] **`JSON.parse(JSON.stringify())`**
    * [x] **Lodash 的 `_.cloneDeep()`**
    * [x] **JQuery 的 `$.extend()`**
  * [x] ★ 发布订阅模式(EventHub/EventEmitter): Node 回调函数、Vue event bus
  * [x] 图片懒加载
  * [x] 滚动加载
  * [x] 大数据渲染（渲染几万条数据不卡页面）

## <a id="three"></a>三 参考文献

> [返回目录](#one)

* [x] [四大手写](https://zhuanlan.zhihu.com/p/160315811)
  * [x] 手写 bind
  * [x] 手写深拷贝
  * [x] 手写 EventHub（发布-订阅）
  * [x] 手写 Promise
* [x] [前端编码能力](https://zhuanlan.zhihu.com/p/78891173)
  * [x] 手动实现call、apply、bind
  * [x] EventEmitter
  * [x] 防抖
  * [x] 节流
  * [x] 浅拷贝和深拷贝
  * [x] 数组去重、扁平、最值
  * [x] 数组乱序-洗牌算法
  * [x] 函数柯里化
  * [x] 手动实现JSONP
  * [x] 模拟实现promise
  * [x] 手动实现ES5继承
  * [x] 手动实现instanceof

### <a id="three-one"></a>3.1 手写系列文章

> [返回目录](#one)

* [x] [前端面试常见的手写功能](https://juejin.im/post/6873513007037546510)【阅读建议：30min】
* [x] [32个手写JS，巩固你的JS基础（面试高频）](https://juejin.im/post/6875152247714480136)【阅读建议：30min】
* [x] [22 道高频 JavaScript 手写面试题及答案](https://juejin.im/post/6844903911686406158)【阅读建议：30min】
* [x] [「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/6844903809206976520)【阅读建议：30min】
* [x] [几道JS代码手写题以及一些代码实现](https://juejin.im/post/6844903575559077895)【阅读建议：30min】
* [x] [三元-手写代码系列](http://47.98.159.95/my_blog/js-api/001.html)【阅读建议：30min】
* [x] [CORS 原理及实现](https://www.jianshu.com/p/b2bdf55e1bf5)【阅读建议：30min】
* [x] [JSONP 原理及实现](https://www.jianshu.com/p/88bb82718517)【阅读建议：30min】
* [x] [jsonp的原理与实现](https://segmentfault.com/a/1190000007665361)【阅读建议：10min】
* [x] [20道JS原理题助你面试一臂之力！](https://juejin.im/post/6844903891591495693)【阅读建议：30min】
* [x] [7分钟理解JS的节流、防抖及使用场景](https://juejin.im/post/6844903669389885453)【阅读建议：10min】
* [x] [防抖和节流原理分析](https://juejin.im/post/6844903662519599111?utm_medium=fe&utm_source=weixinqun)【阅读建议：10min】
* [x] [前端性能相关：防抖、节流](https://juejin.im/entry/6844903592898330638)【阅读建议：5min】
* [x] [面试官(6): 写过『通用前端组件』吗?](https://juejin.im/post/6844903847874265101)【阅读建议：20min】
* [x] [面试官:既然React/Vue可以用Event Bus进行组件通信,你可以实现下吗?](https://juejin.im/post/6844903587043082247)【阅读建议：20min】
* [x] [浅谈 instanceof 和 typeof 的实现原理](https://juejin.im/post/6844903613584654344)【阅读建议：10min】
* [x] [解锁多种JavaScript数组去重姿势](https://juejin.im/post/6844903608467587085)【阅读建议：20min】
* [x] [如何在 JavaScript 中更好地使用数组](https://juejin.im/post/6844903671646715911)【阅读建议：10min】
* [x] [7种方法实现数组去重](https://juejin.im/post/6844903602197102605)【阅读建议：20min】

### <a id="three-two"></a>3.2 手写 call/bind/apply

> [返回目录](#one)

* [x] [MDN - Arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)【阅读建议：5min】
* [x] [MDN - call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)【阅读建议：5min】
* [x] [MDN - apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)【阅读建议：5min】
* [x] [MDN - bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)【阅读建议：5min】
* [x] [不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)【阅读建议：1h】
* [x] [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)【阅读建议：20min】
* [x] [this、apply、call、bind](https://juejin.im/post/6844903496253177863)【阅读建议：30min】
* [x] [面试官问：能否模拟实现JS的call和apply方法](https://juejin.im/post/5bf6c79bf265da6142738b29)【阅读建议：10min】
* [x] [JavaScript基础心法—— call apply bind](https://github.com/axuebin/articles/issues/7)【阅读建议：20min】
* [x] [回味JS基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)【阅读建议：10min】

### <a id="three-three"></a>3.3 手写深拷贝和浅拷贝

> [返回目录](#one)

* [x] [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/6844903929705136141)【阅读建议：2h】
* [x] [深拷贝的终极探索（90%的人都不知道）](https://juejin.im/post/5bc1ae9be51d450e8b140b0c)【阅读建议：1h】
* [x] [JavaScript基础心法——深浅拷贝](https://github.com/axuebin/articles/issues/20)【阅读建议：30min】
* [x] [JavaScript专题之深浅拷贝](https://github.com/mqyqingfeng/Blog/issues/32)【阅读建议：20min】
* [x] [javaScript中浅拷贝和深拷贝的实现](https://github.com/wengjq/Blog/issues/3)【阅读建议：20min】
* [x] [深入剖析 JavaScript 的深复制](https://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)【阅读建议：20min】
* [x] [「JavaScript」带你彻底搞清楚深拷贝、浅拷贝和循环引用](https://segmentfault.com/a/1190000015042902)【阅读建议：20min】
* [x] [面试题之如何实现一个深拷贝](https://github.com/yygmind/blog/issues/29)【阅读建议：30min】
* [x] [面试官:请你实现一个深克隆](https://juejin.im/post/6844903584023183368)【阅读建议：10min】

### <a id="three-four"></a>3.4 手写 Promise

> [返回目录](#one)

* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：写得比较细，没前面剖析的清晰】
