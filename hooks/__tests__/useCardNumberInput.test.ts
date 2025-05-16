import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useCardNumberInput } from '../src/lib/useCardNumberInput';

describe('useCardNumberInput custom hook 테스트', () => {
  let hookResult: RenderHookResult<ReturnType<typeof useCardNumberInput>, void>;

  beforeEach(() => {
    hookResult = renderHook<ReturnType<typeof useCardNumberInput>, void>(() => useCardNumberInput());
  });

  it('4로 시작하는 16자리 숫자가 입력되었을 때, Visa 카드 타입이 반환된다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('4111111111111111');
    });
    const { cardNumber, formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(cardNumber).toBe('4111111111111111');
    expect(formattedCardNumber).toBe('4111 1111 1111 1111');
    expect(brand).toBe('Visa');
    expect(cardNumberError).toBe('');
  });

  it('51로 시작하는 16자리 숫자가 입력되었을 때, Mastercard 카드 타입이 반환된다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('5105105105105100');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('Mastercard');
    expect(formattedCardNumber).toBe('5105 1051 0510 5100');
    expect(cardNumberError).toBe('');
  });

  it('37로 시작하는 15자리 숫자가 입력되었을 때, AMEX 카드 타입이 반환된다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('378282246310005');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('AMEX');
    expect(formattedCardNumber).toBe('3782 822463 10005');
    expect(cardNumberError).toBe('');
  });

  it('36으로 시작하는 14자리 숫자가 입력되었을 때, Diners 카드 타입이 반환된다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('36123456789012');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('Diners');
    expect(formattedCardNumber).toBe('3612 345678 9012');
    expect(cardNumberError).toBe('');
  });

  it('622126으로 시작하는 16자리 숫자가 입력되었을 때, UnionPay 카드 타입이 반환된다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('6221261234567890');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('UnionPay');
    expect(formattedCardNumber).toBe('6221 2612 3456 7890');
    expect(cardNumberError).toBe('');
  });

  it('9로 시작하는 숫자가 입력되었을 때, Unknown이 반환된다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('9000123412341234');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('Unknown');
    expect(formattedCardNumber).toBe('9000 1234 1234 1234');
    expect(cardNumberError).toBe('');
  });

  it('문자가 포함된 입력 시 숫자 검증 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('4111a11111111111');
    });
    expect(hookResult.result.current.cardNumberError).toBe('숫자만 입력 가능합니다.');
  });

  it('15자리 카드 타입에 16자리 숫자가 입력되었을 때, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('3782822463100057');
    });
    expect(hookResult.result.current.cardNumberError).toBe('AMEX 카드 번호는 15자리여야 합니다.');
  });
});
