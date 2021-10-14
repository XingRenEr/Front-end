- [x] [最全的 Vue 面试题+详解答案](https://juejin.cn/post/6961222829979697165)

- [x] 响应式/双向数据绑定

  [Vue响应式原理](https://juejin.cn/post/6844903597986037768)

  [【视频】vue双向数据绑定原理](https://www.bilibili.com/video/BV1Dr4y1c7xS)

- [x] [x] 

# Vue 优点

- 轻量级、渐进式框架

- 虚拟DOM与differ算法

  是在传统开发中，用JQuery或者原生的JavaScript DOM操作函数对DOM进行频繁操作的时候，浏览器要不停的渲染新的DOM树，导致页面看起来非常卡顿。

  虚拟DOM预先通过JavaScript进行各种计算，只操作变更部分。

- 响应式与双向数据绑定

  响应式：Vue状态变化 -> 更新相应数据 + 视图

  双向数据绑定：通过v-model属性绑定input标签的value与Vue的状态，两者同步改变，并更新相应数据 + 视图

- 组件化

  借鉴模块化的思想，将问题拆解为子问题（分治思想），并可实现代码的复用

# 响应式原理

**响应式简述**：

修改Vue中的data，该赋值操作会被Vue监听（劫持）到 -> Vue将数据的变化，通知给每个订阅者 -> 订阅者（DOM元素）根据最新数据更新内容。

<img src="README.assets/image-20211011171918745.png" alt="image-20211011171918745" style="zoom: 67%;" />

其中，依赖收集是通过`Dep`类实现的。该类包含了用来存储订阅信息的`subscribers`数组、用来追加订阅信息的`depend`方法、用来重新执行所有订阅信息的`notify`方法。

劫持是通过`Object.defineProperty()`的`getter`和`setter`实现的。遍历 `data` 对象，为每一个属性（也就是Vue的状态）创建依赖收集器，通过`get()`劫持取值操作，通过`set()`劫持赋值操作。当响应式属性被获取，在`getter`内部会调用`dep.depend()`，订阅信息被依赖收集器（`dep`）收集；当属性被重新赋值，在`setter`内部会调用`dep.notify()`来触发与该属性相关的全部订阅信息。

事件的订阅是通过`watcher`实现的。订阅者（DOM元素）与Vue的状态相关联，将订阅信息传给`watcher`，订阅信息会自动被依赖收集器存储，在相应的Vue状态改变时，订阅信息会被自动地触发，即订阅者根据最新数据更新内容。

**技术点**：

- 发布订阅模式

  `Dep` 类：依赖收集

  `Watcher` 类：订阅一些事件

- `Object.defineProperty()` **数据劫持**

**手撕（简易版）**： 

| `data` 对象中存储着变量                                      | <img src="README.assets/image-20211011171143631.png" alt="image-20211011171143631" style="zoom: 50%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Dep` 类（**依赖收集**）中有：<br/>①`subscribers` 数组：用来存储所有的订阅信息<br/>②`depend` 方法：追加订阅信息，**收集订阅**<br/>③`notify` 方法：循环触发数组中的每个订阅信息，**发布订阅** | <img src="README.assets/image-20211011171205621.png" alt="image-20211011171205621" style="zoom:60%;" /> |
| 遍历 `data` 对象；<br/>创建 `Dep` 类的实例；<br/>调用 `defineProperty` 设置 `get()` 和 `set()`，**数据劫持** | <img src="README.assets/image-20211011171309266.png" alt="image-20211011171309266" style="zoom:60%;" /> |
| `watcher` 负责**订阅一些事件**<br/>简化的 `watcher`：设置 `target`，执行，重置<br/>代码中有两个`watcher`分别负责计算`total`和`sale price` | <img src="README.assets/image-20211011171332253.png" alt="image-20211011171332253" style="zoom:60%;" /><br/><img src="README.assets/image-20211011171354158.png" alt="image-20211011171354158" style="zoom:60%;" /> |

# $nextTick

- [x] [面试必考：真的理解 $nextTick 么](https://jishuin.proginn.com/p/763bfbd2be01)

# keep-alive
