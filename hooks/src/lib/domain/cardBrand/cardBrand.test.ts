import { determineCardBrand } from './cardBrand';

describe('카드사 식별 기능 테스트', () => {
  describe('Diners', () => {
    // given
    const testCases = [
      { cardNumbers: '36', expectedCardBrand: 'diners' },
      { cardNumbers: '38', expectedCardBrand: 'none' },
    ];
    it.each(testCases)(
      '카드 번호가 "$cardNumbers"일 때, 매칭 된 카드 브랜드는 "$expectedCardBrand"다.',
      ({ cardNumbers, expectedCardBrand }) => {
        // when
        const cardBrand = determineCardBrand(cardNumbers);

        // then
        expect(cardBrand).toMatch(expectedCardBrand);
      },
    );
  });

  describe('Amex', () => {
    // given
    const testCases = [
      { cardNumbers: '34', expectedCardBrand: 'amex' },
      { cardNumbers: '37', expectedCardBrand: 'amex' },
      { cardNumbers: '35', expectedCardBrand: 'none' },
    ];
    it.each(testCases)(
      '카드 번호가 "$cardNumbers"일 때, 매칭 된 카드 브랜드는 "$expectedCardBrand"다.',
      ({ cardNumbers, expectedCardBrand }) => {
        // when
        const cardBrand = determineCardBrand(cardNumbers);

        // then
        expect(cardBrand).toMatch(expectedCardBrand);
      },
    );
  });

  describe('UnionPay', () => {
    // given
    const testCases = [
      { cardNumbers: '622125', expectedCardBrand: 'none' },
      { cardNumbers: '622126', expectedCardBrand: 'unionPay' },
      { cardNumbers: '622925', expectedCardBrand: 'unionPay' },
      { cardNumbers: '622926', expectedCardBrand: 'none' },
      { cardNumbers: '623', expectedCardBrand: 'none' },
      { cardNumbers: '624', expectedCardBrand: 'unionPay' },
      { cardNumbers: '626', expectedCardBrand: 'unionPay' },
      { cardNumbers: '627', expectedCardBrand: 'none' },
      { cardNumbers: '6281', expectedCardBrand: 'none' },
      { cardNumbers: '6282', expectedCardBrand: 'unionPay' },
      { cardNumbers: '6288', expectedCardBrand: 'unionPay' },
      { cardNumbers: '6289', expectedCardBrand: 'none' },
    ];
    it.each(testCases)(
      '카드 번호가 "$cardNumbers"일 때, 매칭 된 카드 브랜드는 "$expectedCardBrand"다.',
      ({ cardNumbers, expectedCardBrand }) => {
        // when
        const cardBrand = determineCardBrand(cardNumbers);

        // then
        expect(cardBrand).toMatch(expectedCardBrand);
      },
    );
  });

  describe('Visa', () => {
    // given
    const testCases = [
      { cardNumbers: '4', expectedCardBrand: 'visa' },
      { cardNumbers: '5', expectedCardBrand: 'none' },
    ];
    it.each(testCases)(
      '카드 번호가 "$cardNumbers"일 때, 매칭 된 카드 브랜드는 "$expectedCardBrand"다.',
      ({ cardNumbers, expectedCardBrand }) => {
        // when
        const cardBrand = determineCardBrand(cardNumbers);

        // then
        expect(cardBrand).toMatch(expectedCardBrand);
      },
    );
  });

  describe('Master', () => {
    // given
    const testCases = [
      { cardNumbers: '49', expectedCardBrand: 'visa' },
      { cardNumbers: '50', expectedCardBrand: 'master' },
      { cardNumbers: '55', expectedCardBrand: 'master' },
      { cardNumbers: '56', expectedCardBrand: 'none' },
    ];
    it.each(testCases)(
      '카드 번호가 "$cardNumbers"일 때, 매칭 된 카드 브랜드는 "$expectedCardBrand"다.',
      ({ cardNumbers, expectedCardBrand }) => {
        // when
        const cardBrand = determineCardBrand(cardNumbers);

        // then
        expect(cardBrand).toMatch(expectedCardBrand);
      },
    );
  });
});
