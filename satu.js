function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[\W_]+/g,'');
    return str == str.split('').reverse().join('');
  }
  console.log(palindrome('mak am'))