import { CARD_BRAND } from './contexts';

type Brand = keyof typeof CARD_BRAND | 'etc';

interface UseCardTypeProps {
  firstCardNumbers: string;
}

export default function useCardType({ firstCardNumbers }: UseCardTypeProps): Brand {
  const { visa, master } = CARD_BRAND;

  const visaPrefix = Number(firstCardNumbers.slice(0, visa.prefixNumberCount));
  const masterPrefix = Number(firstCardNumbers.slice(0, master.prefixNumberCount));

  if (visaPrefix === visa.startNumber) return 'visa';

  if (masterPrefix >= master.startNumber && masterPrefix <= master.endNumber) return 'master';

  return 'etc';
}
