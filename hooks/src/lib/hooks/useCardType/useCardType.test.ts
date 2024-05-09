import React from 'react';
import { renderHook } from '@testing-library/react';

import useCardType from './useCardType';

describe('useCardType 커스텀 훅 테스트', () => {
  describe('VISA 카드 테스트', () => {
    it('카드 앞 번호가 4로 시작하면 VISA 카드이다.', () => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType('4'));

      expect(result.current.cardType).toBe('VISA');
    });
  });

  describe('MASTERCARD 카드 테스트', () => {
    it.each([51, 52, 53, 54, 55])('카드 앞 번호가 %i로 시작하면 MASTERCARD 카드이다.', (prefix) => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType(prefix.toString()));

      expect(result.current.cardType).toBe('MASTERCARD');
    });

    it.each([50, 56])('카드 앞 번호가 %i로 시작하면 MASTERCARD 카드가 아니다.', (prefix) => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType(prefix.toString()));

      expect(result.current.cardType).not.toBe('MASTERCARD');
    });
  });

  describe('Diners 카드 테스트', () => {
    it('카드 앞 번호가 36로 시작하면 Diners 카드이다.', () => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType('36'));

      expect(result.current.cardType).toBe('DINERS');
    });

    it.each([35, 37])('카드 앞 번호가 %i로 시작하면 Diners 카드가 아니다.', (prefix) => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType(prefix.toString()));

      expect(result.current.cardType).not.toBe('DINERS');
    });
  });

  describe('AMEX 카드 테스트', () => {
    it.each([34, 37])('카드 앞 번호가 %i로 시작하면 AMEX 카드이다.', (prefix) => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType(prefix.toString()));

      expect(result.current.cardType).toBe('AMEX');
    });

    it.each([33, 35, 36, 38])('카드 앞 번호가 %i로 시작하면 AMEX 카드가 아니다.', (prefix) => {
      const { result } = renderHook(() => useCardType());

      React.act(() => result.current.handleCardType(prefix.toString()));

      expect(result.current.cardType).not.toBe('AMEX');
    });
  });

  describe('유니온페이 카드 테스트', () => {
    it.each([622126, 622925, 624, 625, 626, 6282, 6288])(
      '카드 앞 번호가 %i로 시작하면 유니온페이 카드이다.',
      (prefix) => {
        const { result } = renderHook(() => useCardType());

        React.act(() => result.current.handleCardType(prefix.toString()));

        expect(result.current.cardType).toBe('UNIONPAY');
      },
    );

    it.each([622125, 622926, 623, 627, 6281, 6289])(
      '카드 앞 번호가 %i로 시작하면 유니온페이 카드가 아니다.',
      (prefix) => {
        const { result } = renderHook(() => useCardType());

        React.act(() => result.current.handleCardType(prefix.toString()));

        expect(result.current.cardType).not.toBe('UNIONPAY');
      },
    );
  });
});
