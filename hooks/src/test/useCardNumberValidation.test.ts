import { renderHook, act } from '@testing-library/react';
import useCardNumberValidation from '../lib/useCardNumberValidation';

describe('useCardNumberInputValidation 테스트', () => {
  it('아직 아무 입력도 수행되지 않았을 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useCardNumberValidation());

    expect(result.current.validationResults[0].isValid).toBe(true);
    expect(result.current.validationResults[0].errorMessages).toHaveLength(0);
  });

  it('올바른 카드 번호 입력이 들어올 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useCardNumberValidation());

    act(() => {
      result.current.handleCardNumberChange('1234', 0);
    });

    expect(result.current.validationResults[0].isValid).toBe(true);
    expect(result.current.validationResults[0].errorMessages).toHaveLength(0);
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자를 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumberValidation());

    act(() => {
      result.current.handleCardNumberChange('ABCD', 0);
    });

    expect(result.current.validationResults[0].isValid).toBe(false);
    expect(result.current.validationResults[0].errorMessages).toContain('숫자를 입력해주세요.');
  });

  it("4자리가 아닌 입력이 들어올 때 false와 '4자리 숫자를 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumberValidation());

    act(() => {
      result.current.handleCardNumberChange('123', 0);
    });

    expect(result.current.validationResults[0].isValid).toBe(false);
    expect(result.current.validationResults[0].errorMessages).toContain('4자리 숫자를 입력해주세요.');
  });
});
