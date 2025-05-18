import { renderHook, act } from '@testing-library/react';
import useCardNumber from './useCardNumber';

function mockInputEvent(value: string) {
  return {
    target: { value },
    preventDefault: () => {},
    stopPropagation: () => {},
  } as unknown as React.ChangeEvent<HTMLInputElement>;
}

describe('useCardNumber', () => {
  it('초기값은 빈 문자열이다', () => {
    const { result } = renderHook(() => useCardNumber());
    expect(result.current.cardNumber.cardNumber).toEqual('');
    expect(result.current.cardNumberErrors.cardNumber).toEqual('');
  });

  describe('카드 브랜드', () => {
    const brandCases = [
      { value: '3612345678901234', expected: 'diners', desc: '36으로 시작하면 Diners 카드 브랜드를 반환한다.' },
      { value: '3412345678901234', expected: 'amex', desc: '34 또는 37로 시작하면 Amex 카드 브랜드를 반환한다.' },
      {
        value: '6221261234567890',
        expected: 'unionpay',
        desc: '622126~622925 또는 624~626 또는 6282~6288로 시작하면 UnionPay 카드 브랜드를 반환한다.',
      },
      { value: '4123456789012345', expected: 'visa', desc: '4로 시작하면 Visa 카드 브랜드를 반환한다.' },
      { value: '5112345678901234', expected: 'master', desc: '51~55로 시작하면 Master 카드 브랜드를 반환한다.' },
      { value: '1234567890123456', expected: 'unknown', desc: '모르는 카드 브랜드는 unknown을 반환한다.' },
    ];
    test.each(brandCases)('$desc', ({ value, expected }) => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;
      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent(value));
      });
      expect(result.current.brand).toBe(expected);
    });
  });

  describe('카드 번호 최대 길이', () => {
    const lengthCases = [
      { value: '36123456789012', expected: true, desc: 'Diners 카드 번호는 14자리이다.' },
      { value: '341234567890123', expected: true, desc: 'Amex 카드 번호는 15자리이다.' },
      { value: '5112345678901234', expected: true, desc: 'Master 카드 번호는 16자리이다.' },
      { value: '6221261234567890', expected: true, desc: 'UnionPay 카드 번호는 16자리이다.' },
      { value: '1234567890123456', expected: true, desc: 'unknown 카드 번호는 16자리이다.' },
    ];
    test.each(lengthCases)('$desc', ({ value, expected }) => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;
      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent(value));
      });
      expect(result.current.isCardNumberValid).toBe(expected);
    });
  });

  describe('카드 번호 포맷팅', () => {
    const formatCases = [
      {
        value: '36123456789012',
        expected: ['3612', '345678', '9012'],
        desc: 'Diners 카드 번호는 4-6-4 포맷으로 포맷팅된다.',
      },
      {
        value: '341234567890123',
        expected: ['3412', '345678', '90123'],
        desc: 'Amex 카드 번호는 4-6-5 포맷으로 포맷팅된다.',
      },
      {
        value: '6221261234567890',
        expected: ['6221', '2612', '3456', '7890'],
        desc: 'UnionPay 카드 번호는 4-4-4-4-4 포맷으로 포맷팅된다.',
      },
      {
        value: '5112345678901234',
        expected: ['5112', '3456', '7890', '1234'],
        desc: 'Master 카드 번호는 4-4-4-4 포맷으로 포맷팅된다.',
      },
      {
        value: '1234567890123456',
        expected: ['1234', '5678', '9012', '3456'],
        desc: 'unknown 카드 번호는 16자리이다.',
      },
    ];
    test.each(formatCases)('$desc', ({ value, expected }) => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;
      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent(value));
      });
      expect(result.current.formattedCardNumber).toEqual(expected);
    });
  });
});
