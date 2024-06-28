function fib(num) {
  let arr = [0, 1];
  if (typeof num != 'number') {
    return "";
  } else if (num === 1) {
    return '0'
  }
  else {
    for (let i = 2; i < num; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }

  return arr.join(" ");
}

console.log(fib(1));