import { renderHook } from '@testing-library/react';
import useCardNumberValidation from '../lib/useCardNumberValidation';

describe('useCardNumberValidation 테스트', () => {
  it('CardNumber로 모두 유효한 형태가 들어오면 isCardNumberError에 false로 가득찬 배열을 반환한다.', () => {
    const cardNumbers = {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    };

    const { result } = renderHook(() => useCardNumberValidation(cardNumbers));
    expect(result.current.isCardNumberError).toEqual([false, false, false, false]);
  });

  it('CardNumber로 유효하지 않은 형태가 들어오면 isCardNumberError 중 해당하는 부분만 true인 배열을 반환한다.', () => {
    const cardNumbers = {
      first: '1234',
      second: 'asdf',
      third: '1234',
      fourth: '1234',
    };

    const { result } = renderHook(() => useCardNumberValidation(cardNumbers));
    expect(result.current.isCardNumberError).toEqual([false, true, false, false]);
    expect(result.current.errorText).toBe('입력값은 숫자여야합니다.');
  });
});
