import { renderHook, act } from '@testing-library/react';
import { useCvcInput } from '../src/lib/useCvcInput';

describe('useCvcInput custom hook 테스트', () => {
  it('숫자 3자리를 입력하면, 에러가 발생하지 않는다.', () => {
    const { result } = renderHook(() => useCvcInput());
    act(() => {
      result.current.handleCvcChange('123');
    });
    expect(result.current.cvcErrorMessage).toBe('');
    expect(result.current.cvc).toBe('123');
  });

  it('문자가 입력되었을 때, 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCvcInput());
    act(() => {
      result.current.handleCvcChange('12a');
    });
    expect(result.current.cvcErrorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('자리수가 3자리 미만이면, 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCvcInput());
    act(() => {
      result.current.handleCvcChange('12');
    });
    expect(result.current.cvcErrorMessage).toBe('CVC는 3자리여야 합니다.');
  });
});
