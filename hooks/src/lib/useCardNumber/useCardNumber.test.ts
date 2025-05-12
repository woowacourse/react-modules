import { renderHook, act } from '@testing-library/react';
import { useCardNumber } from './useCardNumber';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';

describe('useCardNumber 훅 테스트', () => {
  const emptyCardNumber = '';
  const validCardNumber = '1234567890123456';
  const emptyErrorMsg = '';

  it('초기값이 올바르게 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber(validCardNumber, emptyErrorMsg));

    expect(result.current.cardNumber).toBe(validCardNumber);
    expect(result.current.formattedCardNumber).toEqual(['1234', '5678', '9012', '3456']);
    expect(result.current.cardNumberError).toEqual(['', '', '', '']);
  });

  it('숫자가 입력되면 formattedCardNumber가 업데이트되고 에러 메시지가 지워져야 한다', () => {
    const { result } = renderHook(() => useCardNumber(emptyCardNumber, emptyErrorMsg));

    act(() => {
      result.current.handleCardNumberChange({ idx: 0, value: '1234' });
    });

    expect(result.current.formattedCardNumber[0]).toBe('1234');
    expect(result.current.cardNumberError[0]).toBe('');
    expect(result.current.cardNumber).toBe('1234');
  });

  it('모든 필드가 유효한 길이이면 isCardNumberValid가 true를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardNumber(validCardNumber, emptyErrorMsg));
    expect(result.current.isCardNumberValid()).toBe(true);
  });

  it('숫자가 아닌 값이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber(emptyCardNumber, emptyErrorMsg));

    act(() => {
      result.current.handleCardNumberChange({ idx: 0, value: 'abcd' });
    });

    expect(result.current.cardNumberError[0]).toBe(CARD_NUMBER_ERROR.onlyNumbers);
    expect(result.current.formattedCardNumber[0]).toBe('');
  });

  it('빈 값이 입력되면 해당 필드가 빈 문자열로 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber(validCardNumber, emptyErrorMsg));

    act(() => {
      result.current.handleCardNumberChange({ idx: 0, value: '' });
    });

    expect(result.current.formattedCardNumber[0]).toBe('');
    expect(result.current.cardNumberError[0]).toBe('');
  });

  it('한 필드가 유효하지 않으면 isCardNumberValid가 false를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardNumber('123567890123456', emptyErrorMsg));

    expect(result.current.isCardNumberValid()).toBe(false);
  });

  it('여러 필드가 유효하지 않으면 isCardNumberValid가 false를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardNumber('12356', emptyErrorMsg));

    expect(result.current.isCardNumberValid()).toBe(false);
  });

  it('카드 브랜드가 올바르게 감지되어야 한다', () => {
    const { result: visaResult } = renderHook(() => useCardNumber('4111111111111111', emptyErrorMsg));
    expect(visaResult.current.cardBrand).toBe('VISA');

    const { result: mastercardResult } = renderHook(() => useCardNumber('5555555555554444', emptyErrorMsg));
    expect(mastercardResult.current.cardBrand).toBe('MASTERCARD');

    const { result: amexResult } = renderHook(() => useCardNumber('371449635398431', emptyErrorMsg));
    expect(amexResult.current.cardBrand).toBe('AMEX');

    const { result: unknownResult } = renderHook(() => useCardNumber('1234567890123456', emptyErrorMsg));
    expect(unknownResult.current.cardBrand).toBe('UNKNOWN');
  });

  it('필드 수와 길이가 카드 브랜드에 따라 올바르게 설정되어야 한다', () => {
    // VISA 카드
    const { result: visaResult } = renderHook(() => useCardNumber('4111111111111111', emptyErrorMsg));
    expect(visaResult.current.requiredFields).toBe(4);
    expect(visaResult.current.fieldLengthArr).toEqual([4, 4, 4, 4]);

    // AMEX 카드 
    const { result: amexResult } = renderHook(() => useCardNumber('371449635398431', emptyErrorMsg));
    expect(amexResult.current.requiredFields).toBe(3);
    expect(amexResult.current.fieldLengthArr).toEqual([4, 6, 5]);
  });

  it('카드 브랜드가 변경되면 필드 구성이 변경되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber('', emptyErrorMsg));

    expect(result.current.cardBrand).toBe('UNKNOWN');
    expect(result.current.requiredFields).toBe(4);
    expect(result.current.fieldLengthArr).toEqual([4, 4, 4, 4]);

    act(() => {
      result.current.handleCardNumberChange({ idx: 0, value: '4111' });
    });

    // VISA 브랜드로 변경
    expect(result.current.cardBrand).toBe('VISA');
    expect(result.current.requiredFields).toBe(4);
    expect(result.current.fieldLengthArr).toEqual([4, 4, 4, 4]);

    act(() => {
      result.current.handleCardNumberChange({ idx: 0, value: '3714' });
    });

    // AMEX 브랜드로 변경
    expect(result.current.cardBrand).toBe('AMEX');
    expect(result.current.requiredFields).toBe(3);
    expect(result.current.fieldLengthArr).toEqual([4, 6, 5]);
  });
});
