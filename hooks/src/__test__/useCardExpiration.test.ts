import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardExpirationInput from '../lib/useCardExpirationInput';

describe('useCardExpiration 훅 테스트', () => {
  it.each(['-1', '0.5', 'hey'])(
    '월에 숫자가 아닌 값(%s)을 입력하면 isError: true와 에러 메세지를 반환한다.',
    (value) => {
      const { result } = renderHook(() => useCardExpirationInput());
      act(() => result.current.setCardExpirationValue.month(value));
      expect(result.current.errorInfo.month.isError).toBe(true);
      expect(result.current.errorInfo.month.errorText).toBe('입력값이 숫자가 아닙니다.');
    }
  );

  it('월에 최대 길이를 초과한 값을 입력하면 isError: true와 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    const overInput = '123';

    act(() => result.current.setCardExpirationValue.month(overInput));
    expect(result.current.errorInfo.month.isError).toBe(true);
    expect(result.current.errorInfo.month.errorText).toBe('입력값이 최대 길이를 초과했습니다.');
  });

  it.each(['-1', '0.5', 'hey'])(
    '년도에 숫자가 아닌 값(%s)을 입력하면 isError: true와 에러 메세지를 반환한다.',
    (value) => {
      const { result } = renderHook(() => useCardExpirationInput());
      act(() => result.current.setCardExpirationValue.year(value));
      expect(result.current.errorInfo.year.isError).toBe(true);
      expect(result.current.errorInfo.year.errorText).toBe('입력값이 숫자가 아닙니다.');
    }
  );

  it('년도에 최대 길이를 초과한 값을 입력하면 isError: true와 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    const overInput = '123';

    act(() => result.current.setCardExpirationValue.year(overInput));
    expect(result.current.errorInfo.year.isError).toBe(true);
    expect(result.current.errorInfo.year.errorText).toBe('입력값이 최대 길이를 초과했습니다.');
  });

  it('월과 년도에 숫자로 이루어진 최대 길이를 넘지 않은 값을 입력하면 isError: false와 빈 에러 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    const rightMonthInput = '12';
    const rightYearInput = '99';

    act(() => result.current.setCardExpirationValue.month(rightMonthInput));
    act(() => result.current.setCardExpirationValue.year(rightYearInput));
    expect(result.current.errorInfo.month.isError).toBe(false);
    expect(result.current.errorInfo.month.errorText).toBe('');
    expect(result.current.errorInfo.year.isError).toBe(false);
    expect(result.current.errorInfo.year.errorText).toBe('');
  });
});
