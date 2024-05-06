import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardExpirationDate from './useCardExpirationDate';

describe('useCardExpirationDate 테스트', () => {
  it('초기값이 정확하게 설정되어야 한다.', () => {
    const initialValue = {
      month: '01',
      year: '01',
    };
    const { result } = renderHook(() => useCardExpirationDate(initialValue));

    expect({ month: result.current.month.value, year: result.current.year.value }).toEqual(initialValue);
  });

  it.each([
    ['04', '24'],
    ['12', '23'],
  ])('유효기간이 만료된 카드 입력 시 에러 상태가 true가 된다.', (monthInput: string, yearInput: string) => {
    const { result } = renderHook(() => useCardExpirationDate());

    act(() => {
      result.current.month.onChange({
        target: { value: monthInput },
      } as ChangeEvent<HTMLInputElement>);

      result.current.year.onChange({
        target: { value: yearInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expirationDateError.state).toBeTruthy();
  });

  it.each([['1', '123']])('2자리 숫자가 아니라면 에러 상태가 true가 된다.', (userInput: string) => {
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

  it.each([['nakta', '/@[]', '한글입력']])('숫자가 아닌 다른 값이 입력되었을 때, 입력을 제한한다.', (userInput: string) => {
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
