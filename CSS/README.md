CSS
===

> Create by **jsliang** on **2020-09-01 20:50:57**  
> Recently revised in **2020-10-23 00:25:08**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 复习知识点](#chapter-two) |
| &emsp;[2.1 基础](#chapter-two-one) |
| &emsp;[2.2 盒子模型](#chapter-two-two) |
| &emsp;[2.3 移动端](#chapter-two-three) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
| &emsp;[3.1 面试](#chapter-three-one) |
| &emsp;[3.2 布局](#chapter-three-two) |
| &emsp;[3.3 Flex](#chapter-three-three) |
| &emsp;[3.4 移动端](#chapter-three-four) |
| &emsp;[3.5 CSS](#chapter-three-five) |
| &emsp;[3.6 CSS3](#chapter-three-six) |
| &emsp;[3.7 层叠上下文](#chapter-three-seven) |
| &emsp;[3.8 BFC 块格式化上下文](#chapter-three-eight) |
| &emsp;[3.9 其他](#chapter-three-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 复习知识点

> [返回目录](#chapter-one)

复习知识点有 3 个部分。

### <a name="chapter-two-one" id="chapter-two-one"></a>2.1 基础

> [返回目录](#chapter-one)

文章地址：[基础](https://github.com/XingRenEr/Front-end/blob/master/CSS/%E5%9F%BA%E7%A1%80.md)

* [x] DIV + CSS 布局优缺点
* [x] **LoVe HAte 原则**：`a` 标签 `hover` 事件失效问题，`link -> visited -> hover -> active`
* [x] **响应式**：一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本，通过 `@media` 检测不同设备屏幕尺寸做处理
* [x] **垂直居中**
  * [x] `Flex` 布局：`align-items` 和 `justify-content`
  * [x] 绝对定位布局：`absolute` + `left/right/bottom/top: 0` + `margin: auto`
  * [x] `transform` 布局：`absolute` + `transform: translate(-50%, -50%)`
* [x] **文档流**：将窗体自上而下分成一行一行，并在每行中按从左至右一次排放元素，成为文档流，也就普通流
* [x] **脱离文档流**：脱离文档流的元素，将不再在文档流占据空间，而是漂浮在文档流上方。`float: left/right` 以及 `position: absolute/fixed`
* [x] **块级作用域上下文（BFC）**
  * [x] 阐释：指页面上一个隔离的独立容器，容器内部的子元素不会影响到外面的元素，反之外面的元素也不会影响容器里面的元素
  * [x] 解决问题：清除元素内部浮动、解决外边距合并问题
  * [x] 产生条件：根元素 `html`、`float: left/right`、`position: absolute/fixed`、`display: inline-block/flex/grid`、`overflow: hidden`
* [x] **`px`、`em`、`rem` 和 `vw/vh` 区别**
* [x] **`link` 和 `@import` 区别**
* [x] **渐进增减和优雅降级**
* [x] **设置隐藏元素**：`display: none`、`visibility: hidden`、`opacity: 0`
* [x] **CSS 选择器**
  * [x] 在属性后面使用 `!important` 会覆盖页面任意位置定义的元素样式
  * [x] 作为 `style` 属性写在元素内的样式（行内样式）
  * [x] `id` 选择器
  * [x] 类选择器 | 伪类选择器 | 属性选择器（后面样式覆盖前面样式）
  * [x] 标签选择器
  * [x] 通配符选择
  * [x] 浏览器自定义样式
* [x] **层叠上下文**：`background/border`、`z-index` 为负值、块级元素、浮动元素、行内元素、`z-index: 0 / auto`、`z-index` 为正值
* [x] **display**：`inline`、`block`、`inline-block`、`table`、`none`
* [x] **position**：`static`、`relative`、`position`、`fixed`、`sticky`
* [x] **CSS 3 新特性**
* [x] **CSS 优化**
  * [x] 避免链式选择符（从右往左匹配规则）
  * [x] 避免不必要重复
  * [x] 避免 `*` 通配符
  * [x] 规定引入位置：在 `head` 定义 `link`

### <a name="chapter-two-two" id="chapter-two-two"></a>2.2 盒子模型

> [返回目录](#chapter-one)

文章地址：[盒子模型](https://github.com/XingRenEr/Front-end/blob/master/CSS/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.md)

* [x] **标准盒子**：标准盒子的 `contentWidth` 等于设置的 `width`，它的`实际总宽度 = width + padding + border + margin`。（高度也一样）
* [x] **怪异盒子**：怪异盒子的 `contentWidth` 等于设置的 `width + padding + border`，它的`实际总宽度 = contentWidth + margin`。（高度也一样）
* [x] **设置盒子模式**：`inherit` 继承、`content-box` 标准盒子、`border-box` 怪异盒子

### <a name="chapter-two-three" id="chapter-two-three"></a>2.3 移动端

> [返回目录](#chapter-one)

文章地址：[移动端](https://github.com/XingRenEr/Front-end/blob/master/CSS/%E7%A7%BB%E5%8A%A8%E7%AB%AF.md)

* [x] **使用单位**：`em`、`rem`、`%` 以及 `vw/vh`
* [x] **布局**：使用 `rem` 单位、通过 `position: relative/absolute` 布局、`Flex` 布局
* [x] **1px 实现**：利用 `::after` 伪类 + `transform: scaleY(0.5)`、利用 `box-shadow: 0 0.5 0 0 #ccc`
* [x] **300ms 点击延迟**
  * [x] 为什么出现：需要通过延迟判断用户是需要单击还是双击
  * [x] 如何解决：设置 `<meta>`、通过 `FastClick` 库
