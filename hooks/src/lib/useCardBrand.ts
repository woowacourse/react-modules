import { CARD_BRAND } from './constants';

type Brand = keyof typeof CARD_BRAND | 'etc';

interface UseCardBrandProps {
  cardNumbers: string;
}

export default function useCardBrand({ cardNumbers }: UseCardBrandProps): Brand {
  const { visa, master } = CARD_BRAND;

  const visaPrefix = Number(cardNumbers.slice(0, visa.prefixNumberCount));
  const masterPrefix = Number(cardNumbers.slice(0, master.prefixNumberCount));

  if (visaPrefix === visa.startNumber) return 'visa';

  if (masterPrefix >= master.startNumber && masterPrefix <= master.endNumber) return 'master';

  return 'etc';
}
