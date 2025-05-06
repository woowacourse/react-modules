import { renderHook, act } from '@testing-library/react';
import useExpiryDate from './useExpiryDate';
import { ERROR_MESSAGE } from './constants/errorMessage';

test('월 입력에 1에서 12 사이의 숫자를 입력하면 정상 작동한다. ', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('11', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe('');
});

test('월 입력에 숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('ab', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe(
    ERROR_MESSAGE.EXPIRY_DATE.MONTH_IS_NOT_A_NUMBER
  );
});

test('월 입력에 2자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('1', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe(
    ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH_LENGTH
  );
});

test('유효하지 않은 월을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('13', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe(
    ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH
  );
});

test('연도 입력에 25 이상의 숫자를 입력하면 정상 작동한다. ', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('25', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe('');
});

test('연도 입력에 숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('ab', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe(
    ERROR_MESSAGE.EXPIRY_DATE.YEAR_IS_NOT_A_NUMBER
  );
});

test('연도 입력에 2자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('1', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe(
    ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR_LENGTH
  );
});

test('유효하지 않은 연도를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDate('24', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe(
    ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR
  );
});
