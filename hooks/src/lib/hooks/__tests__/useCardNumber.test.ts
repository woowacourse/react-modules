import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../useCardNumber';
import { CARD_TYPES } from '../../constants/cardTypes';

describe('useCardNumber', () => {
  it('초기 상태가 올바르게 설정되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.value).toBe('');
    expect(result.current.formattedValue).toBe('');
    expect(result.current.error).toBe(false);
    expect(result.current.cardType).toBe(null);
  });

  it('Visa 카드 번호를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('4111111111111111');
    });

    expect(result.current.value).toBe('4111111111111111');
    expect(result.current.formattedValue).toBe('4111 1111 1111 1111');
    expect(result.current.cardType).toBe(CARD_TYPES.VISA);
    expect(result.current.isValid()).toBe(true);
  });

  it('Mastercard 카드 번호를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('5111111111111111');
    });

    expect(result.current.value).toBe('5111111111111111');
    expect(result.current.formattedValue).toBe('5111 1111 1111 1111');
    expect(result.current.cardType).toBe(CARD_TYPES.MASTERCARD);
    expect(result.current.isValid()).toBe(true);
  });

  it('AMEX 카드 번호를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('341111111111111');
    });

    expect(result.current.value).toBe('341111111111111');
    expect(result.current.formattedValue).toBe('3411 111111 11111');
    expect(result.current.cardType).toBe(CARD_TYPES.AMEX);
    expect(result.current.isValid()).toBe(true);
  });

  it('Diners 카드 번호를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('36111111111111');
    });

    expect(result.current.value).toBe('36111111111111');
    expect(result.current.formattedValue).toBe('3611 111111 1111');
    expect(result.current.cardType).toBe(CARD_TYPES.DINERS);
    expect(result.current.isValid()).toBe(true);
  });

  it('UnionPay 카드 번호를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('6221261111111111');
    });

    expect(result.current.value).toBe('6221261111111111');
    expect(result.current.formattedValue).toBe('6221 2611 1111 1111');
    expect(result.current.cardType).toBe(CARD_TYPES.UNIONPAY);
    expect(result.current.isValid()).toBe(true);
  });

  it('숫자가 아닌 문자는 제거되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('4111-1111-1111-1111');
    });

    expect(result.current.value).toBe('4111111111111111');
    expect(result.current.formattedValue).toBe('4111 1111 1111 1111');
  });

  it('카드 타입에 따라 최대 길이가 제한되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('41111111111111111111111111111111');
    });

    expect(result.current.value).toBe('4111111111111111');
  });

  it('reset 함수가 올바르게 동작해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('4111111111111111');
    });

    expect(result.current.value).toBe('4111111111111111');

    act(() => {
      result.current.reset();
    });

    expect(result.current.value).toBe('');
    expect(result.current.formattedValue).toBe('');
    expect(result.current.error).toBe(false);
    expect(result.current.cardType).toBe(null);
  });

  it('유효하지 않은 카드 번호는 isValid가 false를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleChange('411111111111111');
    });

    expect(result.current.isValid()).toBe(false);
  });
});
