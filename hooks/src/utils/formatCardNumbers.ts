const formatCardNumbers = (cardBrand: string, value: string) => {
  let formattedValue = [];

  switch (cardBrand) {
    case 'Diners':
      formattedValue = [
        value.substring(0, 4),
        value.substring(4, 10),
        value.substring(10, 14),
      ];
      break;
    case 'AMEX':
      formattedValue = [
        value.substring(0, 4),
        value.substring(4, 10),
        value.substring(10, 15),
      ];
      break;
    default:
      formattedValue = [
        value.substring(0, 4),
        value.substring(4, 8),
        value.substring(8, 12),
        value.substring(12, 16),
      ];
      break;
  }
  return formattedValue;
};

export default formatCardNumbers;
