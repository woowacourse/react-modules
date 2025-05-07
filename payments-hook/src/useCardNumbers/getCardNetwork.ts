const CARD_NETWORKS = [
  {
    prefixes: ['4'],
    length: 16,
    name: 'visa',
  },
  {
    prefixes: ['51', '52', '53', '54', '55'],
    length: 16,
    name: 'master',
  },
  {
    prefixes: ['36'],
    length: 14,
    name: 'diners',
  },

  {
    prefixes: ['34', '37'],
    length: 15,
    name: 'amex',
  },

  {
    prefixes: ['62'],
    length: 16,
    name: 'unionPay',
  },
];

const getCardNetwork = (cardNumbers: string) => {
  const cardNetwork = CARD_NETWORKS.find(
    (network) =>
      matchesPrefix(network.prefixes, cardNumbers) &&
      cardNumbers.length <= network.length
  )?.name;

  return cardNetwork;
};

const matchesPrefix = (prefixes: string[], cardNumbers: string) =>
  prefixes.some((prefix) => cardNumbers.startsWith(prefix));

export default getCardNetwork;
