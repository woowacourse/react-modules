import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useCardCVC from '../src/lib/hooks/useCardCVC';

const ERROR_MESSAGES = {
  INVALID_LENGTH: '3자리 숫자를 입력해 주세요.',
  INVALID_CHARACTERS: '숫자만 입력해 주세요.',
};

describe('useCardCVC 훅 테스트', () => {
  it('정상적인 3자리 숫자 CVC를 입력하면 유효성 검사를 통과해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCValidate('123');
    });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });

  it('숫자가 아닌 값을 입력하면 유효하지 않아야 하며 에러 메시지를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCValidate('abc');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });

  it('CVC가 2자리 숫자일 경우 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCValidate('12');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });

  it('CVC가 4자리 이상일 경우 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCValidate('1234');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });

  it('빈 문자열을 입력할 경우 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCValidate('');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });
});
