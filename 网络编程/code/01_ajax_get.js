//1.创建Ajax对象
var xhr = new XMLHttpRequest();
//4.监听请求
xhr.onreadystatechange = function() {
  //当xhr对象的readystate属性发生了改变,这个事件就会触发
  //readystate:
  //0 ===> xhr对象已经创建,但是还没有进行初始化操作
  //1 ===> xhr对象已经调用open
  //2 ===> xhr已经发出ajax请求
  //3 ===> 已经返回了部分数据
  //4 ===> 数据已经全部返回
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status >= 200 && xhr.status <= 300) { //请求成功
    // 数据在xhr.responseText属性中(String类型)
    document.querySelector("h1").innerText = xhr.responseText;
  } else {
    console.error('请求失败');
  }
}
//2.打开这个对象
xhr.open('get', './text.txt', true);
//3.发送请求
xhr.send();