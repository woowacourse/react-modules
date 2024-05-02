import { renderHook, act } from '@testing-library/react';
import useExpiryDate from '../lib/useExpiryDate';

describe('useExpiryDate 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const { result } = renderHook(() => useExpiryDate(initialValue));

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual(initialValue);
  });

  it('month 입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '06';

    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.month.handleChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.month.value).toBe(userInput);
  });

  it('year 입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '40';

    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.year.handleChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.year.value).toBe(userInput);
  });

  it('month와 year 입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = { month: '12', year: '24' };
    const userInputMonth = '06';
    const userInputYear = '40';

    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.month.handleChange({
        target: { value: userInputMonth },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.year.handleChange({
        target: { value: userInputYear },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual({ month: userInputMonth, year: userInputYear });
  });

  it('month 입력값이 01월~12월 이내가 아니라면 에러이다', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '13';
    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.month.handleBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.month.errorInfo.isValid).toBe(false);
  });

  it('year 입력값이 24년 이후가 아니라면 에러이다', () => {
    const initialValue = { month: '12', year: '24' };
    const userInput = '23';
    const { result } = renderHook(() => useExpiryDate(initialValue));

    act(() => {
      result.current.year.handleBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.year.errorInfo.isValid).toBe(false);
  });

  it('초기값이 잘못 설정된다면 값이 비워진다.', () => {
    const initialValue = { month: '122', year: '234' };
    const reset = { month: '', year: '' };
    const { result } = renderHook(() => useExpiryDate(initialValue));

    const value = {
      month: result.current.month.value,
      year: result.current.year.value,
    };

    expect(value).toEqual(reset);
  });
});
