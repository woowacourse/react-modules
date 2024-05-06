import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';

describe('useCardNumbers custom hook', () => {
  const maxLength = 4;

  test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
    const { result } = renderHook(() =>
      useCardNumbers(['1234', '5678', '9012', '3456'], maxLength),
    );
    expect(result.current.values).toEqual(['1234', '5678', '9012', '3456']);
  });

  test(`카드번호의 각 input에서 ${maxLength}를 초과하는 값을 입력하면 "카드번호는 ${maxLength}글자 까지만 입력이 가능해요." 라는 errorMessage를 반환한다.`, () => {
    const { result } = renderHook(() =>
      useCardNumbers(['', '', '', ''], maxLength),
    );
    act(() => {
      result.current.onChangeHandler({ target: { value: '12345' } } as any, 0);
    });
    expect(result.current.errorMessage).toBe(
      `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
    );
  });

  test('모든 input에서 포커스가 해제됐을 때, 전체 카드 번호가 16글자가 아니라면 "카드번호는 16글자로 입력해 주세요." 라는 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() =>
      useCardNumbers(['1234', '567', '9012', ''], maxLength),
    );
    act(() => {
      result.current.onBlurHandler(0);
      result.current.onBlurHandler(1);
    });
    expect(result.current.errorMessage).toBe(
      '카드번호는 16글자로 입력해 주세요.',
    );
  });

  test('모든 input에서 포커스가 해제됐을 때, 전체 카드 번호가 16글자라면 isCompleted가 true로 설정된다.', () => {
    const { result } = renderHook(() =>
      useCardNumbers(['1234', '5678', '9012', '3456'], maxLength),
    );
    act(() => {
      result.current.onBlurHandler(0);
      result.current.onBlurHandler(1);
    });
    expect(result.current.isCompleted).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
