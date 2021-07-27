var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length == 0) return false;
  var l1 = l2 = 0,
    r1 = matrix[0].length - 1,
    r2 = matrix.length - 1, // 左右指针，上下指针
    m1, m2;
  while (l1 < r1) { // 确定左右范围
    m1 = Math.floor((l1 + r1) / 2);
    if (matrix[0][m1] == target) return true;
    else if (matrix[0][m1] < target) l1 = m1 + 1;
    else r1 = m1;
  }
  l1 = 1, r1--;
  while (l2 < r2) { // 确定上下范围
    m2 = Math.floor((l2 + r2) / 2);
    if (matrix[m2][0] == target) return true;
    else if (matrix[m2][0] < target) l2 = m2 + 1;
    else r2 = m2;
  }
  for (let i = 1; i < m2; i++) {
    if (l1 == r1) {
      if (matrix[i][l1] == target) return true;
    }
    while (l1 < r1) {
      m1 = Math.floor((l1 + r1) / 2);
      if (matrix[i][m1] == target) return true;
      else if (matrix[i][m1] < target) l1 = m1 + 1;
      else r1 = m1;
    }
  }
  return false;
};

var matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

console.log(findNumberIn2DArray(matrix, 5));
