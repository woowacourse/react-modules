import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../src/lib/useCardNumber';

describe('useCardNumber 테스트', () => {
  it('모든 입력이 유효한 경우 isValid는 true고 errorMessage는 비어있어야 한다', () => {
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
        input1: 'ㅁㅁ33',
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
    expect(result.current.errorMessage).toBe('카드 번호는 숫자만 입력해주세요.');
  });
  it('4자리가 아닌 숫자가 포함된 경우, 해당 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '1234',
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
    expect(result.current.errorMessage).toBe('카드 번호는 4자리로 입력해주세요.');
  });

  it('4자리가 아닌 숫자와 숫자가 아닌 값이 포함된 경우, 해당 2개의 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: 'levi',
        input2: '5678',
        input3: '902',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: false,
      input2: true,
      input3: false,
      input4: true,
    });
    expect(result.current.errorMessage).toBe('카드 번호는 숫자만 입력해주세요.');
  });
});
