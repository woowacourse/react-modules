import {
  DEFAULT_FORMAT,
  FORMAT_SEPARATOR,
  NETWORK_FORMAT,
  NETWORK_LIST,
  NETWORK_RANGE,
  NetworkType,
} from './constants';

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
