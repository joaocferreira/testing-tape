import test from 'tape';
import checkout from './checkout';

const pricingRules = {};

test('test checkout factory', (assert) => {
  const co1 = checkout(pricingRules);

  assert.plan(3);

  assert.equal(typeof co1, 'object', 'Expect checkout to be an object');

  assert.equal(typeof co1.scan, 'function', 'Expect checkout.scan to be a function');

  assert.equal(typeof co1.total, 'function', 'Expect checkout.total to be a function');

  assert.end();
});

test('test checkout.total', (assert) => {
  const price1 = checkout(pricingRules)
    .scan('VOUCHER')
    .scan('TSHIRT')
    .scan('MUG')
    .total();

  const price2 = checkout(pricingRules)
    .scan('VOUCHER')
    .scan('TSHIRT')
    .scan('VOUCHER')
    .total();

  const price3 = checkout(pricingRules)
    .scan('TSHIRT')
    .scan('TSHIRT')
    .scan('TSHIRT')
    .scan('VOUCHER')
    .scan('TSHIRT')
    .total();

  const price4 = checkout(pricingRules)
    .scan('VOUCHER')
    .scan('TSHIRT')
    .scan('VOUCHER')
    .scan('VOUCHER')
    .scan('MUG')
    .scan('TSHIRT')
    .scan('TSHIRT')
    .total();

  assert.plan(4);

  assert.equal(price1, '32.50€', 'expected price1 to be 32.50€');
  assert.equal(price2, '25.00€', 'expected price2 to be 25.00€');
  assert.equal(price3, '81.00€', 'expected price3 to be 81.00€');
  assert.equal(price4, '74.50€', 'expected price4 to be 74.50€');

  assert.end();
});
