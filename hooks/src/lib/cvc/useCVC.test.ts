import { renderHook, act } from '@testing-library/react';
import useCVC from './useCVC';
import { ChangeEvent } from 'react';
import { CVC_ERROR_TYPES, CVCErrorType } from '../constants';
import { ValidationResult } from '../types';

interface RenderHookResult {
  current: RenderHookCurrent;
}

interface RenderHookCurrent {
  CVC: string;
  validationResult: ValidationResult;
  validateCVC: (value: string) => CVCErrorType | null;
  handleCVCChange: (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange?: boolean
  ) => void;
}

describe('useCVC', () => {
  let result: RenderHookResult;

  beforeEach(() => {
    result = renderHook(() => useCVC()).result;
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    act(() => {
      result.current.handleCVCChange({
        target: { value: '123' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.CVC).toBe('123');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateCVC('aaa')).toBe(CVC_ERROR_TYPES.notNumber);
  });

  it('입력값이 세 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateCVC('1234')).toBe(
      CVC_ERROR_TYPES.invalidLength
    );
  });
});
