var lastRemaining = function(n, m) {
  var index = (m - 1) % n,
    flagArr = new Array(n).fill(true);
  flagArr[index] = false;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m; j++) {
      index = (index + 1) % n;
      while (!flagArr[index]) index = (index + 1) % n;
    }
    flagArr[index] = false;
  }
  return index;
};
