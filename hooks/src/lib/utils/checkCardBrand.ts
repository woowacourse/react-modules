import getRangeStringList from './getRangeStringList';

const checkCardBrand = (cardNumber: string) => {
  if (cardNumber.startsWith('4') && cardNumber.length === 16) return 'Visa';
  for (let prefix of getRangeStringList(51, 55))
    if (cardNumber.startsWith(prefix) && cardNumber.length === 16) return 'MasterCard';
  if (cardNumber.startsWith('36') && cardNumber.length === 14) return 'Diners';
  for (let prefix of ['34', '37'])
    if (cardNumber.startsWith(prefix) && cardNumber.length === 15) return 'AMEX';
  for (let prefix of getRangeStringList(622126, 622925))
    if (cardNumber.startsWith(prefix) && cardNumber.length === 16) return '유니온페이';
  for (let prefix of getRangeStringList(624, 626))
    if (cardNumber.startsWith(prefix) && cardNumber.length === 16) return '유니온페이';
  for (let prefix of getRangeStringList(6282, 6288))
    if (cardNumber.startsWith(prefix) && cardNumber.length === 16) return '유니온페이';

  return '';
};

export default checkCardBrand;
