export const getCardNumberLength = (brand: string) => {
  switch (brand) {
    case 'Visa':
    case 'Master':
    case 'UnionPay':
      return 16;
    case 'Diners':
      return 14;
    case 'AMEX':
      return 15;
  }
};
