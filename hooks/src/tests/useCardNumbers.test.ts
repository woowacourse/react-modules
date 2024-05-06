import { renderHook, act } from '@testing-library/react';
import useCardNumbers from '../lib/useCardNumbers';
import { ValidationResult } from '../lib/types';

const initialValue = { first: '1234', second: '1234', third: '2344', fourth: '5623' };

describe('useCardNumbers 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValue));
    expect(result.current.value).toEqual(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '1453';
    const expected = { first: '1234', second: '1453', third: '2344', fourth: '5623' };
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      result.current.runValidationInputTypeByChange(
        {
          target: { value: userInput },
        } as unknown as React.ChangeEvent<HTMLInputElement>,
        'second',
      );
    });

    expect(result.current.value).toEqual(expected);
  });

  it('userInput에 숫자가 아닌 입력이 들어올 경우 field type 에러이다.', () => {
    const userInput = 'cookie';
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      result.current.runValidationInputTypeByChange(
        {
          target: { value: userInput },
        } as unknown as React.ChangeEvent<HTMLInputElement>,
        'second',
      );
    });

    expect(result.current.validationResult.second.isValid).toBe(false);
  });

  it('userInput에 4자리가 아닌 아닌 입력이 들어올 경우 field rule 에러이다.', () => {
    const userInput = '123';
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      result.current.runValidationFieldRulesByBlur(
        {
          target: { value: userInput },
        } as unknown as React.FocusEvent<HTMLInputElement, Element>,
        'second',
      );
    });

    expect(result.current.validationResult.second.isValid).toBe(false);
  });

  it('초기값에 숫자가 아닌 입력이 들어올 경우 필드들이 초기화된다.', () => {
    const initialValue = { first: '마루', second: '쿠키', third: '치코', fourth: '해리' };
    const expected = { first: '', second: '', third: '', fourth: '' };
    const { result } = renderHook(() => useCardNumbers(initialValue));

    expect(result.current.value).toEqual(expected);
  });

  it('커스텀 validate 함수를 줬을 때 (영어만 허용) 초기값으로 문자들을 주면 초기화되지 않는다.', () => {
    const customValidateInputType = (value: string) => {
      const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

      if (!isEnglish) {
        return { isValid: false, errorMessage: '카드번호는 영어로만 입력해주세요' };
      }

      return { isValid: true, errorMessage: '' };
    };

    const customValidateFieldRules = (value: string): ValidationResult => {
      console.log(value);
      return { isValid: true, errorMessage: '' };
    };

    const initialValue = { first: 'maru', second: 'cookie', third: 'hary', fourth: 'river' };
    const { result } = renderHook(() =>
      useCardNumbers(initialValue, { customValidateInputType, customValidateFieldRules }),
    );

    expect(result.current.value).toEqual(initialValue);
  });
});
