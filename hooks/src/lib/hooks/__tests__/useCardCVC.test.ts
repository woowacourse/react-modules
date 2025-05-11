import { renderHook, act } from '@testing-library/react';
import useCardCVC from '../useCardCVC';
import { CARD_TYPES } from '../../constants/cardTypes';

describe('useCardCVC', () => {
  it('초기 상태가 올바르게 설정되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC());

    expect(result.current.value).toBe('');
    expect(result.current.error).toBe(false);
    expect(result.current.cardCVC).toBe(null);
  });

  it('일반 카드의 CVC를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.VISA));

    act(() => {
      result.current.handleChange('123');
    });

    expect(result.current.value).toBe('123');
    expect(result.current.cardCVC).toBe(123);
    expect(result.current.isValid()).toBe(true);
  });

  it('AMEX 카드의 CVC를 올바르게 처리해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.AMEX));

    act(() => {
      result.current.handleChange('1234');
    });

    expect(result.current.value).toBe('1234');
    expect(result.current.cardCVC).toBe(1234);
    expect(result.current.isValid()).toBe(true);
  });

  it('숫자가 아닌 문자는 제거되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.VISA));

    act(() => {
      result.current.handleChange('12a');
    });

    expect(result.current.value).toBe('12');
  });

  it('카드 타입에 따라 최대 길이가 제한되어야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.VISA));

    act(() => {
      result.current.handleChange('1234');
    });

    expect(result.current.value).toBe('123');
  });

  it('AMEX 카드의 경우 4자리까지 입력 가능해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.AMEX));

    act(() => {
      result.current.handleChange('1234');
    });

    expect(result.current.value).toBe('1234');
  });

  it('reset 함수가 올바르게 동작해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.VISA));

    act(() => {
      result.current.handleChange('123');
    });

    expect(result.current.value).toBe('123');

    act(() => {
      result.current.reset();
    });

    expect(result.current.value).toBe('');
    expect(result.current.error).toBe(false);
    expect(result.current.cardCVC).toBe(null);
  });

  it('유효하지 않은 CVC는 isValid가 false를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.VISA));

    act(() => {
      result.current.handleChange('12'); // 2자리
    });

    expect(result.current.isValid()).toBe(false);
  });

  it('AMEX 카드의 경우 3자리 CVC는 유효하지 않아야 한다.', () => {
    const { result } = renderHook(() => useCardCVC(CARD_TYPES.AMEX));

    act(() => {
      result.current.handleChange('123');
    });

    expect(result.current.isValid()).toBe(false);
  });
});
