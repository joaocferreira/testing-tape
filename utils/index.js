export const rules = {
  VOUCHER: 5.00,
  TSHIRT: 20.00,
  MUG: 7.50,
};

export const defaultPricingRules = {
  marketing(cart) {
    cart.VOUCHER = Math.ceil(cart.VOUCHER / 2);
  },
  CFO(cart) {
    if (cart.TSHIRT >= 3) {
      rules.TSHIRT = 19.00;
    }
  },
};

export function composeCheckoutRules(pricingRules) {
  const checkoutRules = pricingRules ?
    Object.assign({}, defaultPricingRules, pricingRules) : defaultPricingRules;
  return checkoutRules;
}
