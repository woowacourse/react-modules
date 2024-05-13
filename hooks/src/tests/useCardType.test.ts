import { renderHook, act } from '@testing-library/react';
import useCardType from '../lib/useCardType';

const selectOptions = ['마루', '쿠키', '치코', '헤인', '낙타'];

describe('useCardType 커스텀 훅 테스트', () => {
  describe('context: 초기값 설정 검사', () => {
    it('초기값이 정확히 설정되어야 한다.', () => {
      const initialValue = '마루';
      const { result } = renderHook(() =>
        useCardType({
          initialValue,
          options: selectOptions,
          placeholder: '크루를 선택하세요',
        }),
      );

      expect(result.current.value).toBe(initialValue);
    });
  });

  describe('context: 업데이트 검사', () => {
    it('입력값이 정확히 업데이트 되어야 한다.', () => {
      const initialValue = '마루';
      const userInput = '쿠키';
      const { result } = renderHook(() =>
        useCardType({
          initialValue,
          options: selectOptions,
          placeholder: '크루를 선택하세요',
        }),
      );

      act(() => {
        result.current.runValidationByChange({
          target: { value: userInput },
        } as React.ChangeEvent<HTMLSelectElement>);
      });

      expect(result.current.value).toBe(userInput);
    });
  });

  describe('context: 입력 유효성: field error', () => {
    it('입력값이 options 에 포함되지 않으면 에러이다', () => {
      const initialValue = '마루';
      const userInput = '리버';
      const { result } = renderHook(() =>
        useCardType({
          initialValue,
          options: selectOptions,
          placeholder: '크루를 선택하세요',
        }),
      );

      act(() => {
        result.current.runValidationByChange({
          target: { value: userInput },
        } as React.ChangeEvent<HTMLSelectElement>);
      });

      expect(result.current.validationResult.isValid).toBe(false);
    });
  });

  describe('context: 초기값 유효성 검사', () => {
    it('초기값이 올바르지 않으면(options에 없는 초기값) 플레이스홀더로 값이 변한다.', () => {
      const initialValue = '해리';
      const { result } = renderHook(() =>
        useCardType({
          initialValue,
          options: selectOptions,
          placeholder: '크루를 선택하세요',
        }),
      );

      expect(result.current.value).toBe('크루를 선택하세요');
    });
  });
});
