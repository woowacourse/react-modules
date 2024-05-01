import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import useCardHolder from '../useCardHolder';

describe('useCardHolder', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = 'HAILEY RIAN';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardHolder(initialValue));
    const userValue = 'HAILEY RIAN';
    act(() => {
      result.current.onChange({
        target: { value: userValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userValue);
  });

  it('영어 대문자가 아니면 에러를 낸다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardHolder(initialValue));
    const userValue = 'hailey rian';

    act(() => {
      result.current.onChange({
        target: { value: userValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorStatus).toBe(ErrorStatus.ONLY_UPPERCASE);
  });

  it('빈칸이 두 개이면 에러를 낸다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardHolder(initialValue));
    const userValue = 'HAILEY  RIAN';

    act(() => {
      result.current.onChange({
        target: { value: userValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorStatus).toBe(ErrorStatus.IS_DOUBLE_BLANK);
  });
});
