import { renderHook, act } from '@testing-library/react';
import useExpiryDate from './useExpiryDate';

test('월 입력에 1에서 12 사이의 숫자를 입력하면 정상 작동한다. ', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('11', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe('');
});

test('월 입력에 숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('ab', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe(
    '월은 숫자로 입력해 주세요.'
  );
});

test('월 입력에 2자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('1', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe(
    '월은 2자리로 입력해 주세요.'
  );
});

test('유효하지 않은 월을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('13', 'month');
  });

  expect(result.current.error[0].errorMessage).toBe('유효하지 않은 월입니다.');
});

test('연도 입력에 25 이상의 숫자를 입력하면 정상 작동한다. ', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('25', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe('');
});

test('연도 입력에 숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('ab', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe(
    '연도는 숫자로 입력해 주세요.'
  );
});

test('연도 입력에 2자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('1', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe(
    '연도는 2자리로 입력해 주세요.'
  );
});

test('유효하지 않은 연도를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.updateExpiryDate('24', 'year');
  });

  expect(result.current.error[1].errorMessage).toBe(
    '유효하지 않은 연도입니다.'
  );
});
