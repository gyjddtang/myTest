function first() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('第一次');
    }, 2000);
  });
}

function second() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('第二次');
    }, 2000);
  });
}

first()
  .then(function(val) {
    console.log(val);
    return second();
  })
  .then(val => {
    console.log(val);
  });