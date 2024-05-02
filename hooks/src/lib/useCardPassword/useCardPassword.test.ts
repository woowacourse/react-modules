import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useCardPassword from './useCardPassword';

describe('useCardPassword custom hook', () => {
  const maxLength = 2;

  test('hook이 초기화되면, 주어진 initValue로 설정된다.', () => {
    const { result } = renderHook(() => useCardPassword('12', maxLength));
    expect(result.current.value).toBe('12');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test(`${maxLength}를 초과하는 값을 입력하면 "비밀번호는 ${maxLength}글자 까지만 입력이 가능해요." 라는 에러 메시지를 반환한다.`, () => {
    const { result } = renderHook(() => useCardPassword('', maxLength));
    act(() => {
      result.current.onChangeHandler({ target: { value: '123' } } as any);
    });
    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe(
      `비밀번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
    );
  });

  test('숫자가 아닌 값을 입력하면 "비밀번호는 숫자만 입력이 가능해요." 라는 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardPassword('', maxLength));
    act(() => {
      result.current.onChangeHandler({ target: { value: 'ab' } } as any);
    });
    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe(
      '비밀번호는 숫자만 입력이 가능해요.',
    );
  });

  test(`길이가 ${maxLength}인 값을 입력 후 포커스를 잃으면 isCompleted 상태가 true가 된다.`, () => {
    const { result } = renderHook(() => useCardPassword('', maxLength));
    act(() => {
      result.current.onChangeHandler({ target: { value: '12' } } as any);
    });
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('12');
    expect(result.current.isCompleted).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });

  test(`길이가 ${maxLength}이 아닌 값을 입력 후 포커스가 해제되면 "비밀번호는 ${maxLength}글자로 입력해 주세요." 라는 에러 메시지를 반환한다.`, () => {
    const { result } = renderHook(() => useCardPassword('', maxLength));
    act(() => {
      result.current.onChangeHandler({ target: { value: '1' } } as any);
    });
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('1');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe(
      `비밀번호는 ${maxLength}글자로 입력해 주세요.`,
    );
  });
});
