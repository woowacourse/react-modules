import { renderHook, act } from '@testing-library/react';
import { useCardNumbersInput, CardNumberInputEvent } from './useCardNumbersInput';
import { ERROR_MESSAGE } from './validator/constants/errorMessage';

describe('useCardNumbersInput', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = ['', '', '', ''];
    const { result } = renderHook(() => useCardNumbersInput());

    expect(result.current.cardNumberGroups).toEqual(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '3';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.cardNumberGroups).toEqual([userInput, '', '', '']);
  });

  it('숫자가 아닌 입력값에 에러메세지가 출력된다.', () => {
    const userInput = 'k';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.error.errorMessage).toBe(ERROR_MESSAGE.NUMBER.IS_NUMBER_STRING);
  });

  it('카드 번호가 4로 시작하면 브랜드가 VISA로 설정된다.', () => {
    const userInput = '4';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.cardBrand).toBe('VISA');
  });

  it('카드 번호가 51로 시작하면 브랜드가 MASTER로 설정된다.', () => {
    const userInput = '51';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.cardBrand).toBe('MASTER');
  });

  it('카드 번호가 36으로 시작하면 브랜드가 DINERS로 설정된다.', () => {
    const userInput = '36';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.cardBrand).toBe('DINERS');
  });

  it('카드 번호가 34 또는 37로 시작하면 브랜드가 AMEX로 설정된다.', () => {
    const userInput = '34';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.cardBrand).toBe('AMEX');
  });

  it('카드 번호가 624로 시작하면 브랜드가 UNIONPAY로 설정된다.', () => {
    const userInput = '624';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as CardNumberInputEvent);
    });

    expect(result.current.cardBrand).toBe('UNIONPAY');
  });
});
