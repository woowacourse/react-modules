import { renderHook } from '@testing-library/react';
import { useCardBrandValidation } from './useCardBrandValidation';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';

describe('useCardBrandValidation', () => {
  it('빈 카드 번호에 대해 적절한 에러를 반환해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation(''));

    expect(result.current.cardBrand).toBeNull();
    expect(result.current.isValid).toBe(false);
    expect(result.current.error).toBe(CARD_NUMBER_ERROR.required);
  });

  it('숫자가 아닌 입력에 대해 에러를 반환해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('123a456'));

    expect(result.current.cardBrand).toBeNull();
    expect(result.current.isValid).toBe(false);
    expect(result.current.error).toBe(CARD_NUMBER_ERROR.onlyNumbers);
  });

  it('알 수 없는 카드 브랜드에 대해 에러를 반환해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('1234567890123456'));

    expect(result.current.cardBrand).toBeNull();
    expect(result.current.isValid).toBe(false);
    expect(result.current.error).toBe(CARD_NUMBER_ERROR.invalidBrand);
  });

  it('Visa 카드 번호를 올바르게 식별해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('4111111111111111'));

    expect(result.current.cardBrand).toBe('visa');
    expect(result.current.isValid).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('Mastercard 카드 번호를 올바르게 식별해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('5555555555554444'));

    expect(result.current.cardBrand).toBe('mastercard');
    expect(result.current.isValid).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('AMEX 카드 번호를 올바르게 식별해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('371449635398431'));

    expect(result.current.cardBrand).toBe('amex');
    expect(result.current.isValid).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('Diners 카드 번호를 올바르게 식별해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('36700102000000'));

    expect(result.current.cardBrand).toBe('diners');
    expect(result.current.isValid).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('UnionPay 카드 번호를 올바르게 식별해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('6250941006528599'));

    expect(result.current.cardBrand).toBe('unionpay');
    expect(result.current.isValid).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('공백이 포함된 카드 번호도 올바르게 처리해야 함', () => {
    const { result } = renderHook(() => useCardBrandValidation('4111 1111 1111 1111'));

    expect(result.current.cardBrand).toBe('visa');
    expect(result.current.isValid).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('동일한 카드 번호로 여러 번 호출해도 동일한 결과를 반환해야 함', () => {
    const { result, rerender } = renderHook(
      (props) => useCardBrandValidation(props),
      { initialProps: '4111111111111111' }
    );

    const initialResult = result.current;

    rerender('4111111111111111');
    expect(result.current).toBe(initialResult);
  });

  it('카드 번호가 변경되면 결과가 업데이트되어야 함', () => {
    const { result, rerender } = renderHook(
      (props) => useCardBrandValidation(props),
      { initialProps: '4111111111111111' }
    );

    expect(result.current.cardBrand).toBe('visa');

    rerender('5555555555554444');
    expect(result.current.cardBrand).toBe('mastercard');
  });

});
