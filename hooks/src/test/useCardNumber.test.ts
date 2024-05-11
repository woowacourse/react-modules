import React from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumber from '../lib/useCardNumber';

describe('useCardNumber', () => {
  describe('유효성 검사 테스트', () => {
    it('아직 아무 입력도 수행되지 않았을 때 true를 반환하고 에러 메시지는 반환하지 않는다.', () => {
      const { result } = renderHook(() => useCardNumber());

      expect(result.current.cardNumberInfo.isValid).toBe(true);
      expect(result.current.cardNumberInfo.errorMessages).toHaveLength(0);
    });

    it("아무 브랜드가 아닌 카드 번호를 입력했을 때 false와 '16자리 숫자를 입력해주세요.' 를 반환한다.", () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange('123');
      });

      expect(result.current.cardNumberInfo.isValid).toBe(false);
      expect(result.current.cardNumberInfo.errorMessages).toContain('16자리 숫자를 입력해주세요.');
    });
  });

  describe('useCardNumber 포맷팅 테스트', () => {
    it('Visa 16자리를 입력한 경우 4-4-4-4로 포맷팅한 결과 배열을 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange('4123123412341234');
      });

      expect(result.current.cardNumberInfo.cardNumber).toEqual(['4123', '1234', '1234', '1234']);
    });

    it('Mastercard 16자리를 입력한 경우 4-4-4-4로 포맷팅한 결과 배열을 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange('5234123412341234');
      });

      expect(result.current.cardNumberInfo.cardNumber).toEqual(['5234', '1234', '1234', '1234']);
    });

    it('Diners 14자리를 입력한 경우 4-6-4로 포맷팅한 결과 배열을 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange('36912345678901');
      });

      expect(result.current.cardNumberInfo.cardNumber).toEqual(['3691', '234567', '8901']);
    });

    it('AMEX 15자리를 입력한 경우 4-6-5로 포맷팅한 결과 배열을 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange('345612341234123');
      });

      expect(result.current.cardNumberInfo.cardNumber).toEqual(['3456', '123412', '34123']);
    });
  });
});
