import { renderHook, act } from '@testing-library/react';
import useCVCValidation from '../lib/useCVCValidation';

describe('useCVCValidation 테스트', () => {
  it('아직 아무 입력도 수행되지 않았을 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useCVCValidation());

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it('올바른 CVC 입력이 들어올 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useCVCValidation());

    act(() => {
      result.current.handleCVCChange('123', 3);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCVCValidation());

    act(() => {
      result.current.handleCVCChange('ABCD', 3);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain('숫자로 입력해주세요.');
  });

  it("maxLength를 넘는 입력이 들어올 때 false와 '3자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCVCValidation());

    act(() => {
      result.current.handleCVCChange('1234', 3);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain('3자로 입력해주세요.');
  });
});
