const bar = require('./bar');
module.exports = () => {
  let res = 'FOOOOOOOOOO';
  res += bar.bar();

  return res;
}
