import { renderHook } from '@testing-library/react';
import useCardType from '../lib/useCardType';

describe('useCardType', () => {
  describe('카드 브랜드 반환 테스트', () => {
    it("아직 아무 입력도 수행되지 않았을 때 'None'을 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('')).toBe('None');
    });

    it("4로 시작하는 번호를 입력하면 'Visa'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('4000')).toBe('Visa');
    });

    it("51~55 사이의 숫자로 시작하는 번호를 입력하면 'Mastercard'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('5252')).toBe('Mastercard');
      expect(result.current.handleCardTypeChange('5555')).toBe('Mastercard');
    });

    it("36으로 시작하는 번호를 입력하면 'Diners'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('3693')).toBe('Diners');
    });

    it("34 또는 37로 시작하는 번호를 입력하면 'AMEX'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('3456')).toBe('AMEX');
      expect(result.current.handleCardTypeChange('3789')).toBe('AMEX');
    });

    it("622126~622925 사이의 숫자로 시작하는 번호를 입력하면 'Unionpay'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('622126')).toBe('Unionpay');
      expect(result.current.handleCardTypeChange('622925')).toBe('Unionpay');
    });

    it("624~626 사이의 숫자로 시작하는 번호를 입력하면 'Unionpay'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('62512')).toBe('Unionpay');
    });

    it("6282~6288 사이의 숫자로 시작하는 번호를 입력하면 'Unionpay'를 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('628700')).toBe('Unionpay');
    });

    it("어떤 카드 브랜드에도 해당되지 않는 번호를 입력하면 'None'을 반환한다.", () => {
      const { result } = renderHook(() => useCardType());

      expect(result.current.handleCardTypeChange('987654')).toBe('None');
    });
  });
});
