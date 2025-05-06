import { renderHook, act } from '@testing-library/react';
import usePassword from './usePassword';
import { ERROR_MESSAGE } from './constants/errorMessage';

test('3자리 숫자를 입력하면 정상 작동한다.', () => {
  const { result } = renderHook(() => usePassword());

  act(() => {
    result.current.handlePassword('123');
  });

  expect(result.current.error.errorMessage).toBe('');
});

test('숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => usePassword());

  act(() => {
    result.current.handlePassword('ab');
  });

  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.PASSWORD.NOT_A_NUMBER
  );
});

test('2자리가 아닌 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => usePassword());

  act(() => {
    result.current.handlePassword('1');
  });

  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.PASSWORD.INVALID_LENGTH
  );
});
