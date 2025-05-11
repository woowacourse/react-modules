import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardNumberInput from '../lib/useCardNumberInput';

describe('useCardNumberInput 훅 테스트', () => {
  it.each(['-1', '0.5', 'hey'])(
    '카드 번호에 숫자가 아닌 값(%s)을 입력하면 isError: true와 에러 메세지를 반환한다.',
    (value) => {
      const { result } = renderHook(() => useCardNumberInput());
      act(() => result.current.setCardNumberInputValue(value));
      expect(result.current.errorInfo.isError).toBe(true);
      expect(result.current.errorInfo.errorText).toBe('입력값이 숫자가 아닙니다.');
    }
  );

  it('카드 번호에 최대 길이를 초과한 값을 입력하면 isError: true와 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumberInput());
    const overInput = '12345678901234567';

    act(() => result.current.setCardNumberInputValue(overInput));
    expect(result.current.errorInfo.isError).toBe(true);
    expect(result.current.errorInfo.errorText).toBe('입력값이 최대 길이를 초과했습니다.');
  });

  it('카드 번호에 숫자로 이루어진 최대 길이를 넘지 않은 값을 입력하면 isError: false와 빈 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumberInput());
    const rightInput = '1234567890123456';

    act(() => result.current.setCardNumberInputValue(rightInput));
    expect(result.current.errorInfo.isError).toBe(false);
    expect(result.current.errorInfo.errorText).toBe('');
  });
});
