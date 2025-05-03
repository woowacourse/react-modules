import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../src/lib/hooks/useCardNumber';

const ERROR_MESSAGES = {
  INVALID_LENGTH: '카드 번호는 4자리로 입력해주세요.',
  INVALID_CHARACTERS: '카드 번호는 숫자만 입력해주세요.',
  INVALID_START_NUMBER: '첫번째 카드 번호는 4 또는 51~55 사이의 숫자여야 합니다.',
};

describe('useCardNumber 테스트', () => {
  it('모든 입력이 유효한 경우 isValid는 true고 errorMessage는 비어있어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4234',
        input2: '5678',
        input3: '9012',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: true,
      input3: true,
      input4: true,
    });
    expect(result.current.errorMessage).toBe('');
  });

  it('숫자가 아닌 값이 포함된 경우, 해당 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4133',
        input2: '2ㅁㅁ8',
        input3: '9012',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: false,
      input3: true,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });
  it('4자리가 아닌 숫자가 포함된 경우, 해당 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4234',
        input2: '5678',
        input3: '902',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: true,
      input3: false,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });

  it('4자리가 아닌 숫자와 숫자가 아닌 값이 포함된 경우, 해당 2개의 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4123',
        input2: '56ㅁ8',
        input3: '902',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: false,
      input3: false,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });

  it('첫번째 카드 input칸에 첫번째 숫자가 4또는 5로 시작하지 않으면 유효하지 않아야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '1234',
        input2: '5678',
        input3: '9012',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: false,
      input2: true,
      input3: true,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_START_NUMBER);
  });
});
