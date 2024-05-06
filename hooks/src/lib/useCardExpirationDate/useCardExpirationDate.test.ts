import { renderHook, waitFor } from '@testing-library/react';

import { act } from 'react';
import useCardExpirationDate from './useCardExpirationDate';

describe('useCardExpirationDate custom hook', () => {
  test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
    const { result } = renderHook(() => useCardExpirationDate(['12', '23'], 2));
    expect(result.current.values).toEqual(['12', '23']);
  });

  test('월 input에 01~12 범위를 초가하는 입력값이 입력될 때, onChangeHandler의 결과로 "유효기간 월은 01~12 사이만 입력이 가능해요" 라는 errorMessage를 반환합니다.', () => {
    const { result } = renderHook(() => useCardExpirationDate(['', ''], 2));
    act(() => {
      result.current.onChangeHandler({ target: { value: '13' } } as any, 0);
    });
    expect(result.current.errorMessage).toBe(
      '유효기간 월은 01~12 사이만 입력이 가능해요',
    );
  });

  test('모든 input의 focus가 해제된 경우, 만료된 카드일 경우 "만료된 카드입니다."라는 errorMessage를 반환합니다.', async () => {
    const { result } = renderHook(() => useCardExpirationDate(['02', '22'], 2));
    act(() => {
      result.current.onBlurHandler(0);
      result.current.onBlurHandler(1);
    });
    await waitFor(() => {
      expect(result.current.errorMessage).toBe('만료된 카드입니다.');
    });
  });

  test('올바른 입력값에서 onBlur 호출 시 errorMessage 없이 isCompleted가 true가 됩니다.', async () => {
    const { result } = renderHook(() => useCardExpirationDate(['12', '30'], 2));
    act(() => {
      result.current.onBlurHandler(0);
      result.current.onBlurHandler(1);
    });
    await waitFor(() => {
      expect(result.current.isCompleted).toBe(true);
      expect(result.current.errorMessage).toBe('');
    });
  });
});
