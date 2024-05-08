import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardCompany from './useCardCompany';
describe('useCardCompany 테스트', () => {
  it('카드 회사 이름의 초기값 설정 시, 정확하게 설정되어야 한다.', () => {
    const initialValue = 'BC카드';
    const { result } = renderHook(() => useCardCompany(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('카드사를 선택하지 않은 경우 에러 상태가 true가 된다.', () => {
    const userInput = '';
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.error.state).toBeTruthy();
  });

  it('유효한 카드사가 입력, 선택되었을 때 유효성 상태가 true가 된다.', () => {
    const userInput = 'BC카드';
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.isValid).toBeTruthy();
  });
});
