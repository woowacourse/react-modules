export type KnownCardCompany = 'Visa' | 'MasterCard' | 'AMEX' | 'Diners' | 'UnionPay' | 'Unknown';
export type CardCompany = KnownCardCompany | (string & {});
