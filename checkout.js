const rules = {
  VOUCHER: 5.00,
  TSHIRT: 20.00,
  MUG: 7.50,
};

const defaultPricingRules = {
  marketing(cart) {
    cart.VOUCHER = Math.ceil(cart.VOUCHER / 2);
  },
  CFO(cart) {
    if (cart.TSHIRT >= 3) {
      rules.TSHIRT = 19.00;
    }
  },
};

function checkout(pricingRules = {}) {
  const checkoutRules = Object.assign({}, defaultPricingRules, pricingRules);
  const cart = {};

  return {
    scan(item) {
      if (rules[item]) {
        cart[item] = cart[item] || 0;
        cart[item] += 1;
      }
      return this;
    },
    total() {
      Object
        .values(checkoutRules)
        .map(f => f(cart));

      const price = Object.keys(cart)
        .map(key => cart[key] * rules[key])
        .reduce((sum, value) => sum + value, 0);

      return `${price.toFixed(2)}€`;
    },
  };
}

module.exports = checkout;
