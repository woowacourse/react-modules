import { renderHook } from '@testing-library/react';
import { useCardNumberValidation } from '../lib/hooks/useCardNumberValidation';

test('value값의 길이와 length가 같다면, errorMessage를 빈 값으로 반환한다.', () => {
  const { result } = renderHook(() => useCardNumberValidation({ value: '1234', length: 4 }));
  expect(result.current.errorMessage).toBe('');
});

// test('숫자를 입력하지 않은 경우, 숫자를 입력하라는 errorMessage를 반환한다.', () => {
//   const { result } = renderHook(() => useCardNumberValidation({ value: '가나다', length: 4 }));
//   expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
// });

// test('value에 빈 값이 입력되면, 4자리 숫자를 입력하라는 errorMessage를 반환한다.', () => {
//   const { result } = renderHook(() => useCardNumberValidation({ value: '', length: 4 }));
//   expect(result.current.errorMessage).toBe('4자리의 숫자를 입력하셔야 합니다.');
// });

// test('length가 지정된 값보다 작으면 errorMessage를 보여준다.', () => {
//   const { result } = renderHook(() => useCardNumberValidation({ value: '123', length: 4 }));
//   expect(result.current.errorMessage).toBe('4자리의 숫자를 입력하셔야 합니다.');
// });

test('length가 4자리가 되면 errorMessage가 사라진다.', () => {
  const { result } = renderHook(() => useCardNumberValidation({ value: '1234', length: 4 }));
  expect(result.current.errorMessage).toBe('');
});
