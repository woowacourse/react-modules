import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ERROR_MESSAGE } from '../constants/errorMessage';

test('4자리 숫자가 입력되면 정상 작동된다.', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('1234');
  });

  expect(result.current.error.errorMessage).toBe('');
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

test('4자리가 아닌 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('12');
  });

  // 😱 length 수정 필요
  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH(4)
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
});
