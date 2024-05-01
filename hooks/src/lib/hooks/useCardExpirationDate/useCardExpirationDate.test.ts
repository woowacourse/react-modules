import { renderHook, waitFor } from '@testing-library/react';
import useCardExpirationDate, { EXPIRATION_DATE_ERROR_MESSAGES } from './useCardExpirationDate';

describe('useCardExpirationDate 커스텀 훅 테스트', () => {
  const { result } = renderHook(() => useCardExpirationDate());

  it('올바른 달을 입력하면 유효하다', () => {
    result.current.handleMonthChange('12');

    waitFor(() => expect(result.current.isValidMonth).toBe(true));
  });

  it('숫자가 아닌 달을 입력하면 유효하지 않다.', () => {
    result.current.handleMonthChange('일');

    waitFor(() => expect(result.current.isValidMonth).toBe(false));
  });

  it('숫자가 아닌 달을 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleMonthChange('일');

    waitFor(() =>
      expect(result.current.isValidMonth).toBe(EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER)
    );
  });

  it('2자 미만의 달을 입력하면 유효하지 않다.', () => {
    result.current.handleMonthChange('1');

    waitFor(() => expect(result.current.isValidMonth).toBe(false));
  });

  it('2자 미만의 달을 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleMonthChange('1');

    waitFor(() =>
      expect(result.current.monthErrorMessages).toBe(EXPIRATION_DATE_ERROR_MESSAGES.INVALID_MONTH)
    );
  });

  it('01 ~ 12 사이의 달을 입력하지 않으면 유효하지 않다.', () => {
    result.current.handleMonthChange('v');

    waitFor(() => expect(result.current.isValidMonth).toBe(false));
  });

  it('01 ~ 12 사이의 달을 입력하지 않으면 에러 메세지를 표시한다.', () => {
    result.current.handleMonthChange('v');

    waitFor(() =>
      expect(result.current.monthErrorMessages).toBe(EXPIRATION_DATE_ERROR_MESSAGES.INVALID_MONTH)
    );
  });

  it('올바른 년도를 입력하면 유효하다', () => {
    result.current.handleYearChange('25');

    waitFor(() => expect(result.current.isValidYear).toBe(true));
  });

  it('숫자가 아닌 년도를 입력하면 유효하지 않다.', () => {
    result.current.handleYearChange('ㄱ');

    waitFor(() => expect(result.current.isValidYear).toBe(false));
  });

  it('숫자가 아닌 년도를 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleYearChange('ㄱ');

    waitFor(() =>
      expect(result.current.yearErrorMessages).toBe(EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER)
    );
  });

  it('2자 미만의 년도를 입력하면 유효하지 않다.', () => {
    result.current.handleYearChange('1');

    waitFor(() => expect(result.current.isValidYear).toBe(false));
  });

  it('2자 미만의 년도를 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleYearChange('1');

    waitFor(() =>
      expect(result.current.yearErrorMessages).toBe(EXPIRATION_DATE_ERROR_MESSAGES.INVALID_YEAR)
    );
  });

  it('과거의 년도를 입력하면 유효하지 않다.', () => {
    result.current.handleYearChange('23');

    waitFor(() => expect(result.current.isValidYear).toBe(false));
  });

  it('과거의 년도를 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleYearChange('23');

    waitFor(() =>
      expect(result.current.yearErrorMessages).toBe(EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE)
    );
  });

  it('현재의 년도에 과거의 달을 입력하면 유효하지 않다.', () => {
    result.current.handleMonthChange('03');
    result.current.handleYearChange('24');

    waitFor(() => expect(result.current.isValidMonth).toBe(false));
  });

  it('현재의 년도에 과거의 달을 입력하면 에러 메시지를 표시한다.', () => {
    result.current.handleMonthChange('03');
    result.current.handleYearChange('24');

    waitFor(() =>
      expect(result.current.monthErrorMessages).toBe(EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE)
    );
  });
});
