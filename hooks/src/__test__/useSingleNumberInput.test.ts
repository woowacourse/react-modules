import { renderHook } from '@testing-library/react';
import useSingleNumberInput from '../lib/useSingleNumberInput';
import { act } from 'react';

describe('useSingleNumberInput 훅 테스트', () => {
  const maxLength = 4;

  it.each(['-1', '0.5', 'hey'])(
    '단일 숫자 입력에 숫자가 아닌 값(%s)을 입력하면 isError: true와 에러 메세지를 반환한다.',
    (value) => {
      const { result } = renderHook(() => useSingleNumberInput(maxLength));
      act(() => result.current.setInputValue(value));
      expect(result.current.errorInfo.isError).toBe(true);
      expect(result.current.errorInfo.errorText).toBe('입력값이 숫자가 아닙니다.');
    }
  );

  it('단일 숫자 입력에 최대 길이를 초과한 값을 입력하면 isError: true와 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useSingleNumberInput(maxLength));
    const overInput = '12345';

    act(() => result.current.setInputValue(overInput));
    expect(result.current.errorInfo.isError).toBe(true);
    expect(result.current.errorInfo.errorText).toBe('입력값이 최대 길이를 초과했습니다.');
  });

  it('단일 숫자 입력에 숫자로 이루어진 최대 길이를 넘지 않은 값을 입력하면 isError: false와 빈 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useSingleNumberInput(maxLength));
    const rightInput = '1234';

    act(() => result.current.setInputValue(rightInput));
    expect(result.current.errorInfo.isError).toBe(false);
    expect(result.current.errorInfo.errorText).toBe('');
  });
});
