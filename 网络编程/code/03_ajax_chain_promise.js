function getPara1() {
  return new Promise(function(resolve, reject) {
    $.get('./p1.txt', function(p1) { // 获得了返回值，才会改变promise对象的状态
      resolve(p1);
    })
  })
}

function getPara2() {
  return new Promise(function(resolve, reject) {
    $.get('./p2.txt', function(p2) { // 获得了返回值，才会改变promise对象的状态
      resolve(p2);
    })
  })
}

function getPara3() {
  return new Promise(function(resolve, reject) {
    $.get('./p3.txt', function(p3) { // 获得了返回值，才会改变promise对象的状态
      resolve(p3);
    })
  })
}

function getPara4() {
  return new Promise(function(resolve, reject) {
    $.get('./p4.txt', function(p4) { // 获得了返回值，才会改变promise对象的状态
      resolve(p4);
    })
  })
}

var artical = '';
getPara1().then(function(p1) {
  artical += p1 + '<br />';
  return getPara2();
}).then(function(p2) {
  artical += p2 + '<br />';
  return getPara3();
}).then(function(p3) {
  artical += p3 + '<br />';
  return getPara4();
}).then(function(p4) {
  artical += p4 + '<br />';
  $('p').html(artical);
})