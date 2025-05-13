import {act, renderHook} from '@testing-library/react';
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from '../lib/constants/validation';
import useExpirationDate from '../lib/hooks/useExpirationDate';

const defaultExpirationDateValidationValue = {
  month: defaultValidationValue,
  year: defaultValidationValue,
};

describe('useExpirationDate', () => {
  it('유효 기간이 올바른 경우 에러가 발생하지 않는다.', () => {
    // when
    const {result} = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange('month', '04');
      result.current.onChange('year', '25');
    });

    // then
    expect(result.current.expirationDateValidationResult).toEqual(
      defaultExpirationDateValidationValue
    );
  });

  it('유효 기간이 숫자가 아닌 경우 에러가 발생한다.', () => {
    // given
    const expectedErrorResult = {
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    };

    // when
    const {result} = renderHook(() => useExpirationDate());
    act(() => {
      result.current.onChange('month', 'ㄱ');
      result.current.onChange('year', 'ㄴ');
    });

    // then
    expect(result.current.expirationDateValidationResult).toEqual({
      month: expectedErrorResult,
      year: expectedErrorResult,
    });
  });

  it('유효 기간의 각 섹션의 자릿수가 2가 아닌 경우 에러가 발생한다.', () => {
    // given
    const MAX_LENGTH = 2;

    const expectedErrorResult = {
      isError: true,
      errorMessage: ERROR_MESSAGE.generateInvalidLengthMsg(MAX_LENGTH),
    };

    // when
    const {result} = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange('month', '1');
      result.current.onChange('year', '2');
    });

    // then
    expect(result.current.expirationDateValidationResult).toEqual({
      month: expectedErrorResult,
      year: expectedErrorResult,
    });
  });

  it.each(['00', '13'])(
    "월 값이 '%s'인 경우: 월의 범위(01~12)를 벗어나면 에러가 발생한다.",
    (monthValue: string) => {
      // when
      const {result} = renderHook(() => useExpirationDate());

      act(() => {
        result.current.onChange('month', monthValue);
      });

      // then
      expect(result.current.expirationDateValidationResult).toEqual({
        ...defaultExpirationDateValidationValue,
        month: {
          isError: true,
          errorMessage: ERROR_MESSAGE.INVALID_MONTH,
        },
      });
    }
  );

  it('연도가 현재 연도보다 작은 경우 에러가 발생한다.', () => {
    // given
    const currentYear = new Date().getFullYear() % 100;

    // when
    const {result} = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange('year', String(currentYear - 1));
    });

    // then
    expect(result.current.expirationDateValidationResult).toEqual({
      ...defaultExpirationDateValidationValue,
      year: {
        isError: true,
        errorMessage: ERROR_MESSAGE.generateInvalidYearMsg(currentYear),
      },
    });
  });
});
