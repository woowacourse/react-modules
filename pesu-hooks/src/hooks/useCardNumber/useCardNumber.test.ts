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
    expect(result.current.isCardNumberValid).toBe(false);
  });

  describe('카드 브랜드', () => {
    it('36으로 시작하면 Diners 카드 브랜드를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;

      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent('3612345678901234'));
      });

      expect(result.current.brand).toBe('diners');
    });

    it('34 또는 37로 시작하면 Amex 카드 브랜드를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;

      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent('3412345678901234'));
      });

      expect(result.current.brand).toBe('amex');
    });

    it('622126~622925 또는 624~626 또는 6282~6288로 시작하면 UnionPay 카드 브랜드를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;

      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent('6221261234567890'));
      });

      expect(result.current.brand).toBe('unionpay');
    });

    it('4로 시작하면 Visa 카드 브랜드를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;

      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent('4123456789012345'));
      });

      expect(result.current.brand).toBe('visa');
    });

    it('51~55로 시작하면 Master 카드 브랜드를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      const { cardNumberRegister } = result.current;

      act(() => {
        cardNumberRegister('cardNumber').onChange(mockInputEvent('5112345678901234'));
      });

      expect(result.current.brand).toBe('master');
    });
  });

  it('', () => {
    const { result } = renderHook(() => useCardNumber());
    const { cardNumberRegister } = result.current;

    act(() => {
      cardNumberRegister('cardNumber').onChange(mockInputEvent('abcd'));
    });

    expect(result.current.cardNumber.cardNumber).toBe('');
  });
});
