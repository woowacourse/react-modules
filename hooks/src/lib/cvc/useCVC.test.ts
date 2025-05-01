import { renderHook, act } from '@testing-library/react';
import useCVC from './useCVC';
import { ChangeEvent } from 'react';
import { CVC_ERROR_TYPES } from '../constants';

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

    expect(result.current.validateCVC('aaa')).toBe(CVC_ERROR_TYPES.notNumber);
  });

  it('입력값이 세 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCVC());

    expect(result.current.validateCVC('1234')).toBe(
      CVC_ERROR_TYPES.invalidLength
    );
  });
});
