import { CardExpiration } from './card.type';

const INITIAL_CARD_EXPIRATION: CardExpiration = {
  month: '',
  year: '',
};

const CARD_EXPIRATION_KEYS = Object.keys(INITIAL_CARD_EXPIRATION) as Array<keyof CardExpiration>;

export { INITIAL_CARD_EXPIRATION, CARD_EXPIRATION_KEYS };
