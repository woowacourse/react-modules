import { renderHook } from '@testing-library/react';

import useExpiryDate, { UseExpiryDateProps } from '../lib/hooks/cardExpiryDate/useExpiryDate';

describe('useExpiryDate', () => {
  const currentYear = new Date().getFullYear() - 2000;
  const currentMonth = new Date().getMonth() + 1;

  const defaultProps: UseExpiryDateProps = {
    expiryDate: {
      month: '',
      year: '',
    },
    errorMessages: {
      empty: '유효기간을 입력해주세요.',
      number: '숫자만 입력 가능합니다.',
      length: '2자리로 입력해주세요.',
      yearFormat: '올바른 연도 형식이 아닙니다.',
      monthFormat: '올바른 월 형식이 아닙니다.',
      availability: '유효하지 않은 사용 기간입니다.',
    },
    validation: {
      maxYearsFromNow: 5,
    },
    isNeedValidValue: false,
  };

  describe('유효성 검사', () => {
    describe('달', () => {
      it('빈 문자열일 경우 오류 메시지를 반환한다', () => {
        const { result } = renderHook(() => useExpiryDate(defaultProps));

        expect(result.current.validationErrorMessage?.month).toBe(defaultProps.errorMessages.empty);
        expect(result.current.validationResult.month.isValid).toBe(false);
        expect(result.current.validationResult.month.error).toBe('empty');
      });

      it('숫자가 아닐 경우 오류 메시지를 반환한다', () => {
        const props: UseExpiryDateProps = {
          ...defaultProps,
          expiryDate: {
            ...defaultProps.expiryDate,
            month: 'aa',
          },
        };
        const { result } = renderHook(() => useExpiryDate(props));

        expect(result.current.validationErrorMessage?.month).toBe(defaultProps.errorMessages.number);
        expect(result.current.validationResult.month.isValid).toBe(false);
        expect(result.current.validationResult.month.error).toBe('number');
      });

      it('1-12 이외의 숫자일 경우 오류 메시지를 반환한다', () => {
        const props: UseExpiryDateProps = {
          ...defaultProps,
          expiryDate: {
            ...defaultProps.expiryDate,
            month: '13',
          },
        };
        const { result } = renderHook(() => useExpiryDate(props));

        expect(result.current.validationErrorMessage?.month).toBe(defaultProps.errorMessages.monthFormat);
        expect(result.current.validationResult.month.isValid).toBe(false);
        expect(result.current.validationResult.month.error).toBe('format');
      });

      it('2자리까지만 입력 가능하고, 그 외의 경우 오류 메시지를 반환한다', () => {
        const props: UseExpiryDateProps = {
          ...defaultProps,
          expiryDate: {
            ...defaultProps.expiryDate,
            month: '123',
          },
        };
        const { result } = renderHook(() => useExpiryDate(props));

        expect(result.current.validationErrorMessage?.month).toBe(defaultProps.errorMessages.length);
        expect(result.current.validationResult.month.isValid).toBe(false);
        expect(result.current.validationResult.month.error).toBe('length');
      });
    });

    describe('연도', () => {
      it('빈 문자열일 경우 오류 메시지를 반환한다', () => {
        const { result } = renderHook(() => useExpiryDate(defaultProps));

        expect(result.current.validationErrorMessage?.year).toBe(defaultProps.errorMessages.empty);
        expect(result.current.validationResult.year.isValid).toBe(false);
        expect(result.current.validationResult.year.error).toBe('empty');
      });

      it('숫자가 아닐 경우 오류 메시지를 반환한다', () => {
        const props: UseExpiryDateProps = {
          ...defaultProps,
          expiryDate: {
            ...defaultProps.expiryDate,
            year: 'aa',
          },
        };
        const { result } = renderHook(() => useExpiryDate(props));

        expect(result.current.validationErrorMessage?.year).toBe(defaultProps.errorMessages.number);
        expect(result.current.validationResult.year.isValid).toBe(false);
        expect(result.current.validationResult.year.error).toBe('number');
      });

      it('현재 연도를 기준으로 maxYearsFromNow까지의 연도만 가능하고, 그렇지 않으면 오류 메시지를 반환한다', () => {
        const props: UseExpiryDateProps = {
          ...defaultProps,
          expiryDate: {
            ...defaultProps.expiryDate,
            year: `${currentYear + 11}`,
          },
        };
        const { result } = renderHook(() => useExpiryDate(props));

        expect(result.current.validationErrorMessage?.year).toBe(defaultProps.errorMessages.yearFormat);
        expect(result.current.validationResult.year.isValid).toBe(false);
        expect(result.current.validationResult.year.error).toBe('format');
      });

      it('2자리까지만 입력 가능하고, 그 외의 경우 오류 메시지를 반환한다', () => {
        const props: UseExpiryDateProps = {
          ...defaultProps,
          expiryDate: {
            ...defaultProps.expiryDate,
            year: '1234',
          },
        };
        const { result } = renderHook(() => useExpiryDate(props));

        expect(result.current.validationErrorMessage?.year).toBe(defaultProps.errorMessages.length);
        expect(result.current.validationResult.year.isValid).toBe(false);
        expect(result.current.validationResult.year.error).toBe('length');
      });
    });

    describe('사용성', () => {
      test.each([
        {
          ...defaultProps.expiryDate,
          month: `${currentMonth < 10 ? '0' : ''}${currentMonth}`,
          year: `${currentYear - 1}`,
        },
        {
          ...defaultProps.expiryDate,
          month: `${currentMonth - 1 < 10 ? '0' : ''}${currentMonth - 1}`,
          year: `${currentYear}`,
        },
      ])(
        '사용 가능한 카드 기간은 현재 달, 현재 연도를 기준으로 그 이후이며, 그렇지 않을 경우 오류 메시지를 반환한다',
        (expiryDate) => {
          const props: UseExpiryDateProps = {
            ...defaultProps,
            expiryDate,
          };
          const { result } = renderHook(() => useExpiryDate(props));

          expect(result.current.validationErrorMessage?.availability).toBe(defaultProps.errorMessages.availability);
          expect(result.current.validationResult.isValidAvailability).toBe(false);
        },
      );
    });
  });

  it('유효한 사용 기간인 경우 오류 메시지가 없어야 한다', () => {
    const props: UseExpiryDateProps = {
      ...defaultProps,
      expiryDate: {
        ...defaultProps.expiryDate,
        month: `${currentMonth < 10 ? '0' : ''}${currentMonth}`,
        year: `${currentYear}`,
      },
    };
    const { result } = renderHook(() => useExpiryDate(props));

    expect(result.current.validationErrorMessage?.month).toBeNull();
    expect(result.current.validationErrorMessage?.year).toBeNull();
    expect(result.current.validationErrorMessage?.availability).toBeNull();
  });

  describe('isNeedValidValue에 따른 formattedValue', () => {
    it('isNeedValidValue가 true일 때 monthError 또는 yearError가 number이면 빈 문자열을 반환한다', () => {
      const props: UseExpiryDateProps = {
        ...defaultProps,
        expiryDate: {
          ...defaultProps.expiryDate,
          month: 'aa',
          year: 'bb',
        },
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => useExpiryDate(props));

      expect(result.current.formattedValue?.month).toBe('');
      expect(result.current.formattedValue?.year).toBe('');
    });

    it('isNeedValidValue가 true일 때 monthError 또는 yearError가 number가 아니면 입력한 문자열대로 반환한다', () => {
      const props: UseExpiryDateProps = {
        ...defaultProps,
        expiryDate: {
          ...defaultProps.expiryDate,
          month: '12',
          year: '2024',
        },
        isNeedValidValue: true,
      };
      const { result } = renderHook(() => useExpiryDate(props));

      expect(result.current.formattedValue?.month).toBe('12');
      expect(result.current.formattedValue?.year).toBe('20');
    });

    it('isNeedValidValue가 false이면 오류가 나도 입력한 문자열대로 반환한다', () => {
      const props: UseExpiryDateProps = {
        ...defaultProps,
        expiryDate: {
          ...defaultProps.expiryDate,
          month: 'aa',
          year: 'bb',
        },
        isNeedValidValue: false,
      };
      const { result } = renderHook(() => useExpiryDate(props));

      expect(result.current.formattedValue?.month).toBe('aa');
      expect(result.current.formattedValue?.year).toBe('bb');
    });
  });
});
