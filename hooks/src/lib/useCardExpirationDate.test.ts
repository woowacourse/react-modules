import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardExpirationDate from './useCardExpirationDate';

describe('useCardExpirationDate 테스트', () => {
  it('유효기간이 만료된 카드 입력 시 에러 상태가 true가 된다.', () => {
    const MONTH_INPUT = '04';
    const YEAR_INPUT = '24';
    const { result } = renderHook(() => useCardExpirationDate());

    act(() => {
      result.current.month.onChange({
        target: { value: MONTH_INPUT },
      } as ChangeEvent<HTMLInputElement>);

      result.current.year.onChange({
        target: { value: YEAR_INPUT },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.month.error.state).toBeTruthy();
  });

  it('2자리 숫자가 아니라면 에러 상태가 true가 된다.', () => {
    const userInput = '1';
    const { result } = renderHook(() => useCardExpirationDate());

    act(() => {
      result.current.month.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);

      result.current.year.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.month.error.state).toBeTruthy();
    expect(result.current.year.error.state).toBeTruthy();
  });

  it('숫자가 아닌 다른 값이 입력되었을 때, 입력을 제한한다.', () => {
    const userInput = 'hello';
    const { result } = renderHook(() => useCardExpirationDate());

    act(() => {
      result.current.month.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);

      result.current.year.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.month.value).toBe('');
    expect(result.current.year.value).toBe('');
  });
});
