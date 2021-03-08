浏览器
===
在整理 **浏览器** 相关题型的面试点中，产出了下面的 8 篇文章：

## 1 从输入 URL 到页面呈现
文章地址：[从输入 URL 到页面呈现](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E4%BB%8E%E8%BE%93%E5%85%A5%20URL%20%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%91%88%E7%8E%B0.md)  

知识点：

* [x] **整体过程**：DNS 解析 -> TCP 连接 -> 发送 HTTP 请求 -> 服务器响应 -> 浏览器解析渲染页面
* [x] **DNS 解析过程**：浏览器缓存 -> 系统缓存（host） -> 路由器缓存 -> ISP DNS 服务器 -> 递归查询
* [x] **TCP 连接**：建立连接阶段 -> 数据传输阶段 -> 断开连接阶段，3 次握手和 4 次挥手
* [x] **发送 HTTP 请求**：请求行、请求报文和请求正文，GET 和 POST 区别，HTTP 状态码
* [x] **服务器响应**：状态码、响应报头和响应报文
* [x] **浏览器解析渲染页面**：DOM 树 -> CSS 规则树 -> 渲染树（Render Tree） -> 布局渲染树（Layout tree） -> 绘制渲染树（Painting tree），回流和重绘
* [x] **性能优化**：……

## 2 本地存储
文章地址：[本地存储](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.md)

知识点：

* [x] **Cookie**
* [x] **Local Storage**
* [x] **Session Storage**
* [x] **IndexedDB**

## 3 浏览器缓存
文章地址：[浏览器缓存](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.md)

知识点：

  * [x] **缓存位置**：Service Worker、Memory Cache、Disk Cache、Push Cache
  * [x] **缓存过程**
  * [x] **缓存机制**：强缓存、协商缓存
  * [x] **缓存实例**：频繁变动的缓存、不常变化的资源

## 4 回流和重绘
文章地址：[回流和重绘](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98.md)

知识点：

* [x] **浏览器渲染过程**
* [x] **重绘**：修改背景色/颜色、设置可见度、设置背景图……
* [x] **回流**：添加/删除 DOM 元素、改变边框/边距/宽高、改变窗口大小……
* [x] **优化**：避免频繁操作 DOM，集中操作；避免 `table` 布局

## 5 跨域
文章地址：[跨域](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E8%B7%A8%E5%9F%9F.md)

知识点：

* [x] **同源策略**：什么是同源？为什么要设置跨域？
* [x] **解决跨域的方式**：JSONP、CORS、postMessage、WebSocket、Node、Nginx、其他

## 6 垃圾回收
文章地址：[垃圾回收](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md)

知识点：

* [x] **栈垃圾回收**：ESP 销毁
* [x] **堆垃圾回收**：新生代和老生代
* [x] **新生代**：`Scavenge` 算法，对象区域和空闲区域的转换，两次回收后还存在的进入老生区
* [x] **老生代**：标记-清除、标记-整理
* [x] **全停顿**：JavaScript 线程中垃圾回收和其他脚本交替执行

## 7 LRU 缓存淘汰策略
文章地址：[LRU 缓存淘汰策略](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/LRU%20%E7%BC%93%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.md)

知识点：

* [x] **常见淘汰策略**：先进先出（FIFO）、最少使用（LFU）、最近最少使用（LRU）
* [x] **最近最少使用**：如果数据最近被访问过，那么接下来被访问的概率也越高
* [x] **实现原理**：新数据插入到链表表头；链表中有数据被访问，也提升到表头；链表满后，链表尾部数据被淘汰

## 8 性能优化
文章地址：[性能优化](https://github.com/XingRenEr/Front-end/blob/master/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md)

知识点：

* [x] **从 URL 输入到页面解析过程查看性能优化点**：DNS 解析、TCP 连接、发送 HTTP 请求、服务器响应、浏览器解析渲染页面
* [x] **发送 HTTP 请求**：浏览器缓存、Cookie 和 Web Storage、CDN 的使用、负载均衡
* [x] **服务器响应**：Webpack 优化、图片优化、Gzip 压缩、服务端渲染（SSR）
* [x] **浏览器渲染解析页面**：渲染过程、渲染过程优化、回流和重绘优化
* [x] **其他**：Chrome 插件可视化、长列表、`preload` 预加载页面

## 9 延伸——**计算机网络**

* [x] [计算机网络 - DNS](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS.md)
* [x] [计算机网络 - TCP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP.md)

后面还会持续更新的吧！加油！
