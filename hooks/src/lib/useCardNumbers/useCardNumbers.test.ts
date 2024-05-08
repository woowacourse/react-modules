import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardNumbers from './useCardNumbers';

describe('useCardNumbers 테스트', () => {
  const initialValue = [
    { value: '', length: 4 },
    { value: '', length: 4 },
    { value: '', length: 4 },
    { value: '', length: 4 },
  ];

  it('카드 번호의 초기값 설정 시, 정확하게 설정되어야 한다.', () => {
    const setInitialValue = [
      { value: '1234', length: 4 },
      { value: '1234', length: 4 },
      { value: '1234', length: 4 },
      { value: '1234', length: 4 },
    ];

    const { result } = renderHook(() => useCardNumbers(setInitialValue));

    expect(result.current.cardNumbers.map(({ value }) => value)).toEqual(setInitialValue.map(({ value }) => value));
  });

  it.each([['nakta'], ['/@[]'], ['한글입력']])('입력값이 숫자가 아니라면 입력을 제한한다.', (userInput) => {
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      Array.from({ length: 4 }, (_, index) => {
        result.current.onChange(
          {
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>,
          index,
        );
      });
    });

    result.current.cardNumbers.forEach((cardNumber) => {
      expect(cardNumber.value).toBe('');
    });
  });

  it('카드번호가 4로 시작하는 16자리 숫자일 때 카드 브랜드를 visa 설정한다.', () => {
    const VISA = 'visa';
    const userInput = ['4000', '0000', '0000', '0000'];
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      userInput.forEach((input, index) => {
        result.current.onChange(
          {
            target: { value: input },
          } as ChangeEvent<HTMLInputElement>,
          index,
        );
      });
    });

    expect(result.current.cardBrand).toBe(VISA);
  });

  it.each([
    [['5100', '0000', '0000', '0000']],
    [['5200', '0000', '0000', '0000']],
    [['5300', '0000', '0000', '0000']],
    [['5400', '0000', '0000', '0000']],
    [['5500', '0000', '0000', '0000']],
  ])('카드번호가 51~55로 시작하는 16자리 숫자일 때 카드 브랜드를 mastercard 설정한다.', (userInput) => {
    const MASTER_CARD = 'mastercard';
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      userInput.forEach((input, index) => {
        result.current.onChange(
          {
            target: { value: input },
          } as ChangeEvent<HTMLInputElement>,
          index,
        );
      });
    });

    expect(result.current.cardBrand).toBe(MASTER_CARD);
  });

  it.each([
    [['0000', '0000', '0000', '0000'], true],
    [['0000', '0000', '0000', ''], false],
  ])('입력 값이 유효하다면 true를 반환하고, 유효하지 않다면 false를 반환한다.', (userInput: string[], isValid: boolean) => {
    const { result } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      userInput.forEach((input, index) => {
        result.current.onChange(
          {
            target: { value: input },
          } as ChangeEvent<HTMLInputElement>,
          index,
        );
      });
    });

    expect(result.current.isValid).toBe(isValid);
  });
});
