var spiralOrder = function(matrix) {
  var j = 0; // 用于判断是第几行/列
  var newMatrix = [];

  while (matrix.length !== 0) {
    switch (j++ % 4) {
      case 0:
        newMatrix = [...newMatrix, ...matrix.shift()];
        break;
      case 1:
        matrix.forEach((item) => {
          newMatrix.push(item.pop());
        });
        if (matrix[0] && matrix[0].length === 0) { // 防止[[],[],[]]这种情况出现
          matrix = [];
        }
        break;
      case 2:
        newMatrix = [...newMatrix, ...matrix.pop().reverse()];
        break;
      case 3:
        for (let i = matrix.length - 1; i >= 0; i--) {
          newMatrix.push(matrix[i].shift());
        }
        if (matrix[0] && matrix[0].length === 0) { // 防止[[],[],[]]这种情况出现
          matrix = [];
        }
    }
  }

  return newMatrix;
};

var matrix = [
  [7],
  [9],
  [6]
];
console.log(spiralOrder(matrix));
