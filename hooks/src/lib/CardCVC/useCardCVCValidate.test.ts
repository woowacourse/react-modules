import { renderHook, act } from '@testing-library/react';
import useCardCVCValidate from './useCardCVCValidate';

describe('useCardCVCValidate', () => {
  it('숫자로 이루어진 3자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    const { result } = renderHook(() => useCardCVCValidate());

    act(() => {
      result.current.validateCardCVC('123');
    });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardCVCValidate());

    act(() => {
      result.current.validateCardCVC('12a');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe('숫자만 입력해주세요.');
  });

  it('3자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardCVCValidate());

    act(() => {
      result.current.validateCardCVC('1234');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe('3자리만 입력해주세요.');
  });
});
