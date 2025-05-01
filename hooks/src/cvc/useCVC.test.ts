import { renderHook, act } from '@testing-library/react';
import useCVC from './useCVC';
import { ChangeEvent } from 'react';

describe('useCVC', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange({
        target: { value: '123' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.CVC).toBe('123');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.validateCVC('aaa');
    });

    const { isValid, errorMessage } = result.current.validationResult;

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('숫자만 입력해주세요.');
  });

  it('입력값이 세 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.validateCVC('1234');
    });

    const { isValid, errorMessage } = result.current.validationResult;

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('CVC는 세 자리만 입력해야 합니다.');
  });
});
