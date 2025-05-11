import { CardCompany } from './card';

import { CardExpirationDate } from './card';

export type CardNumberInput = Record<'cardNumber', string>;
export type CardExpirationDateInput = Record<CardExpirationDate, string>;
export type CardCVCNumberInput = Record<'cvc', string>;
export type CardPasswordInput = Record<'password', string>;
export type CardCompanyInput = Record<'company', CardCompany>;
