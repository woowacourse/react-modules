import { renderHook, act } from '@testing-library/react';
import useCvcNumber from './useCVCNumber';

function mockInputEvent(value: string) {
  return {
    target: { value },
    preventDefault: () => {},
    stopPropagation: () => {},
  } as unknown as React.ChangeEvent<HTMLInputElement>;
}

describe('useCvcNumber', () => {
  it('초기값은 빈 문자열이다', () => {
    const { result } = renderHook(() => useCvcNumber());
    expect(result.current.cvcNumber).toEqual({ cvc: '' });
    expect(result.current.cvcNumberErrors).toEqual({ cvc: '' });
    expect(result.current.isCvcNumberIsValid).toBe(false);
  });

  it('3자리 숫자를 입력하면 isCvcNumberIsValid가 true가 된다', () => {
    const { result } = renderHook(() => useCvcNumber());
    const { cvcNumberRegister } = result.current;

    act(() => {
      cvcNumberRegister('cvc').onChange(mockInputEvent('123'));
    });

    expect(result.current.cvcNumber.cvc).toBe('123');
    expect(result.current.isCvcNumberIsValid).toBe(true);
  });

  it('3자리가 아니면 isCvcNumberIsValid가 false가 된다', () => {
    const { result } = renderHook(() => useCvcNumber());
    const { cvcNumberRegister } = result.current;

    act(() => {
      cvcNumberRegister('cvc').onChange(mockInputEvent('12'));
    });

    expect(result.current.isCvcNumberIsValid).toBe(false);
    expect(result.current.cvcNumberErrors.cvc).not.toBe('');
  });

  it('숫자가 아닌 값이 입력되면 값이 반영되지 않는다', () => {
    const { result } = renderHook(() => useCvcNumber());
    const { cvcNumberRegister } = result.current;

    act(() => {
      cvcNumberRegister('cvc').onChange(mockInputEvent('abc'));
    });

    expect(result.current.cvcNumber.cvc).toBe('');
  });
});
