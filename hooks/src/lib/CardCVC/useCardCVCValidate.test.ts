import { renderHook, act, waitFor } from '@testing-library/react';
import useCardCVCValidate from './useCardCVCValidate';

describe('useCardCVCValidate', () => {
  it('숫자로 이루어진 3자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    const { result } = renderHook(() => useCardCVCValidate());

    const { isValid, errorMessage, validateCardCVC } = result.current;

    act(() => {
      validateCardCVC('123');
    });

    waitFor(() => {
      expect(isValid).toBe(true);
      expect(errorMessage).toBeNull();
    });
  });

  it('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardCVCValidate());

    const { isValid, errorMessage, validateCardCVC } = result.current;

    act(() => {
      validateCardCVC('12a');
    });

    waitFor(() => {
      expect(isValid).toBe(false);
      expect(errorMessage).toBe('숫자만 입력해주세요.');
    });
  });

  it('3자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardCVCValidate());

    const { isValid, errorMessage, validateCardCVC } = result.current;

    act(() => {
      validateCardCVC('1234');
    });

    waitFor(() => {
      expect(isValid).toBe(false);
      expect(errorMessage).toBe('3자리만 입력해주세요.');
    });
  });
});
