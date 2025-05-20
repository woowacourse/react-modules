import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ERROR_MESSAGE } from '../constants/errorMessage';
import {
  getCardNumberLength,
  getFormat,
  getFormattedNumber,
  identifyCardBrand,
} from '../utils/cardBrandUtils';
import {
  CARD_BRAND_INFO,
  FALLBACK_CARD_INFO,
} from '../constants/cardBrandRule';

test('빈 값이 입력된 경우', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('');
  });

  expect(result.current.error.errorMessage).toBe('');
  expect(result.current.cardBrand).toBe(null);
});

test('숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('ab');
  });

  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER
  );
});

describe('카드사 판별 테스트', () => {
  test('카드 번호가 4로 시작하는 경우 Visa를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.handleCardNumbers('4567123412341234');
    });

    expect(result.current.cardBrand).toBe('Visa');
  });

  test.each([
    '5167123412341234',
    '5267123412341234',
    '5367123412341234',
    '5467123412341234',
    '5567123412341234',
  ])('카드 번호가 51 - 55로 시작하는 경우 Master을 반환한다.', (cardNumber) => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.handleCardNumbers(cardNumber);
    });

    expect(result.current.cardBrand).toBe('Master');
  });

  test('카드 번호가 36으로 시작하는 경우 Master을 반환한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.handleCardNumbers('36671234123412');
    });

    expect(result.current.cardBrand).toBe('Diners');
  });

  test.each(['346712341234123', '376712341234123'])(
    '카드 번호가 34, 37로 시작하는 경우 AMEX를 반환한다.',
    (cardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers(cardNumber);
      });

      expect(result.current.cardBrand).toBe('AMEX');
    }
  );

  test.each([
    '62212612341234',
    '62292512341234',
    '62412612341234',
    '62612612341234',
    '62822612341234',
    '62882612341234',
  ])(
    '카드 번호가 622126-622925/624-626/6282~6288로 시작하는 경우 UnionPay를 반환한다.',
    (cardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers(cardNumber);
      });

      expect(result.current.cardBrand).toBe('UnionPay');
    }
  );

  test('유효하지 않은 카드 번호를 입력할 경우 예외 메시지 반환', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.handleCardNumbers('0000000000000000');
    });

    expect(result.current.error.errorMessage).toBe(
      ERROR_MESSAGE.CARD_NUMBERS.INVALID_NUMBER
    );
  });
});

describe('카드사별 카드 번호 길이 테스트', () => {
  test.each(['Visa', 'Master', 'UnionPay'] as const)(
    '%s인 경우 16자리 반환',
    (brand) => {
      const length = getCardNumberLength(brand);

      expect(length).toBe(16);
    }
  );

  test('Diners인 경우 14자리 반환', () => {
    const length = getCardNumberLength('Diners');

    expect(length).toBe(14);
  });

  test('AMEX인 경우 15자리 반환', () => {
    const length = getCardNumberLength('AMEX');

    expect(length).toBe(15);
  });

  test.each([
    ['Visa', '4123'],
    ['Master', '5123'],
    ['Diners', '36123'],
    ['AMEX', '34123'],
    ['UnionPay', '622126'],
  ])(
    '%s의 카드 번호 길이를 충족하지 못한 경우 예외 메시지 반환',
    (_, number) => {
      const { result } = renderHook(() => useCardNumbers());

      const brand = identifyCardBrand(number);

      act(() => {
        result.current.handleCardNumbers(number);
      });

      expect(result.current.error.errorMessage).toBe(
        ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH(
          brand ? CARD_BRAND_INFO[brand].length : FALLBACK_CARD_INFO.length
        )
      );
    }
  );
});

// describe('카드사별 포맷팅 테스트', () => {
//   test.each([
//     ['Visa', '4123123412341234'],
//     ['Master', '5123123412341234'],
//     ['Diners', '36111111111111'],
//     ['AMEX', '341111111111111'],
//     ['UnionPay', '6282111111111111'],
//   ])('%s 카드사 포맷팅 테스트', (_, number) => {
//     const { result } = renderHook(() => useCardNumbers());

//     const cardBrand = identifyCardBrand(number);
//     const format = getFormat(cardBrand);
//     const formattedNumber = getFormattedNumber(number, format) || '';

//     act(() => {
//       result.current.handleCardNumbers(number);
//     });

//     expect(result.current.formattedNumber).toBe(formattedNumber);
//   });
// });
