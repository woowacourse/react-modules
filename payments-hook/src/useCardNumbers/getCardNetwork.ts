import { CardNetWork } from './useCardNumbers';

const CARD_NETWORKS: {
  prefixes: string[];
  length: number;
  name: CardNetWork;
}[] = [
  {
    prefixes: ['4'],
    length: 16,
    name: 'VISA',
  },
  {
    prefixes: ['51', '52', '53', '54', '55'],
    length: 16,
    name: 'MASTER',
  },
  {
    prefixes: ['36'],
    length: 14,
    name: 'DINERS',
  },

  {
    prefixes: ['34', '37'],
    length: 15,
    name: 'AMEX',
  },

  {
    prefixes: ['62'],
    length: 16,
    name: 'UNIONPAY',
  },
];

const getCardNetwork = (cardNumbers: string): CardNetWork => {
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
