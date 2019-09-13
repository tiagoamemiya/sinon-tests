const foo = require('./module');

const a = () => {
  return '>>>>>> ' + foo();
}

console.log(a());