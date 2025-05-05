import { renderHook, act } from '@testing-library/react';
import { useCardCompanyInput } from './useCardCompany';
import { ChangeEvent } from 'react';

describe('useCardCompanyInput', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardCompanyInput());

    expect(result.current.cardCompany).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '카카오뱅크';
    const { result } = renderHook(() => useCardCompanyInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.cardCompany).toBe(userInput);
  });
});
