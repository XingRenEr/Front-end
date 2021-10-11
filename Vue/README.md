# 响应式原理

<img src="README.assets/image-20211011171143631.png" alt="image-20211011171143631" style="zoom: 50%;" />

> At the top, we have our data object and our variables.
>
> We have our Dep class with our storage, our depend method
>
> and our notify method to rerun each of our subscribers.

<img src="README.assets/image-20211011171205621.png" alt="image-20211011171205621" style="zoom:67%;" />

> Further down, we go through each keys of our object,
>
> get our internal value, instantiate our Dep class,
>
> go through call define property.
>
> There's our get method, there's our set method.

<img src="README.assets/image-20211011171309266.png" alt="image-20211011171309266" style="zoom:67%;" />

> Further down, we have our watcher function, which is
>
> a little simplified.
>
> We just set our target, run it and then unset it.

<img src="README.assets/image-20211011171332253.png" alt="image-20211011171332253" style="zoom:67%;" />

<img src="README.assets/image-20211011171354158.png" alt="image-20211011171354158" style="zoom:67%;" />

> And then down here, we have two watchers for running
>
> the total and the sale price.

![image-20211011171742548](README.assets/image-20211011171742548.png)

> As you can see here, we have data getters and setter.
>
> That's using object define property.
>
> When get is run on a reactive property, we collect it
>
> as a dependency and call dep depend on our Dep class,
>
> and when our property is set, we call dep notify also
>
> on our Dep class.
>
> Notice Vue also has a watcher.
>
> It's also much more complex than the watcher we wrote,
>
> and we'll get there in future lessons.

![image-20211011171918745](README.assets/image-20211011171918745.png)

# $nextTick

- [x] [面试必考：真的理解 $nextTick 么](https://jishuin.proginn.com/p/763bfbd2be01)

