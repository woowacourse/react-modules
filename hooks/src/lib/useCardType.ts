type Brand = 'visa' | 'master' | 'etc';

const CARD_BRAND = {
  visa: {
    startNumber: 4,
  },
  master: {
    startNumber: 51,
    endNumber: 55,
  },
};

export default function useCardType({ firstCardNumbers }: { firstCardNumbers: string }): Brand {
  const visaPrefix = Number(firstCardNumbers.slice(0, 1));
  const masterPrefix = Number(firstCardNumbers.slice(0, 2));

  const { visa, master } = CARD_BRAND;

  if (visaPrefix === visa.startNumber) return 'visa';

  if (masterPrefix >= master.startNumber && masterPrefix <= master.endNumber) return 'master';

  return 'etc';
}
