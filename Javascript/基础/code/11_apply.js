window.color = 'red';
var obj = {
  color: 'blue'
};
var getColor = () => {
  console.log(this.color);
}
getColor.call(obj); // red。 对箭头函数调用call方法，并不会改变this的指向。this指向定义时的上下文
