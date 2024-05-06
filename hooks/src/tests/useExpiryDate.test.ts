import { renderHook, act } from '@testing-library/react';
import useExpiryDate from '../lib/useExpiryDate';
import { ValidationResult } from '../lib/types';

describe('useExpiryDate 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const { result } = renderHook(() => useExpiryDate(initialValue));

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual(initialValue);
  });

  it('month 입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '06';

    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.month.runValidationInputTypeByChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.month.value).toBe(userInput);
  });

  it('year 입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '40';

    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.year.runValidationInputTypeByChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.year.value).toBe(userInput);
  });

  it('month와 year 입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const userInputMonth = '06';
    const userInputYear = '40';

    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.month.runValidationInputTypeByChange({
        target: { value: userInputMonth },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.year.runValidationInputTypeByChange({
        target: { value: userInputYear },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual({ month: userInputMonth, year: userInputYear });
  });

  it('month 입력값이 01월~12월 이내가 아니라면 field rule 에러이다', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '13';
    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.month.runValidationFieldRulesByBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.month.validationResult.isValid).toBe(false);
  });

  it('year 입력값이 24년 이후가 아니라면 field rule 에러이다', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '23';
    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.year.runValidationFieldRulesByBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.year.validationResult.isValid).toBe(false);
  });

  it('initial value로 field type, field rule에 맞지 않는 초기값(ex: 3자리 수)을 넣을 때 input의 결과는 빈 값으로 셋팅된다.', () => {
    const initialValue = { month: '122', year: '234' };
    const reset = { month: '', year: '' };
    const { result } = renderHook(() => useExpiryDate(initialValue));

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual(reset);
  });

  it('커스텀 validate 함수를 줬을 때 (영어만 허용) 초기값으로 maru cookie를 주면 초기화되지 않는다.', () => {
    const customValidateInputType = (value: string): ValidationResult => {
      const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

      if (!isEnglish) {
        return { isValid: false, errorMessage: '유효기간은 영어로만 입력해주세요' };
      }

      return { isValid: true, errorMessage: '' };
    };

    const customValidateFieldRules = (value: string): ValidationResult => {
      console.log(value);
      return { isValid: true, errorMessage: '' };
    };

    const initialValue = { month: 'maru', year: 'cookie' };
    const { result } = renderHook(() =>
      useExpiryDate(initialValue, {
        month: { customValidateInputType, customValidateFieldRules },
        year: { customValidateInputType, customValidateFieldRules },
      }),
    );

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual(initialValue);
  });
});
