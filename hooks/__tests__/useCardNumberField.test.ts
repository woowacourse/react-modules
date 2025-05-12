import { renderHook, act } from '@testing-library/react';
import { useCardNumberField } from '../src/lib/hooks/useCardNumberField';

describe('useCardNumberField custom hook 테스트', () => {
  it.each([
    ['1234567890123456', '브랜드가 없는 카드 번호'],
    ['4111111111111111', 'visa 카드 번호'],
    ['5111111111111111', 'master 카드 번호'],
    ['36111111111111', 'diners 카드 번호'],
    ['341111111111111', 'amex 카드 번호'],
    ['6221261111111111', 'unionpay 카드 번호'],
  ])('%s일 때 유효한 입력: %s)', (input, _) => {
    const { result } = renderHook(() => useCardNumberField());

    act(() => {
      result.current.handleCardNumberChange(input);
    });

    expect(result.current.cardNumbers).toBe(input);
    expect(result.current.cardNumberErrors).toBe('');
  });

  describe('VISA 카드 입력 유효성 검사', () => {
    it.each([
      ['411111111111111', 'VISA 카드는 16자리여야 합니다.', '자리수가 부족한 입력'],
      ['41111111111111111', 'VISA 카드는 16자리여야 합니다.', '자리수가 많은 입력'],
    ])('카드 번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardNumberField());

      act(() => {
        result.current.handleCardNumberChange(input);
      });

      expect(result.current.cardNumberErrors).toBe(error);
    });
  });

  describe('MASTER 카드 입력 유효성 검사', () => {
    it.each([
      ['511111111111111', 'MASTER 카드는 16자리여야 합니다.', '자리수가 부족한 입력'],
      ['51111111111111111', 'MASTER 카드는 16자리여야 합니다.', '자리수가 많은 입력'],
    ])('카드 번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardNumberField());

      act(() => {
        result.current.handleCardNumberChange(input);
      });

      expect(result.current.cardNumberErrors).toBe(error);
    });
  });

  describe('DINERS 카드 입력 유효성 검사', () => {
    it.each([
      ['3611111111111', 'DINERS 카드는 14자리여야 합니다.', '자리수가 부족한 입력'],
      ['361111111111111', 'DINERS 카드는 14자리여야 합니다.', '자리수가 많은 입력'],
    ])('카드 번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardNumberField());

      act(() => {
        result.current.handleCardNumberChange(input);
      });

      expect(result.current.cardNumberErrors).toBe(error);
    });
  });

  describe('AMEX 카드 입력 유효성 검사', () => {
    it.each([
      ['34111111111111', 'AMEX 카드는 15자리여야 합니다.', '자리수가 부족한 입력'],
      ['3411111111111111', 'AMEX 카드는 15자리여야 합니다.', '자리수가 많은 입력'],
    ])('카드 번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardNumberField());

      act(() => {
        result.current.handleCardNumberChange(input);
      });

      expect(result.current.cardNumberErrors).toBe(error);
    });
  });

  describe('UNIONPAY 카드 입력 유효성 검사', () => {
    it.each([
      ['622126111111111', 'UNIONPAY 카드는 16자리여야 합니다.', '자리수가 부족한 입력'],
      ['62212611111111111', 'UNIONPAY 카드는 16자리여야 합니다.', '자리수가 많은 입력'],
    ])('카드 번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardNumberField());

      act(() => {
        result.current.handleCardNumberChange(input);
      });

      expect(result.current.cardNumberErrors).toBe(error);
    });
  });
});
