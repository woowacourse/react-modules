import { renderHook } from '@testing-library/react';

import { useCardHolder } from '../lib';

describe('useCardHolder', () => {
  const errorMessages = {
    empty: '카드 소유자 이름을 입력해주세요.',
    alphabet: '카드 소유자 이름은 영문으로만 입력해주세요.',
    length: '카드 소유자 이름은 최대 20자까지 입력 가능합니다.',
  };
  describe('유효성 검사', () => {
    it('빈문자열일 경우 오류', () => {
      const { result } = renderHook(() =>
        useCardHolder({
          cardHolder: '',
          errorMessages,
          validation: { isOnlyUpperCase: false },
          isNeedValidValue: true,
          isNeedUpperCase: false,
        }),
      );

      expect(result.current.validationResult.isFilledValue).toBe(false);
      expect(result.current.validationErrorMessage).toBe(errorMessages.empty);
    });

    it('영어가 아닐 경우 오류', () => {
      const { result } = renderHook(() =>
        useCardHolder({
          cardHolder: '홍길동123',
          errorMessages,
          validation: { isOnlyUpperCase: false },
          isNeedValidValue: true,
          isNeedUpperCase: false,
        }),
      );

      expect(result.current.validationResult.isValidAlphabet).toBe(false);
      expect(result.current.validationErrorMessage).toBe(errorMessages.alphabet);
    });
    it('대문자만 가능한 이름일 경우, 대문자가 아닐 경우 오류', () => {
      const { result } = renderHook(() =>
        useCardHolder({
          cardHolder: 'jon',
          errorMessages,
          validation: { isOnlyUpperCase: true },
          isNeedValidValue: true,
          isNeedUpperCase: false,
        }),
      );

      expect(result.current.validationResult.isValidAlphabet).toBe(false);
      expect(result.current.validationErrorMessage).toBe(errorMessages.alphabet);
    });

    it('문자 길이를 초과할 경우 오류', () => {
      const { result } = renderHook(() =>
        useCardHolder({
          cardHolder: 'abcdefghijklmnopqrstuvwxyz',
          errorMessages,
          validation: { isOnlyUpperCase: false, maxLength: 20 },
          isNeedValidValue: true,
          isNeedUpperCase: false,
        }),
      );

      expect(result.current.validationResult.isValidLength).toBe(false);
      expect(result.current.validationErrorMessage).toBe(errorMessages.length);
    });
  });

  describe('유효한 이름', () => {
    it('대문자만 가능한 경우', () => {
      const { result } = renderHook(() =>
        useCardHolder({
          cardHolder: 'BADA',
          errorMessages,
          validation: { isOnlyUpperCase: true },
          isNeedValidValue: true,
          isNeedUpperCase: false,
        }),
      );

      expect(result.current.validationResult.isValidAlphabet).toBe(true);
      expect(result.current.validationErrorMessage).toBe(null);
    });
    it('대소문자 모두 가능한 경우', () => {
      const { result } = renderHook(() =>
        useCardHolder({
          cardHolder: 'bada',
          errorMessages,
          validation: { isOnlyUpperCase: false },
          isNeedValidValue: true,
          isNeedUpperCase: false,
        }),
      );

      expect(result.current.validationResult.isValidAlphabet).toBe(true);
      expect(result.current.validationErrorMessage).toBe(null);
    });
  });

  describe('카드 소유자 이름 포맷팅', () => {
    describe('오류가 없을 경우, isNeedUpperCase값에 따른 대소문자 변형 여부', () => {
      it('isNeedUpperCase가 true면  사용자 이름을 대문자로 변경한다.', () => {
        const { result } = renderHook(() =>
          useCardHolder({
            cardHolder: 'john doe',
            errorMessages,
            validation: { isOnlyUpperCase: false },
            isNeedValidValue: true,
            isNeedUpperCase: false,
          }),
        );

        expect(result.current.formattedValue).toBe('john doe');
      });

      it('isNeedUpperCase가 false면 사용자 이름을 대문자로 변경하지 않는다.', () => {
        const { result: uppercaseResult } = renderHook(() =>
          useCardHolder({
            cardHolder: 'john doe',
            errorMessages,
            validation: { isOnlyUpperCase: false },
            isNeedValidValue: true,
            isNeedUpperCase: true,
          }),
        );
        expect(uppercaseResult.current.formattedValue).toBe('JOHN DOE');
      });
    });

    describe('isNeedValidValue값에 따른 formattedValue 값', () => {
      it('isNeedValidValue가 true면, length를 제외한 오류일 경우 빈문자열인 formattedValue를 반환한다.', () => {
        const { result: uppercaseResult } = renderHook(() =>
          useCardHolder({
            cardHolder: '존',
            errorMessages,
            validation: { isOnlyUpperCase: false },
            isNeedValidValue: true,
            isNeedUpperCase: true,
          }),
        );
        expect(uppercaseResult.current.formattedValue).toBe('');
      });
      it('isNeedValidValue가 true면, length 오류일 경우  formattedValue는 빈문자열이 아니다.', () => {
        const { result: uppercaseResult } = renderHook(() =>
          useCardHolder({
            cardHolder: 'aaaa',
            errorMessages,
            validation: { isOnlyUpperCase: false, maxLength: 3 },
            isNeedValidValue: true,
            isNeedUpperCase: true,
          }),
        );
        expect(uppercaseResult.current.formattedValue !== '').toBeTruthy();
      });
      it('isNeedValidValue가 false면, 오류가 나도 formattedValue는 빈문자열이 아니다.', () => {
        const { result: uppercaseResult } = renderHook(() =>
          useCardHolder({
            cardHolder: '존',
            errorMessages,
            validation: { isOnlyUpperCase: false },
            isNeedValidValue: false,
            isNeedUpperCase: true,
          }),
        );
        expect(uppercaseResult.current.formattedValue !== '').toBeTruthy();
      });
    });
  });
});
