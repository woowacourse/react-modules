import { renderHook, act } from '@testing-library/react';
import usePassword from './usePassword';

function mockInputEvent(value: string) {
  return {
    target: { value },
    preventDefault: () => {},
    stopPropagation: () => {},
  } as unknown as React.ChangeEvent<HTMLInputElement>;
}

describe('usePassword', () => {
  it('초기값은 빈 문자열이다', () => {
    const { result } = renderHook(() => usePassword());
    expect(result.current.password).toEqual({ password: '' });
    expect(result.current.passwordErrors).toEqual({ password: '' });
    expect(result.current.isPasswordIsValid).toBe(false);
  });

  it('2자리 숫자를 입력하면 isPasswordIsValid가 true가 된다', () => {
    const { result } = renderHook(() => usePassword());
    const { passwordRegister } = result.current;

    act(() => {
      passwordRegister('password').onChange(mockInputEvent('12'));
    });

    expect(result.current.password.password).toBe('12');
    expect(result.current.isPasswordIsValid).toBe(true);
  });

  it('2자리가 아니면 isPasswordIsValid가 false가 된다', () => {
    const { result } = renderHook(() => usePassword());
    const { passwordRegister } = result.current;

    act(() => {
      passwordRegister('password').onChange(mockInputEvent('1'));
    });

    expect(result.current.isPasswordIsValid).toBe(false);
    expect(result.current.passwordErrors.password).not.toBe('');
  });

  it('숫자가 아닌 값이 입력되면 값이 반영되지 않는다', () => {
    const { result } = renderHook(() => usePassword());
    const { passwordRegister } = result.current;

    act(() => {
      passwordRegister('password').onChange(mockInputEvent('ab'));
    });

    expect(result.current.password.password).toBe('');
  });
});
