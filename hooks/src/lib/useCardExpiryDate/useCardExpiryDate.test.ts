import { renderHook, act } from '@testing-library/react';
import useCardExpiryDate from './useCardExpiryDate';

import { DEFAULT_YEAR_LENGTH, DEFAULT_PARAMS } from './useCardExpiryDate';

describe('useCardExpiryDate', () => {
  const isYearFourDigits = false;
  const initialValue = { month: '12', year: '25' };

  it('초기값으로 받은 month와 year는 expiryDate 상태에 저장되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(isYearFourDigits, initialValue));

    expect(result.current.expiryDate).toEqual(initialValue);
  });

  it('각 2자리 숫자로 이루어진 유효한 month와 year가 handleUpdateExpiryDate를 통해 들어오면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleUpdateExpiryDate({ month: '11', year: '26' });
    });

    expect(result.current.expiryDate).toEqual({ month: '11', year: '26' });
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('2자리 숫자의 month 입력값이 허용 범위(01~12)를 벗어날 경우, validationResult의 isValid가 false로 반환되며 유효기간 월의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());
    const newValue = { month: '13', year: '25' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.invalidMonth,
    });
  });

  it('month 입력값에 문자가 포함될 경우, validationResult의 isValid가 false로 반환되며 유효기간 월의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());
    const newValue = { month: '1a', year: '25' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.invalidMonth,
    });
  });

  it('year 입력값의 자릿수가 1자리일 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());
    const newValue = { month: '12', year: '2' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.invalidYear(DEFAULT_YEAR_LENGTH[0]),
    });
  });

  it('year 입력값의 자릿수가 3자리일 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());
    const newValue = { month: '12', year: '202' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.invalidYear(DEFAULT_YEAR_LENGTH[0]),
    });
  });

  it('year 입력값에 문자가 포함된 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());
    const newValue = { month: '12', year: '2a' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.invalidYear(DEFAULT_YEAR_LENGTH[0]),
    });
  });

  it('각 두 자리 숫자로 이루어진 month와 year 입력값을 조합했을 때 유효기간이 만료된 것으로 확인되면, validationResult의 isValid가 false로 반환되며 유효 기간 만료에 따른 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate());
    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth() + 1;

    act(() => {
      result.current.handleUpdateExpiryDate({
        month: String(currentMonth - 1).padStart(2, '0'),
        year: String(currentYear),
      });
    });

    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.expiredDate,
    });
  });

  it('year 길이를 4로 설정한 상태에서 year 입력값이 2자리 숫자인 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const newIsYearFourDigits = true;
    const newYearLength = 4;
    const newValue = { month: '12', year: '25' };
    const { result } = renderHook(() => useCardExpiryDate(newIsYearFourDigits, initialValue));

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.invalidYear(newYearLength),
    });
  });

  it('year 길이를 4로 설정한 상태에서 year 입력값이 유효한 기간의 4자리 숫자인 경우, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const newIsYearFourDigits = true;
    const newValue = { month: '12', year: '2025' };
    const { result } = renderHook(() => useCardExpiryDate(newIsYearFourDigits, initialValue));

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({ isValid: true });
  });
});
