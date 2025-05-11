import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useCardNumberInput } from '../src/lib/useCardNumberInput';

describe('useCardNumberInput custom hook 테스트', () => {
  let hookResult: RenderHookResult<ReturnType<typeof useCardNumberInput>, void>;

  beforeEach(() => {
    hookResult = renderHook<ReturnType<typeof useCardNumberInput>, void>(() => useCardNumberInput());
  });

  it('카드 번호 4자리를 입력하면, 에러가 발생하지 않는다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('first', '1234');
    });
    expect(hookResult.result.current.cardNumberError.first).toBe('');
    expect(hookResult.result.current.cardNumbers.first).toBe('1234');
  });

  it('문자가 입력되었을 때, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('first', '12a4');
    });
    expect(hookResult.result.current.cardNumberError.first).toBe('숫자만 입력 가능합니다.');
  });
});
