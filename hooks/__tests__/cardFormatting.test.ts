import { formatCardNumber } from '../src/lib/utils/cardFormatting';

describe('cardFormatting util 함수 테스트', () => {
  it.each([
    ['', '1234567890123456', '1234 5678 9012 3456'],
    ['visa', '4111111111111111', '4111 1111 1111 1111'],
    ['master', '5111111111111111', '5111 1111 1111 1111'],
    ['diners', '36111111111111', '3611 111111 1111'],
    ['amex', '341111111111111', '3411 111111 11111'],
    ['unionpay', '6221261111111111', '6221 2611 1111 1111'],
  ])('%s 카드 번호 입력이 %s일 때 포맷팅된 카드 번호: %s', (cardBrand, input, formatted) => {
    const formattedNumber = formatCardNumber(input, cardBrand);

    expect(formattedNumber).toBe(formatted);
  });
});
