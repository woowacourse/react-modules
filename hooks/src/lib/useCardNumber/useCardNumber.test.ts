import { renderHook, act } from '@testing-library/react';
import { useCardNumber } from './useCardNumber';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';
import { CardNumber, CardNumberError } from '../types/cardTypes';

describe('useCardNumber 훅 테스트', () => {
  const emptyCardNumber: CardNumber = {
    first: '',
    second: '',
    third: '',
    forth: '',
  };

  const validCardNumber: CardNumber = {
    first: '1234',
    second: '5678',
    third: '9012',
    forth: '3456',
  };

  const emptyCardNumberError: CardNumberError = {
    first: '',
    second: '',
    third: '',
    forth: '',
  };

  it('초기값이 올바르게 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber(validCardNumber, emptyCardNumberError));

    expect(result.current.cardNumber).toEqual(validCardNumber);
    expect(result.current.cardNumberError).toEqual(emptyCardNumberError);
  });

  it('숫자가 입력되면 cardNumber가 업데이트되고 에러 메시지가 지워져야 한다', () => {
    const { result } = renderHook(() => useCardNumber(emptyCardNumber, emptyCardNumberError));

    act(() => {
      result.current.handleCardNumberChange({
        target: { name: 'first', value: '1234' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumber.first).toBe('1234');
    expect(result.current.cardNumberError.first).toBe('');
  });

  it('모든 필드가 유효한 길이이면 isCardNumberValid가 true를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardNumber(validCardNumber, emptyCardNumberError));

    expect(result.current.isCardNumberValid()).toBe(true);
  });

  it('숫자가 아닌 값이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber(emptyCardNumber, emptyCardNumberError));

    act(() => {
      result.current.handleCardNumberChange({
        target: { name: 'first', value: 'abcd' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumberError.first).toBe(CARD_NUMBER_ERROR.onlyNumbers);
    expect(result.current.cardNumber.first).toBe('');
  });

  it('빈 값이 입력되면 해당 필드가 빈 문자열로 설정되어야 한다', () => {
    const initialCardNumber = { ...validCardNumber };
    const { result } = renderHook(() => useCardNumber(initialCardNumber, emptyCardNumberError));

    act(() => {
      result.current.handleCardNumberChange({
        target: { name: 'first', value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumber.first).toBe('');
    expect(result.current.cardNumberError.first).toBe('');
  });

  it('한 필드가 유효하지 않으면 isCardNumberValid가 false를 반환해야 한다', () => {
    const invalidCardNumber: CardNumber = {
      ...validCardNumber,
      first: '123',
    };

    const { result } = renderHook(() => useCardNumber(invalidCardNumber, emptyCardNumberError));

    expect(result.current.isCardNumberValid()).toBe(false);
  });

  it('여러 필드가 유효하지 않으면 isCardNumberValid가 false를 반환해야 한다', () => {
    const invalidCardNumber: CardNumber = {
      first: '123', 
      second: '56',
      third: '9012',
      forth: '3456',
    };

    const { result } = renderHook(() => useCardNumber(invalidCardNumber, emptyCardNumberError));

    expect(result.current.isCardNumberValid()).toBe(false);
  });
});
