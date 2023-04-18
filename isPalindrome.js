const isPalindrome = (x) => {
  return x.split('').reverse().join('').toLowerCase() === x.toLowerCase()
    ? true
    : false;
};
console.log('Madam',isPalindrome('Madam')) // true
console.log('a',isPalindrome('a')) // true
console.log('',isPalindrome('')) // true
console.log('dfgDFGFD',isPalindrome('dfgDFGFD')) // false
