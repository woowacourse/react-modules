import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ERROR_MESSAGE } from '../constants/errorMessage';

test('4자리 숫자가 입력되면 정상 작동된다.', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('1234');
  });

  expect(result.current.error.errorMessage).toBe('');
});

test('숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('ab');
  });

  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER
  );
});

test('4자리가 아닌 숫자를 validate 하면 에러 메시지가 세팅된다', () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumbers('12');
  });

  // length 수정 필요
  expect(result.current.error.errorMessage).toBe(
    ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH(4)
  );
});
