import { CardExpiration, CardNumber } from '../types/card';

const INITIAL_CARD_NUMBER: CardNumber = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const INITIAL_CARD_EXPIRATION: CardExpiration = {
  month: '',
  year: '',
};

const CARD_NUMBER_KEYS = Object.keys(INITIAL_CARD_NUMBER) as Array<keyof CardNumber>;

const CARD_EXPIRATION_KEYS = Object.keys(INITIAL_CARD_EXPIRATION) as Array<keyof CardExpiration>;

export { INITIAL_CARD_NUMBER, INITIAL_CARD_EXPIRATION, CARD_NUMBER_KEYS, CARD_EXPIRATION_KEYS };
