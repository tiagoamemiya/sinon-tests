const assert = require('assert');
const sinon = require('sinon');
const bar = require('../bar');
const foo = require('../module');

describe('nested function', function () {
  beforeEach(function () {
    sinon.stub(bar, 'bar').returns("!!!!!!!!!!!");
  });
  afterEach(function(){
    sinon.restore();
  })
  it('should call nested function', function () {
    const res = foo();
    assert('FOOOOOOOOOO!!!!!!!!!!!', res);
  });
});