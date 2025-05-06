import { renderHook, act } from '@testing-library/react';
import useCvcNumber from './useCvcNumber';
import { ERROR_MESSAGE } from './constants/errorMessage';

test('3자리 숫자가 입력되면 정상 작동한다.', () => {
  const { result } = renderHook(() => useCvcNumber());

  act(() => {
    result.current.handleCvc('123');
  });

  expect(result.current.error.errorMessage).toBe('');
});

test('숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useCvcNumber());

  act(() => {
    result.current.handleCvc('ab');
  });

  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.CVC.NOT_A_NUMBER
  );
});

test('3자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useCvcNumber());

  act(() => {
    result.current.handleCvc('12');
  });

  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.CVC.INVALID_LENGTH
  );
});
