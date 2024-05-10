import { renderHook } from '@testing-library/react';

import usePassword, { UsePasswordProps } from '../lib/hooks/usePassword';

describe('usePassword', () => {
  const defaultProps: UsePasswordProps = {
    cardPassword: '',
    errorMessages: {
      empty: '비밀번호를 입력해주세요.',
      number: '숫자만 입력 가능합니다.',
      length: '비밀번호는 4자리여야 합니다.',
    },
    validation: {
      length: 4,
    },
    isNeedValidValue: false,
  };

  describe('유효성 검사', () => {
    it('빈 문자열일 경우 오류 메시지를 반환한다', () => {
      const { result } = renderHook(() => usePassword(defaultProps));

      expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.empty);
      expect(result.current.validationResult.isFilledValue).toBe(false);
    });

    it('숫자가 아닐 경우 오류 메시지를 반환한다', () => {
      const props: UsePasswordProps = {
        ...defaultProps,
        cardPassword: 'abcd',
      };
      const { result } = renderHook(() => usePassword(props));

      expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.number);
      expect(result.current.validationResult.isValidNumber).toBe(false);
    });

    it('길이에 대한 오류 메시지를 반환한다', () => {
      const props: UsePasswordProps = {
        ...defaultProps,
        cardPassword: '123',
      };
      const { result } = renderHook(() => usePassword(props));

      expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.length);
      expect(result.current.validationResult.isValidLength).toBe(false);
    });
  });

  describe('isNeedValidValue와 오류에 따른 formattedValue', () => {
    it('isNeedValidValue가 true이고 length를 제외한 오류일 경우 빈 문자열을 반환한다', () => {
      const props: UsePasswordProps = {
        ...defaultProps,
        cardPassword: 'abcd',
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => usePassword(props));

      expect(result.current.formattedValue).toBe('');
    });

    it('isNeedValidValue가 true이고 length 오류일 경우 입력한 문자열을 반환한다', () => {
      const props: UsePasswordProps = {
        ...defaultProps,
        cardPassword: '123',
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => usePassword(props));

      expect(result.current.formattedValue).toBe('123');
    });

    it('isNeedValidValue가 false이면 오류 상관없이 입력한 문자열을 반환한다', () => {
      const props: UsePasswordProps = {
        ...defaultProps,
        cardPassword: 'abcd',
        isNeedValidValue: false,
      };
      const { result } = renderHook(() => usePassword(props));

      expect(result.current.formattedValue).toBe('abcd');
    });
  });
});
