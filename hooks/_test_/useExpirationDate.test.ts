import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useExpirationDate from '../src/lib/hooks/useExpirationDate';

const ERROR_MESSAGES = {
  INVALID_LENGTH: '2자리의 숫자를 입력해 주세요.',
  INVALID_CHARACTERS: '숫자만 입력해 주세요.',
  INVALID_MONTH: '1~12 사이의 숫자를 입력해 주세요.',
};

describe('useExpirationDate 훅 테스트', () => {
  it('유효한 만료일(month: "08", year: "25")을 입력하면 유효성 검사에 통과해야 한다.', () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDate({ month: '08', year: '25' });
    });

    expect(result.current.isValid).toEqual({ month: true, year: true });
    expect(result.current.errorMessage).toBe('');
  });

  it('month에 숫자가 아닌 값을 입력하면 에러 메시지와 함께 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDate({ month: 'ab', year: '25' });
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });

  it('month에 한 자리 숫자를 입력하면 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDate({ month: '5', year: '25' });
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });

  it('month가 13 이상이면 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDate({ month: '13', year: '25' });
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_MONTH);
  });

  it('year에 숫자가 아닌 값을 입력하면 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDate({ month: '08', year: 'ab' });
    });

    expect(result.current.isValid.year).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });

  it('year에 한 자리 숫자를 입력하면 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDate({ month: '08', year: '5' });
    });

    expect(result.current.isValid.year).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });
});
