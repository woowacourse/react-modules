import { NetworkType } from '../constants';

const NETWORK_LIST = new Map<NetworkType, string[]>([
  ['visa', ['4']],
  ['master', ['51', '52', '53', '54', '55']],
  ['diners', ['36']],
  ['amex', ['34', '37']],
  [
    'union',
    [
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
  ],
]);

interface RangeType {
  start: number;
  end: number;
}

const NETWORK_RANGE = new Map<Partial<NetworkType>, RangeType>([
  ['union', { start: 622126, end: 622925 }],
]);

const NETWORK_FORMAT: Record<NetworkType, number[]> = {
  visa: [4, 4, 4, 4],
  master: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  union: [4, 4, 4, 4],
} as const;

const DEFAULT_FORMAT = [4, 4, 4, 4];

const FORMAT_SEPARATOR = '-';

export const identifyNetworkByList = (
  cardNumbers: string
): NetworkType | '' => {
  for (const [network, identifyNumbers] of NETWORK_LIST) {
    if (identifyNumbers.some((number) => cardNumbers.startsWith(number))) {
      return network;
    }
  }

  return '';
};

export const identifyNetworkByRange = (
  cardNumbers: string
): NetworkType | '' => {
  for (const [network, range] of NETWORK_RANGE) {
    const parsedNumber = Number(cardNumbers);
    if (parsedNumber >= range.start && parsedNumber <= range.end) {
      return network;
    }
  }

  return '';
};

export const formatNumbersByNetwork = (
  cardNumbers: string,
  network: NetworkType | ''
) => {
  const format = network ? NETWORK_FORMAT[network] : DEFAULT_FORMAT;
  const numbersArray = cardNumbers.split('');

  return format
    .reduce<string[]>((result, number) => {
      if (numbersArray.length !== 0) {
        return [...result, numbersArray.splice(0, number).join('')];
      }

      return result;
    }, [])
    .join(FORMAT_SEPARATOR);
};

export const removeFormat = (formattedNumbers: string) => {
  return formattedNumbers.split(FORMAT_SEPARATOR).join('');
};
