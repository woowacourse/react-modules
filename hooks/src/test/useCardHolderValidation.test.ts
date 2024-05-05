import { renderHook, act } from '@testing-library/react';
import useCardHolderValidation from '../lib/useCardHolderValidation';

describe('useCardHolderValidation 테스트', () => {
  it('아직 아무 입력도 수행되지 않았을 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useCardHolderValidation());

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it('올바른 이름 입력이 들어올 때 true를 반환하고 에러 메시지가 없어야 함', () => {
    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.handleCardHolderChange('JOHN DOE', 20);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it('공백이 2개 이상 연속된 입력이 들어올 때 false와 "1개 이하의 공백이 연속된 대문자 영어로 입력해주세요." 를 반환해야 함', () => {
    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.handleCardHolderChange('ASDF    ASDF', 20);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      '1개 이하의 공백이 연속된 대문자 영어로 입력해주세요.'
    );
  });

  it('대문자 영어를 제외한 입력이 들어올 때 false와 "1개 이하의 공백이 연속된 대문자 영어로 입력해주세요." 를 반환해야 함', () => {
    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.handleCardHolderChange('!@#123', 20);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      '1개 이하의 공백이 연속된 대문자 영어로 입력해주세요.'
    );
  });

  it('maxLength를 넘는 입력이 들어올 때 false와 "20자 이내로 입력해주세요."를 반환해야 함', () => {
    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.handleCardHolderChange('VERYLONGCARDHOLDERNAME', 20);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain('20자 이내로 입력해주세요.');
  });
});
