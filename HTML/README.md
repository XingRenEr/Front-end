HTML
===

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 复习知识点](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 层级关系](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 参考文献](#chapter-four) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 复习知识点

> [返回目录](#chapter-one)

HTML 复习点并不多，可能用的标签之类的不多吧~  

* [x] HTML5
  *  [HTML5 标签](https://github.com/XingRenEr/Front-end/blob/master/HTML/HTML5%20%E6%A0%87%E7%AD%BE.md)
  *  元素
    *  表单。新增 type：color emial data range
    *  图形。canvas 绘图，支持内联SVG。支持MathML
    *  多媒体。audio video source embed track
  *  API
    *  地理定位
    *  拖放
    *  存储
      *  Web Storage。LocalStorage、SessionStorage
      *  本地离线存储，把需要离线存储在本地的文件列在一个 manifest 配置文件
  *  Web Workers(多线程编程)
  *  WebSocket(多线程编程)
* [x] [行内元素和块级元素](https://github.com/XingRenEr/Front-end/blob/master/HTML/%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E5%92%8C%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0.md)

## <a name="chapter-three" id="chapter-three"></a>三 层级关系

> [返回目录](#chapter-one)

`docoment`、`window`、`html`、`body` 的层级关系

```js
window > document > html > body
```

* `window` 是 `BOM` 的核心对象，它一方面用来获取和设置浏览器的属性和行为，另一方面作为一个全局对象。
* `document` 对象是一个跟文档相关的对象，拥有一些操作文档内容的功能，但是地位没有 `window` 高。
* `html` 元素对象跟 `document` 元素对象是属于 `html` 文档的 `DOM` 对象，可以认为就是 `html` 源代码中那些标签化成的对象，它们跟 `div`、`select` 这些对象没有什么根本区别。

## <a name="chapter-four" id="chapter-four"></a>四 参考文献
* [x] [iframe标签](https://www.jianshu.com/p/d67b15802a70)  
* [x] 

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。