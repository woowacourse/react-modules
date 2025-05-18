import { renderHook, act } from '@testing-library/react';

import useCardPassword, { CardPasswordResult } from './useCardPassword';
import { ERROR_MESSAGE } from '../constants/errorMessage';

describe('useCardPasswordValidate', () => {
  let result: { current: CardPasswordResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardPassword());
    result = rendered.result;
  });

  it('숫자로 이루어진 2자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    act(() => {
      result.current.handlePasswordChange({
        target: {
          value: '12',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.password).toBe('12');
    expect(result.current.errorMessage).toBeNull();
  });

  it('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.handlePasswordChange({
        target: {
          value: '1a',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.password).toBe('1a');
    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_NUMBER);
  });

  it('2자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.handlePasswordChange({
        target: {
          value: '123',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.password).toBe('123');
    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_LENGTH);
  });
});
