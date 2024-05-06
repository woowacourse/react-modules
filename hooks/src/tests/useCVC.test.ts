import { renderHook, act } from '@testing-library/react';
import useCVC from '../lib/useCVC';
import { ValidationResult } from '../lib/types';

describe('useCVC 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = '123';
    const userInput = '234';
    const { result } = renderHook(() => useCVC(initialValue));

    act(() => {
      result.current.runValidationInputTypeByChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userInput);
  });

  it('입력값이 3자리 또는 4자리가 아니라면 field rule 에러이다', () => {
    const initialValue = '';
    const userInput = '12345';
    const { result } = renderHook(() => useCVC(initialValue));

    act(() => {
      result.current.runValidationFieldRulesByBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
  });

  it('initial value로 field type, field rule에 맞지 않는 초기값(문자)을 넣을 때 input의 결과는 빈 값으로 셋팅된다.', () => {
    const initialValue = '치코';
    const reset = '';
    const { result } = renderHook(() => useCVC(initialValue));

    expect(result.current.value).toBe(reset);
  });

  it('커스텀 validate 함수를 줬을 때 (영어만 허용) 초기값으로 cookie을 주면 초기화되지 않는다.', () => {
    const customValidateInputType = (value: string): ValidationResult => {
      const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

      if (!isEnglish) {
        return { isValid: false, errorMessage: 'CVC는 영어로만 입력해주세요' };
      }

      return { isValid: true, errorMessage: '' };
    };

    const customValidateFieldRules = (value: string): ValidationResult => {
      console.log(value);
      return { isValid: true, errorMessage: '' };
    };

    const initialValue = 'cookie';
    const { result } = renderHook(() =>
      useCVC(initialValue, { customValidateInputType, customValidateFieldRules }),
    );

    expect(result.current.value).toBe(initialValue);
  });
});
