import { renderHook, act } from '@testing-library/react';
import useCardExpiryDate from './useCardExpiryDate';

describe('useCardExpiryDate', () => {
  const initialValue = { month: '12', year: '25' };

  it('초기값으로 받은 month와 year는 expiryDate 상태에 저장되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));

    expect(result.current.expiryDate).toEqual(initialValue);
  });

  it('각 2자리 숫자로 이루어진 유효한 month와 year가 handleUpdateExpiryDate를 통해 들어오면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));

    act(() => {
      result.current.handleUpdateExpiryDate({ month: '11', year: '26' });
    });

    expect(result.current.expiryDate).toEqual({ month: '11', year: '26' });
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('2자리 숫자의 month 입력값이 허용 범위(01~12)를 벗어날 경우, validationResult의 isValid가 false로 반환되며 유효기간 월의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: '13', year: '25' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력하셔야 합니다.',
    });
  });

  it('month 입력값에 문자가 포함될 경우, validationResult의 isValid가 false로 반환되며 유효기간 월의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: '1a', year: '25' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력하셔야 합니다.',
    });
  });

  it('year 입력값의 자릿수가 1자리일 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: '12', year: '2' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '유효 기간의 연도는 2자리 숫자로 입력하셔야 합니다.',
    });
  });

  it('year 입력값의 자릿수가 3자리일 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: '12', year: '202' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '유효 기간의 연도는 2자리 숫자로 입력하셔야 합니다.',
    });
  });

  it('year 입력값에 문자가 포함된 경우, validationResult의 isValid가 false로 반환되며 유효기간 연도의 입력 형식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: '12', year: '2a' };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '유효 기간의 연도는 2자리 숫자로 입력하셔야 합니다.',
    });
  });

  it('month와 year 입력값을 조합했을 때 유효기간이 만료된 것으로 확인되면, validationResult의 isValid가 false로 반환되며 유효 기간 만료에 따른 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
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
      errorMessage: '유효 기간이 만료되었습니다. 확인 후 다시 입력해 주세요.',
    });
  });
});
