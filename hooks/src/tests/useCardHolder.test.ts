import { renderHook, act } from '@testing-library/react';
import useCardHolder from '../lib/useCard/useCardHolder';

describe('useCardHolder 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = 'MARU COOKIE';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = 'MARU COOKIE';
    const userInput = 'CRON POBI';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userInput);
  });

  it('입력값이 숫자라면 에러이다', () => {
    const initialValue = '';
    const userInput = '123';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorInfo.isValid).toBe(false);
  });

  it('입력값이 한글이라면 에러이다', () => {
    const initialValue = '';
    const userInput = '쿠키';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorInfo.isValid).toBe(false);
  });

  it('성과 이름 사이에 공백이 없으면 에러이다', () => {
    const initialValue = '';
    const userInput = 'COOKIEMARU';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.errorInfo.isValid).toBe(false);
  });

  it('초기값이 올바르지 않은 값이라면 결과는 빈 값이다.', () => {
    const initialValue = '123';
    const reset = '';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(reset);
  });

  it('초기값이 소문자라면 대문자로 변환한다.', () => {
    const initialValue = 'maru cookie';
    const cardHolder = 'MARU COOKIE';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(cardHolder);
  });
});
