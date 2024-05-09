const getCardNumberMaxLength = (cardBrand: BrandType) => {
  if (cardBrand === "Diners") return 14;
  if (cardBrand === "AMEX") return 15;
  return 16;
};

export default getCardNumberMaxLength;
