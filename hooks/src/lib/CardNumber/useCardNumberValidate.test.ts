import { renderHook, act, waitFor } from '@testing-library/react';
import useCardNumbersValidate from './useCardNumberValidate';

describe('useCardNumbersValidate', () => {
  it('숫자로 이루어진 4자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    const { isValid, errorMessage, validateCardNumber } = result.current;

    act(() => {
      validateCardNumber('1234', 'first');
    });

    waitFor(() => {
      expect(isValid.first).toBe(true);
      expect(errorMessage).toBeNull();
    });
  });

  it('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    const { isValid, errorMessage, validateCardNumber } = result.current;

    act(() => {
      validateCardNumber('-1', 'first');
    });

    waitFor(() => {
      expect(isValid.first).toBe(false);
      expect(errorMessage).toBe('숫자만 입력해주세요.');
    });
  });

  it('4자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    const { isValid, errorMessage, validateCardNumber } = result.current;

    act(() => {
      validateCardNumber('12345', 'third');
    });

    waitFor(() => {
      expect(isValid.third).toBe(false);
      expect(errorMessage).toBe('4자리만 입력해주세요.');
    });
  });
});
