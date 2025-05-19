import { CARD_COMPANIES } from '../constants';

export type CardExpirationDate = 'month' | 'year';

export type CardCompany = (typeof CARD_COMPANIES)[number]['id'] | '';
