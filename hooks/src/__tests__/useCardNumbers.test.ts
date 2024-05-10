import { renderHook } from '@testing-library/react';

import useCardNumbers from './../lib/hooks/useCardNumbers';

describe('useCardNumbers', () => {
  const errorMessages = {
    empty: '번호를 입력해주세요.',
    number: '번호는 숫자만 가능해요. ',
    length: '숫자는 최소 14자리만 가능해요.',
    brand: '해당 번호에 맞는 브랜드를 찾을 수 없어요.',
  };

  describe('유효성 검사', () => {
    it('카드 번호가 빈문자열이면 해당 오류 메세지를 반환한다..', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: '',
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.validationResult.error).toBe('empty');
      expect(result.current.validationErrorMessage).toBe(errorMessages.empty);
    });

    it('카드 번호가 숫자로만 이루어져있지 않으면 해당 오류 메세지를 반환한다..', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: 'abc123',
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.validationResult.error).toBe('number');
      expect(result.current.validationErrorMessage).toBe(errorMessages.number);
    });

    it('카드 번호가 14자리가 안되면 해당 오류 메세지를 반환한다..', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: '1234',
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.validationResult.error).toBe('length');
      expect(result.current.validationErrorMessage).toBe(errorMessages.length);
    });

    it('브랜드가 없으면, 해당 오류 메세지를 반환한다.,', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: [9999, 9999, 9999, 9999].join(''),
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.validationResult.error).toBe('brand');
      expect(result.current.validationErrorMessage).toBe(errorMessages.brand);
    });

    it('오류가 없으면 반환되는 오류 메세지는 없다.', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: [4999, 9999, 9999, 9999].join(''),
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.validationResult.error).toBe(null);
      expect(result.current.validationErrorMessage).toBe(null);
    });
  });

  describe('브랜드별 카드 번호 포맷팅', () => {
    it('비자 카드 번호 포맷팅', () => {
      const NUMBERS = ['4123', '4567', '8901', '2345'];
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: NUMBERS.join(''),
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.brand).toBe('visa');
      expect(result.current.formattedValue).toEqual(NUMBERS);
    });
    it('마스터 카드 번호 포맷팅', () => {
      const NUMBERS = ['5223', '4567', '8901', '2345'];
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: NUMBERS.join(''),
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.brand).toBe('master');
      expect(result.current.formattedValue).toEqual(NUMBERS);
    });
    it('다이너스 카드 번호 포맷팅', () => {
      const NUMBERS = ['3623', '456789', '0123'];
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: NUMBERS.join(''),
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.brand).toBe('diners');
      expect(result.current.formattedValue).toEqual(NUMBERS);
    });
    it('아멕스 카드 번호 포맷팅', () => {
      const NUMBERS = ['3412', '345678', '90123'];
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: NUMBERS.join(''),
          errorMessages,
          isNeedValidValue: true,
        }),
      );

      expect(result.current.brand).toBe('amex');
      expect(result.current.formattedValue).toEqual(NUMBERS);
    });
  });

  describe('isNeedValue에 따른 formattedValue값', () => {
    it('isNeedValue가 true이고, length 외의 오류가 있을 경우, formattedValue의 값은 null이다.', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: '',
          errorMessages,
          isNeedValidValue: true,
        }),
      );
      expect(result.current.formattedValue).toBe(null);
    });
    it('isNeedValue가 true이고, length가 오류가 있을 경우, formattedValue의 값은 빈문자열이 아니다.', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: '1234567890',
          errorMessages,
          isNeedValidValue: true,
        }),
      );
      expect(result.current.formattedValue !== null).toBeTruthy();
    });
    it('isNeedValue가 false이면, 오류가 있어도 formattedValue의 값은 빈문자열이 아니다.', () => {
      const { result } = renderHook(() =>
        useCardNumbers({
          numbers: '',
          errorMessages,
          isNeedValidValue: false,
        }),
      );
      expect(result.current.formattedValue !== null).toBeTruthy();
    });
  });
});
