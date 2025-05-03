import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useCardPasswordInput } from '../src/lib/useCardPasswordInput';

describe('useCardPasswordInput custom hook 테스트', () => {
  let hookResult: RenderHookResult<ReturnType<typeof useCardPasswordInput>, void>;

  beforeEach(() => {
    hookResult = renderHook<ReturnType<typeof useCardPasswordInput>, void>(() => useCardPasswordInput());
  });

  it('비밀번호 앞 2자리를 입력하면, 에러가 발생하지 않는다.', () => {
    act(() => {
      hookResult.result.current.handleCardPasswordChange('12');
    });
    expect(hookResult.result.current.cardPasswordErrorMessage).toBe('');
    expect(hookResult.result.current.cardPassword).toBe('12');
  });

  it('문자가 입력되었을 때, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardPasswordChange('12a');
    });
    expect(hookResult.result.current.cardPasswordErrorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('자리수가 2자리 미만이면, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardPasswordChange('1');
    });
    expect(hookResult.result.current.cardPasswordErrorMessage).toBe('비밀번호는 2자리여야 합니다.');
  });
});
