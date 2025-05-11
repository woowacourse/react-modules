import { renderHook, act } from '@testing-library/react';
import useCVC from './useCVC';
import { ChangeEvent } from 'react';
import { ValidationResult } from '../types';
import { CVC_ERROR_TYPES, ValidateCVCResult } from './constants';

interface RenderHookResult {
  current: RenderHookCurrent;
}

interface RenderHookCurrent {
  CVC: string;
  validationResult: ValidationResult;
  validateCVC: (value: string) => ValidateCVCResult;
  handleCVCChange: (
    event: ChangeEvent<HTMLInputElement>,
    preventInvalidTypo?: boolean
  ) => void;
}

describe('useCVC', () => {
  let result: RenderHookResult;

  beforeEach(() => {
    result = renderHook(() => useCVC()).result;
  });

  it('이벤트 핸들러가 감지한 입력값이 hook 내부의 CVC 상태(state)로 변경된다.', () => {
    act(() => {
      result.current.handleCVCChange({
        target: { value: '123' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.CVC).toBe('123');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 notNumber 에러 타입을 반환한다.', () => {
    expect(result.current.validateCVC('aaa')).toEqual({
      isValid: false,
      errorType: CVC_ERROR_TYPES.notNumber,
    });
  });

  it('입력값이 세 자리가 아닐 때 isValid로 false를 반환하고 invalidLength 에러 타입을 반환한다.', () => {
    expect(result.current.validateCVC('1234')).toEqual({
      isValid: false,
      errorType: CVC_ERROR_TYPES.invalidLength,
    });
  });
});
