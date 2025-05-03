import { renderHook, act } from '@testing-library/react';

import useCardPasswordValidate, {
  CardPasswordValidateResult
} from './useCardPasswordValidate';

describe('useCardPasswordValidate', () => {
  let result: { current: CardPasswordValidateResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardPasswordValidate());
    result = rendered.result;
  });

  it('숫자로 이루어진 2자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    act(() => {
      result.current.validateCardPassword('12');
    });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.validateCardPassword('1a');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe('숫자만 입력해주세요.');
  });

  it('2자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.validateCardPassword('123');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe('2자리만 입력해주세요.');
  });
});
