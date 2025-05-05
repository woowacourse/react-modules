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
    expect(result.current.cardNumber).toEqual({ first: '', second: '', third: '', fourth: '' });
    expect(result.current.cardNumberErrors).toEqual({ first: '', second: '', third: '', fourth: '' });
    expect(result.current.isCardNumberIsValid).toBe(false);
  });

  it('각 자리 4글자 숫자를 입력하면 isCardNumberIsValid가 true가 된다', () => {
    const { result } = renderHook(() => useCardNumber());
    const { cardNumberRegister } = result.current;

    act(() => {
      cardNumberRegister('first').onChange(mockInputEvent('1234'));
      cardNumberRegister('second').onChange(mockInputEvent('5678'));
      cardNumberRegister('third').onChange(mockInputEvent('9012'));
      cardNumberRegister('fourth').onChange(mockInputEvent('3456'));
    });

    expect(result.current.cardNumber).toEqual({ first: '1234', second: '5678', third: '9012', fourth: '3456' });
    expect(result.current.isCardNumberIsValid).toBe(true);
  });

  it('4글자가 아닌 값이 있으면 isCardNumberIsValid가 false가 된다', () => {
    const { result } = renderHook(() => useCardNumber());
    const { cardNumberRegister } = result.current;

    act(() => {
      cardNumberRegister('first').onChange(mockInputEvent('12'));
      cardNumberRegister('second').onChange(mockInputEvent('5678'));
      cardNumberRegister('third').onChange(mockInputEvent('9012'));
      cardNumberRegister('fourth').onChange(mockInputEvent('3456'));
    });

    expect(result.current.isCardNumberIsValid).toBe(false);
    expect(result.current.cardNumberErrors.first).not.toBe('');
  });

  it('숫자가 아닌 값이 입력되면 값이 반영되지 않는다', () => {
    const { result, rerender } = renderHook(() => useCardNumber());
    const { cardNumberRegister } = result.current;

    act(() => {
      cardNumberRegister('first').onChange(mockInputEvent('abcd'));
    });

    expect(result.current.cardNumber.first).toBe('');
  });
});
