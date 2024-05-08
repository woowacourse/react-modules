type GetCardPrefix = {
  cardNumbers: string;
  length: number;
};

const getCardPrefix = ({ cardNumbers, length }: GetCardPrefix) => {
  return Number(cardNumbers.slice(0, length));
};

export default getCardPrefix;
