import { renderHook } from '@testing-library/react';

import useCVC, { UseCardCVCProps } from './../lib/hooks/useCVC';

describe('useCVC', () => {
  const defaultProps: UseCardCVCProps = {
    cardCVC: '',
    errorMessages: {
      empty: 'CVC를 입력해주세요.',
      number: '숫자만 입력 가능합니다.',
      length: '3자리 숫자를 입력해주세요.',
    },
    validation: {
      length: 3,
    },
    isNeedValidValue: false,
  };

  describe('유효성 검사', () => {
    it('빈 문자열일 경우 오류 메시지를 반환한다', () => {
      const { result } = renderHook(() => useCVC(defaultProps));

      expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.empty);
      expect(result.current.validationResult.isFilledValue).toBe(false);
    });

    it('숫자가 아닐 경우 오류 메시지를 반환한다', () => {
      const props: UseCardCVCProps = {
        ...defaultProps,
        cardCVC: 'abc',
      };
      const { result } = renderHook(() => useCVC(props));

      expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.number);
      expect(result.current.validationResult.isValidNumber).toBe(false);
    });

    it('길이가 유효하지 않을 경우 오류 메시지를 반환한다', () => {
      const props: UseCardCVCProps = {
        ...defaultProps,
        cardCVC: '1234',
      };
      const { result } = renderHook(() => useCVC(props));

      expect(result.current.validationErrorMessage).toBe(defaultProps.errorMessages.length);
      expect(result.current.validationResult.isValidLength).toBe(false);
    });
  });

  describe('isNeedValidValue에 따른 formattedValue', () => {
    it('isNeedValidValue가 false일 경우 입력된 값을 그대로 반환한다', () => {
      const props: UseCardCVCProps = {
        ...defaultProps,
        cardCVC: '1234',
      };
      const { result } = renderHook(() => useCVC(props));

      expect(result.current.formattedValue).toBe('123');
    });

    it('isNeedValidValue가 true이고 length를 제외한 유효성 검사를 통과하지 못하면 빈 문자열을 반환한다', () => {
      const props: UseCardCVCProps = {
        ...defaultProps,
        cardCVC: 'abc',
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => useCVC(props));

      expect(result.current.formattedValue).toBe('');
    });
    it('isNeedValidValue가 true이고 다른 유효성 검사는 통과하고 length에 대한 유효성 검사를 통과하지 못하면 입력된 값을 반환한다', () => {
      const props: UseCardCVCProps = {
        ...defaultProps,
        cardCVC: 'ab',
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => useCVC(props));

      expect(result.current.formattedValue).toBe('');
    });

    it('isNeedValidValue가 true이고 유효성 검사에 통과할 경우 입력된 값을 반환한다', () => {
      const props: UseCardCVCProps = {
        ...defaultProps,
        cardCVC: '123',
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => useCVC(props));

      expect(result.current.formattedValue).toBe('123');
    });
  });
});
