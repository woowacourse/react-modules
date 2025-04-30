import { renderHook, waitFor } from '@testing-library/react';
import useCardPasswordValidate from './useCardPasswordValidate';
import { act } from 'react';

describe('useCardPasswordValidate', () => {
  it('숫자로 이루어진 2자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    const { result } = renderHook(() => useCardPasswordValidate());

    const { isValid, errorMessage, validateCardPassword } = result.current;

    act(() => {
      validateCardPassword('12');
    });

    waitFor(() => {
      expect(isValid).toBe(true);
      expect(errorMessage).toBeNull();
    });
  });

  it('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardPasswordValidate());

    const { isValid, errorMessage, validateCardPassword } = result.current;

    act(() => {
      validateCardPassword('1a');
    });

    waitFor(() => {
      expect(isValid).toBe(false);
      expect(errorMessage).toBe('숫자만 입력해주세요.');
    });
  });

  it('2자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardPasswordValidate());

    const { isValid, errorMessage, validateCardPassword } = result.current;

    act(() => {
      validateCardPassword('123');
    });

    waitFor(() => {
      expect(isValid).toBe(false);
      expect(errorMessage).toBe('2자리만 입력해주세요.');
    });
  });
});
