import { getCardType } from './card';

describe('getCardType 유틸 함수 테스트', () => {
  it('카드 앞 번호가 4로 시작하면 VISA 카드이다.', () => {
    expect(getCardType('4')).toBe('VISA');
  });

  it.each([51, 52, 53, 54, 55])('카드 앞 번호가 %i로 시작하면 MASTERCARD 카드이다.', (prefix) => {
    expect(getCardType(prefix.toString())).toBe('MASTERCARD');
  });

  it('카드 앞 번호가 36로 시작하면 Diners 카드이다.', () => {
    expect(getCardType('36')).toBe('DINERS');
  });

  it.each([35, 37])('카드 앞 번호가 %i로 시작하면 Diners 카드가 아니다.', (prefix) => {
    expect(getCardType(prefix.toString())).not.toBe('DINERS');
  });

  it.each([34, 37])('카드 앞 번호가 %i로 시작하면 AMEX 카드이다.', (prefix) => {
    expect(getCardType(prefix.toString())).toBe('AMEX');
  });

  it.each([33, 35, 36, 38])('카드 앞 번호가 %i로 시작하면 AMEX 카드가 아니다.', (prefix) => {
    expect(getCardType(prefix.toString())).not.toBe('AMEX');
  });

  it.each([622126, 622925, 624, 625, 626, 6282, 6288])(
    '카드 앞 번호가 %i로 시작하면 유니온페이 카드이다.',
    (prefix) => {
      expect(getCardType(prefix.toString())).toBe('UNIONPAY');
    },
  );

  it.each([622125, 622926, 623, 627, 6281, 6289])(
    '카드 앞 번호가 %i로 시작하면 유니온페이 카드가 아니다.',
    (prefix) => {
      expect(getCardType(prefix.toString())).not.toBe('UNIONPAY');
    },
  );
});
