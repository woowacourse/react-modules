import checkCardBrand from '../../lib/utils/checkCardBrand';

describe('checkCardBrand Util 테스트', () => {
  it.each(['4'])('%s로 시작하는 16자리 숫자의 카드는 Visa 카드이다.', (cardNumberPrefix) => {
    const restNumber = '1'.repeat(16 - cardNumberPrefix.length);
    expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('Visa');
  });

  it.each(['4'])(
    '%s로 시작하는 16자리가 아닌 숫자의 카드는 브랜드가 없는 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(15 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('');
    }
  );

  it.each(['51', '52', '53', '54', '55'])(
    '%s로 시작하는 16자리 숫자의 카드는 MasterCard 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(16 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('MasterCard');
    }
  );

  it.each(['51', '52', '53', '54', '55'])(
    '%s로 시작하는 16자리가 아닌 숫자의 카드는 브랜드가 없는 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(15 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('');
    }
  );

  it.each(['36'])('%s로 시작하는 14자리 숫자의 카드는 Diners 카드이다.', (cardNumberPrefix) => {
    const restNumber = '1'.repeat(14 - cardNumberPrefix.length);
    expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('Diners');
  });

  it.each(['36'])(
    '%s로 시작하는 14자리가 아닌 숫자의 카드는 브랜드가 없는 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(15 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('');
    }
  );

  it.each(['34', '37'])('%s로 시작하는 15자리 숫자의 카드는 AMEX 카드이다.', (cardNumberPrefix) => {
    const restNumber = '1'.repeat(15 - cardNumberPrefix.length);
    expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('AMEX');
  });

  it.each(['34', '37'])(
    '%s로 시작하는 15자리가 아닌 숫자의 브랜드가 없는 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(16 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('');
    }
  );

  it.each(['622126', '622925', '624', '625', '626', '6282', '6288'])(
    '%s로 시작하는 16자리 숫자의 카드는 유니온페이 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(16 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('유니온페이');
    }
  );

  it.each(['622126', '622925', '624', '625', '626', '6282', '6288'])(
    '%s로 시작하는 16자리가 아닌 숫자의 카드는 브랜드가 없는 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(15 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('');
    }
  );

  it.each(['622125', '622927', '623', '6281', '6289', '1'])(
    '특별한 조건없이 시작하는 카드(%s)는 브랜드가 없는 카드이다.',
    (cardNumberPrefix) => {
      const restNumber = '1'.repeat(16 - cardNumberPrefix.length);
      expect(checkCardBrand(cardNumberPrefix + restNumber)).toBe('');
    }
  );
});
