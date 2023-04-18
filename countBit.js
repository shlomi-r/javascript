//convert a number `n` to its binary representation 
//and return the number of `1`s
var countBits = function(n) {
  return n.toString(2).split('0').join('').length;
};
countBits(1234);
