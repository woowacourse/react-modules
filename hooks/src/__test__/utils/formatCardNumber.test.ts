import formatCardNumber from '../../lib/utils/formatCardNumber';

describe('formatCardNumber Util 테스트', () => {
  it.each(['Visa', 'MasterCard', '유니온페이'])(
    '16자리 숫자의 (%s) 카드가 들어오면 4-4-4-4 포맷팅 결과를 반환한다.',
    (brand) => {
      const cardNumber = '1'.repeat(16);
      expect(formatCardNumber(cardNumber, brand)).toEqual(['1111', '1111', '1111', '1111']);
    }
  );

  it.each(['Diners'])(
    '14자리 숫자의 (%s) 카드가 들어오면 4-6-4 포맷팅 결과를 반환한다.',
    (brand) => {
      const cardNumber = '1'.repeat(14);
      expect(formatCardNumber(cardNumber, brand)).toEqual(['1111', '111111', '1111']);
    }
  );

  it.each(['AMEX'])('15자리 숫자의 (%s) 카드가 들어오면 4-6-5 포맷팅 결과를 반환한다.', (brand) => {
    const cardNumber = '1'.repeat(15);
    expect(formatCardNumber(cardNumber, brand)).toEqual(['1111', '111111', '11111']);
  });

  it('카드 브랜드가 없거나 입력하지 않으면 그대로 포맷팅한 결과를 반환한다.', () => {
    const cardNumber = '1'.repeat(16);
    expect(formatCardNumber(cardNumber, '')).toEqual(['1111111111111111']);
    expect(formatCardNumber(cardNumber)).toEqual(['1111111111111111']);
  });
});
