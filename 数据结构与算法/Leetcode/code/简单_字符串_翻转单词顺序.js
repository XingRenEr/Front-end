var reverseWords = function(s) {
  s = s.trim();
  var arr = s.split(/\s+/);
  return arr.reverse().join(' ');
};
var str = reverseWords('  a good   example  ');
