let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 2000);
});

promise.then(function() {
  console.log('resolve');
});