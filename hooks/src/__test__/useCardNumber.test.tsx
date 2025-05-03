import { act, renderHook } from '@testing-library/react';
import { useCardNumber } from '../lib/hooks/useCardNumber/useCardNumber';

describe('카드 번호 검증 테스트입니다.', () => {
  const cardNumberLength = 4;
  test(`사용자가 입력한 value값의 길이와 validLength(${cardNumberLength})가 같다면, errorMessage를 빈 값으로 반환한다.`, () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '1234' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe('');
  });

  test('숫자를 입력하지 않은 경우, 숫자를 입력하라는 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());
    const mockEvent = {
      target: { value: '가나다' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe('숫자(0~9)만 입력 가능합니다.');
  });

  test(`사용자가 입력한 value값의 길이가 validLength(${cardNumberLength})보다 작다면 errorMessage를 반환준다.`, () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe(`숫자 ${cardNumberLength}자리를 정확히 입력해주세요.`);
  });

  test(`사용자가 입력한 value값의 길이가 validLength(${cardNumberLength})보다 크다면 errorMessage를 반환준다.`, () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '12345' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent, 0);
    });

    expect(result.current.errorMessage).toBe(`숫자 ${cardNumberLength}자리를 정확히 입력해주세요.`);
  });
});
