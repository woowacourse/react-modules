import { act, renderHook } from '@testing-library/react';
import { useExpiryDate } from '../lib/hooks/useExpiryDate/useExpiryDate';

describe('유효기간 검증 테스트입니다.', () => {
  const expiryDateLength = 2;
  const currentYear = new Date().getFullYear() % 100;
  test(`사용자가 입력한 value값의 길이와 validLength(${expiryDateLength})가 같다면, errorMessage를 빈 값으로 반환한다.`, () => {
    const { result } = renderHook(() => useExpiryDate());

    const mockEvent = {
      target: { value: '12' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleExpiryDateChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe('');
  });

  test('숫자를 입력하지 않은 경우, 숫자를 입력하라는 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());
    const mockEvent = {
      target: { value: '가나' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleExpiryDateChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe('숫자(0~9)만 입력 가능합니다.');
  });

  test('사용자가 입력한 month 값이 1~12에 포함되지 않는다면 errorMessage를 반환준다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    const mockEvent = {
      target: { value: '13' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleExpiryDateChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe('유효기간의 월은 1~12월만 가능합니다.');
  });

  test(`사용자가 입력한 year 값이 현재 년도(${currentYear})보다 작다면 errorMessage를 반환준다.`, () => {
    const { result } = renderHook(() => useExpiryDate());

    const mockEvent = {
      target: { value: '24' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleExpiryDateChange(mockEvent, 1);
    });

    expect(result.current.errorMessage).toBe(
      `유효기간의 년도는 현재 년도(${currentYear})보다 크거나 같아야 합니다.`
    );
  });
});
