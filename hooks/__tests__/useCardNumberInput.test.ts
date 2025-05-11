import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useCardNumberInput } from '../src/lib/useCardNumberInput';

describe('useCardNumberInput custom hook 테스트', () => {
  let hookResult: RenderHookResult<ReturnType<typeof useCardNumberInput>, void>;

  beforeEach(() => {
    hookResult = renderHook<ReturnType<typeof useCardNumberInput>, void>(() => useCardNumberInput());
  });

  it('Visa 카드(4111…1111)를 인식하고 포맷팅/유효성 검사를 통과한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('4111111111111111');
    });
    const { cardNumber, formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(cardNumber).toBe('4111111111111111');
    expect(formattedCardNumber).toBe('4111 1111 1111 1111');
    expect(brand).toBe('Visa');
    expect(cardNumberError).toBe('');
  });

  it('Mastercard 카드(5105…100)를 인식하고 포맷팅/유효성 검사를 통과한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('5105105105105100');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('Mastercard');
    expect(formattedCardNumber).toBe('5105 1051 0510 5100');
    expect(cardNumberError).toBe('');
  });

  it('AMEX 카드(3782…0005)를 인식하고 4-6-5 포맷팅/유효성 검사를 통과한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('378282246310005');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('AMEX');
    expect(formattedCardNumber).toBe('3782 822463 10005');
    expect(cardNumberError).toBe('');
  });

  it('Diners 카드(3612…9012)를 인식하고 4-6-4 포맷팅/유효성 검사를 통과한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('36123456789012');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('Diners');
    expect(formattedCardNumber).toBe('3612 345678 9012');
    expect(cardNumberError).toBe('');
  });

  it('UnionPay 카드(622126…7890)를 인식하고 기본 4-4-4-4 포맷팅/유효성 검사를 통과한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('6221261234567890');
    });
    const { formattedCardNumber, brand, cardNumberError } = hookResult.result.current;

    expect(brand).toBe('UnionPay');
    expect(formattedCardNumber).toBe('6221 2612 3456 7890');
    expect(cardNumberError).toBe('');
  });

  it('알 수 없는 카드(prefix 9) 입력 시 Unknown 브랜드 및 기본 포맷팅한다.', () => {
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

  it('길이를 초과한 입력 시 브랜드별 길이 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardNumberChange('3782822463100057');
    });
    expect(hookResult.result.current.cardNumberError).toBe('AMEX 카드 번호는 15자리여야 합니다.');
  });
});
