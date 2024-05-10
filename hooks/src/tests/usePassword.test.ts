import { renderHook, act } from '@testing-library/react';
import usePassword from '../lib/usePassword';
import { ValidationResult } from '../lib/types';

describe('usePassword 커스텀 훅 테스트', () => {
  describe('초기값 설정 검사', () => {
    it('초기값이 정확히 설정되어야 한다.', () => {
      const initialValue = '12';
      const { result } = renderHook(() => usePassword(initialValue));

      expect(result.current.value).toBe(initialValue);
    });
  });

  describe('업데이트 검사', () => {
    it('입력값이 정확히 업데이트 되어야 한다.', () => {
      const initialValue = '12';
      const userInput = '23';
      const { result } = renderHook(() => usePassword(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange({
          target: { value: userInput },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.value).toBe(userInput);
    });
  });

  describe('입력 유효성: field type', () => {
    it('입력값이 문자라면 field type 에러이다', () => {
      const initialValue = '';
      const userInput = '쿠키';
      const { result } = renderHook(() => usePassword(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange({
          target: { value: userInput },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.validationResult.isValid).toBe(false);
    });
  });

  describe('입력 유효성: field rules', () => {
    it('입력값이 2자리가 아니라면 field rule 에러이다', () => {
      const initialValue = '';
      const userInput = '123';
      const { result } = renderHook(() => usePassword(initialValue));

      act(() => {
        result.current.runValidationFieldRulesByBlur({
          target: { value: userInput },
        } as React.FocusEvent<HTMLInputElement, Element>);
      });

      expect(result.current.validationResult.isValid).toBe(false);
    });
  });

  describe('초기값 유효성 검사', () => {
    it('initial value로 field type, field rule에 맞지 않는 초기값(문자)을 넣을 때 input의 결과는 빈 값으로 셋팅된다.', () => {
      const initialValue = '쿠키';
      const reset = '';
      const { result } = renderHook(() => usePassword(initialValue));

      expect(result.current.value).toBe(reset);
    });
  });

  describe('커스텀 validate 함수', () => {
    it('영어만 허용하는 함수가 주어지고 초기값으로 cookie을 주면 초기화되지 않는다.', () => {
      const customValidateInputType = (value: string): ValidationResult => {
        const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

        if (!isEnglish) {
          return { isValid: false, errorMessage: '비밀번호는 영어로만 입력해주세요' };
        }

        return { isValid: true, errorMessage: '' };
      };

      const customValidateFieldRules = (value: string): ValidationResult => {
        console.log(value);
        return { isValid: true, errorMessage: '' };
      };

      const initialValue = 'cookie';
      const { result } = renderHook(() =>
        usePassword(initialValue, { customValidateInputType, customValidateFieldRules }),
      );

      expect(result.current.value).toBe(initialValue);
    });
  });
});
