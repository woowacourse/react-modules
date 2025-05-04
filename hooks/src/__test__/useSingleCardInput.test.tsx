import { act, renderHook } from '@testing-library/react';
import { useSingleCardInput } from '../lib/hooks/useSingleCardInput/useSingleCardInput';

describe('카드 CVC 검증 테스트입니다.', () => {
  const CVCLength = 3;
  test(`사용자가 입력한 value값의 길이와 validLength(${CVCLength})가 같다면, errorMessage를 빈 값으로 반환한다.`, () => {
    const { result } = renderHook(() => useSingleCardInput(CVCLength));

    const mockEvent = {
      target: { value: '123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSingleCardInputChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('');
  });

  test('숫자를 입력하지 않은 경우, 숫자를 입력하라는 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useSingleCardInput(3));
    const mockEvent = {
      target: { value: '가나다' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSingleCardInputChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('숫자(0~9)만 입력 가능합니다.');
  });

  test(`사용자가 입력한 value값의 길이가 validLength(${CVCLength})보다 작다면 errorMessage를 반환준다.`, () => {
    const { result } = renderHook(() => useSingleCardInput(3));

    const mockEvent = {
      target: { value: '12' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSingleCardInputChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe(`숫자 ${CVCLength}자리를 정확히 입력해주세요.`);
  });
});

describe('카드 PassWord 검증 테스트입니다.', () => {
  const passWordLength = 2;
  test(`사용자가 입력한 value값의 길이와 validLength(${passWordLength})가 같다면, errorMessage를 빈 값으로 반환한다.`, () => {
    const { result } = renderHook(() => useSingleCardInput(passWordLength));

    const mockEvent = {
      target: { value: '12' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSingleCardInputChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('');
  });

  test('숫자를 입력하지 않은 경우, 숫자를 입력하라는 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useSingleCardInput(2));
    const mockEvent = {
      target: { value: '가나' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSingleCardInputChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('숫자(0~9)만 입력 가능합니다.');
  });

  test(`사용자가 입력한 value값의 길이가 validLength(${passWordLength})보다 작다면 errorMessage를 반환준다.`, () => {
    const { result } = renderHook(() => useSingleCardInput(2));

    const mockEvent = {
      target: { value: '1' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleSingleCardInputChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe(`숫자 ${passWordLength}자리를 정확히 입력해주세요.`);
  });
});
