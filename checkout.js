const rules = {
  VOUCHER: 5.00,
  TSHIRT: 20.00,
  MUG: 7.50,
};

function checkout() {
  let price = 0;
  return {
    scan(item) {
      if (rules[item]) {
        price += rules[item];
      }
      return this;
    },
    total() {
      return `${price.toFixed(2)}€`;
    },
  };
}

module.exports = checkout;
