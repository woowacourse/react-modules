import { renderHook, act } from '@testing-library/react';
import useCardNumbers from '../lib/useCardNumbers';
import { ValidationResult } from '../lib/types';

const initialValue = { first: '1234', second: '1234', third: '2344', fourth: '5623' };

describe('useCardNumbers 커스텀 훅 테스트', () => {
  describe('초기값 설정 검사', () => {
    it('초기값이 정확히 설정되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumbers(initialValue));
      expect(result.current.value).toEqual(initialValue);
    });
  });

  describe('업데이트 검사', () => {
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
  });

  describe('입력 유효성: field type', () => {
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
  });

  describe('입력 유효성: field rules', () => {
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
  });

  describe('초기값 유효성 검사', () => {
    it('초기값에 숫자가 아닌 입력이 들어올 경우 필드들이 초기화된다.', () => {
      const initialValue = { first: '마루', second: '쿠키', third: '치코', fourth: '해리' };
      const expected = { first: '', second: '', third: '', fourth: '' };
      const { result } = renderHook(() => useCardNumbers(initialValue));

      expect(result.current.value).toEqual(expected);
    });
  });

  describe('커스텀 validate 함수', () => {
    it('영어만 허용하는 함수가 주어지고 초기값으로 문자들을 주면 초기화되지 않는다.', () => {
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

  describe('카드 브랜드 테스트', () => {
    it('카드번호가 36으로 시작하면 Diners카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '36';
      const brand = 'Diners';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });
    it('카드번호가 34으로 시작하면 AMEX카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '34';
      const brand = 'AMEX';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });
    it('카드번호가 37으로 시작하면 AMEX카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '37';
      const brand = 'AMEX';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });

    it('카드번호가 622126으로 시작하면 UnionPay카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const firstUserInput = '6221';
      const secondUserInput = '26';
      const brand = 'UnionPay';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: firstUserInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: secondUserInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'second',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });

    it('카드번호가 622925으로 시작하면 UnionPay카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const firstUserInput = '6229';
      const secondUserInput = '25';
      const brand = 'UnionPay';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: firstUserInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: secondUserInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'second',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });

    it('카드번호가 624으로 시작하면 UnionPay카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '624';
      const brand = 'UnionPay';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });

    it('카드번호가 626으로 시작하면 UnionPay카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '626';
      const brand = 'UnionPay';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });

    it('카드번호가 6282으로 시작하면 UnionPay카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '6282';
      const brand = 'UnionPay';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });

    it('카드번호가 6288으로 시작하면 UnionPay카드로 인식한다.', () => {
      const initialValue = { first: '', second: '', third: '', fourth: '' };
      const userInput = '6288';
      const brand = 'UnionPay';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      act(() => {
        result.current.runValidationInputTypeByChange(
          {
            target: { value: userInput },
          } as unknown as React.ChangeEvent<HTMLInputElement>,
          'first',
        );
      });

      expect(result.current.getCardBrand()).toEqual(brand);
    });
  });
});
