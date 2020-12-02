onmessage = (res) => {
  // Worker 接收数据
  console.log('Worker 收到数据：', res);
  // Worker 收到数据：
  // MessageEvent {isTrusted: true, data: "查房，这里是 index.html！", origin: "", lastEventId: "", source: null, …}

  // Worker 发送数据
  postMessage('开门！这里是 index.js');
}