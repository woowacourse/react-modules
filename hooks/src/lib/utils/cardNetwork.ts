const NETWORK_LIST = {
  visa: ['4'],
  master: ['51', '52', '53', '54', '55'],
  diners: ['36'],
  amex: ['34', '37'],
  union: [
    '624',
    '625',
    '626',
    '6282',
    '6283',
    '6284',
    '6285',
    '6286',
    '6287',
    '6288',
  ],
};

const NETWORK_RANGE = {
  union: { start: 622126, end: 622925 },
};

export const identifyNetworkByList = (cardNumbers: string) => {
  const identifiedNetwork = Object.entries(NETWORK_LIST).find(
    ([_, identifyNumbers]) => {
      return identifyNumbers.some((number) => cardNumbers.startsWith(number));
    }
  );

  return identifiedNetwork ? identifiedNetwork[0] : '';
};

export const identifyNetworkByRange = (cardNumbers: string) => {
  const identifiedNetwork = Object.entries(NETWORK_RANGE).find(([_, range]) => {
    const parsedNumber = Number(cardNumbers);
    return parsedNumber >= range.start && parsedNumber <= range.end;
  });

  return identifiedNetwork ? identifiedNetwork[0] : '';
};
