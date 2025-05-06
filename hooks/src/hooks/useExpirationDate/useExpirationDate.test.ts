import { renderHook, act } from '@testing-library/react';
import useExpirationDate from './useExpirationDate';

function mockInputEvent(value: string) {
  return {
    target: { value },
    preventDefault: () => {},
    stopPropagation: () => {},
  } as unknown as React.ChangeEvent<HTMLInputElement>;
}

describe('useExpiryDate', () => {
  it('초기값은 빈 문자열이다', () => {
    const { result } = renderHook(() => useExpirationDate());
    expect(result.current.expiryDate).toEqual({ month: '', year: '' });
    expect(result.current.expiryDateErrors).toEqual({ month: '', year: '' });
    expect(result.current.isExpiryDateIsValid).toBe(false);
  });

  it('월과 연도를 올바르게 입력하면 isExpiryDateIsValid가 true가 된다', () => {
    const { result } = renderHook(() => useExpirationDate());
    const { expiryDateRegister } = result.current;

    act(() => {
      expiryDateRegister('month').onChange(mockInputEvent('12'));
      expiryDateRegister('year').onChange(mockInputEvent('25'));
    });

    expect(result.current.expiryDate).toEqual({ month: '12', year: '25' });
    expect(result.current.isExpiryDateIsValid).toBe(true);
  });

  it('월이 1~12가 아니면 isExpiryDateIsValid가 false가 된다', () => {
    const { result } = renderHook(() => useExpirationDate());
    const { expiryDateRegister } = result.current;

    act(() => {
      expiryDateRegister('month').onChange(mockInputEvent('13'));
      expiryDateRegister('year').onChange(mockInputEvent('25'));
    });

    expect(result.current.isExpiryDateIsValid).toBe(false);
    expect(result.current.expiryDateErrors.month).not.toBe('');
  });

  it('연도가 2자리가 아니면 isExpiryDateIsValid가 false가 된다', () => {
    const { result } = renderHook(() => useExpirationDate());
    const { expiryDateRegister } = result.current;

    act(() => {
      expiryDateRegister('month').onChange(mockInputEvent('12'));
      expiryDateRegister('year').onChange(mockInputEvent('2'));
    });

    expect(result.current.isExpiryDateIsValid).toBe(false);
    expect(result.current.expiryDateErrors.year).not.toBe('');
  });

  it('숫자가 아닌 값이 입력되면 값이 반영되지 않는다', () => {
    const { result } = renderHook(() => useExpirationDate());
    const { expiryDateRegister } = result.current;

    act(() => {
      expiryDateRegister('month').onChange(mockInputEvent('ab'));
      expiryDateRegister('year').onChange(mockInputEvent('cd'));
    });

    expect(result.current.expiryDate.month).toBe('');
    expect(result.current.expiryDate.year).toBe('');
  });
});
