import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useCardHolderName from './useCardHolderName';

describe('useCardHolderName custom hook', () => {
  const maxLength = 50;

  test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
    const { result } = renderHook(() =>
      useCardHolderName('HARU KYLE', maxLength),
    );
    expect(result.current.value).toBe('HARU KYLE');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test(`${maxLength}를 초과하는 값을 입력하면 "이름은 ${maxLength}글자 까지만 입력이 가능해요." 라는 에러 메시지를 반환한다.`, () => {
    const { result } = renderHook(() => useCardHolderName(''));
    act(() => {
      result.current.onChangeHandler({
        target: { value: ''.padEnd(maxLength + 1, 'a') },
      } as any);
    });
    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe(
      `이름은 ${maxLength}글자 까지만 입력이 가능해요.`,
    );
  });

  test('{영문자 + 공백 + 영문자}의 형식이 아닌 값을 입력하면 "이름은 영어만 입력이 가능해요.(글자 간 공백은 1개까지만 가능합니다.)" 라는 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardHolderName('', maxLength));
    act(() => {
      result.current.onChangeHandler({ target: { value: 'John123' } } as any);
    });
    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe(
      '이름은 영어만 입력이 가능해요.(글자 간 공백은 1개까지만 가능합니다.)',
    );
  });

  test('{영문자 + 공백 + 영문자}의 형식으로 값을 입력하고, 포커스가 해제되면 isCompleted를 true가 된다.', () => {
    const { result } = renderHook(() =>
      useCardHolderName('HARU KYLE', maxLength),
    );
    act(() => {
      result.current.onChangeHandler({ target: { value: 'HARU KYLE' } } as any);
    });
    act(() => {
      result.current.onBlurHandler();
    });
    expect(result.current.value).toBe('HARU KYLE');
    expect(result.current.isCompleted).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
