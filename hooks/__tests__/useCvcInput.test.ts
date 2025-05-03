import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useCvcInput } from '../src/lib/useCvcInput';

describe('useCvcInput custom hook 테스트', () => {
  let hookResult: RenderHookResult<ReturnType<typeof useCvcInput>, void>;

  beforeEach(() => {
    hookResult = renderHook<ReturnType<typeof useCvcInput>, void>(() => useCvcInput());
  });

  it('숫자 3자리를 입력하면, 에러가 발생하지 않는다.', () => {
    act(() => {
      hookResult.result.current.handleCvcChange('123');
    });
    expect(hookResult.result.current.cvcErrorMessage).toBe('');
    expect(hookResult.result.current.cvc).toBe('123');
  });

  it('문자가 입력되었을 때, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCvcChange('12a');
    });
    expect(hookResult.result.current.cvcErrorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('자리수가 3자리 미만이면, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCvcChange('12');
    });
    expect(hookResult.result.current.cvcErrorMessage).toBe('CVC는 3자리여야 합니다.');
  });
});
