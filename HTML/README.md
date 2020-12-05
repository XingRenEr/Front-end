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

* [x] [HTML5 标签](https://github.com/XingRenEr/Front-end/blob/master/HTML/HTML5%20%E6%A0%87%E7%AD%BE.md)
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

> [返回目录](#chapter-one)

本系列参考 4 篇文章。

* [x] [MDN - HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)【阅读建议：5min】
* [x] [html5语义化标签](https://rainylog.com/post/ife-note-1)【阅读建议：5min】
* [x] [块级元素与内联元素总结](https://blog.csdn.net/caoPengFlying/article/details/75334264)【阅读建议：5min】
* [x] [html中内联元素和块级元素的区别](https://www.cnblogs.com/dxzg/p/6423922.html)【阅读建议：5min】
