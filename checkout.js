import { rules, composeCheckoutRules } from './utils';

function checkout(pricingRules) {
  const checkoutRules = composeCheckoutRules(pricingRules);
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
        .forEach(f => f(cart));

      const price = Object.keys(cart)
        .reduce((sum, key) => sum + (cart[key] * rules[key]), 0);

      return `${price.toFixed(2)}€`;
    },
  };
}

module.exports = checkout;
