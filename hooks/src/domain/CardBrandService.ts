const CardBrandService = (value: string) => {
  if (value.startsWith('36')) return 'Diners';

  if (value.startsWith('34') || value.startsWith('37')) return 'AMEX';

  const prefix = parseInt(value.substring(0, 6));
  const isUnionPay622126_622925 = prefix >= 622126 && prefix <= 622925;
  const isUnionPay624_626 =
    parseInt(value.substring(0, 3)) >= 624 &&
    parseInt(value.substring(0, 3)) <= 626;
  const isUnionPay6282_6288 =
    parseInt(value.substring(0, 4)) >= 6282 &&
    parseInt(value.substring(0, 4)) <= 6288;
  if (isUnionPay622126_622925 || isUnionPay624_626 || isUnionPay6282_6288)
    return 'UnionPay';

  return 'None';
};

export default CardBrandService;
