import React from 'react';
import { renderHook } from '@testing-library/react';
import useCardBrand from '../lib/useCard/useCardBrand';

describe('useCardBrand', () => {
  describe('DINERS 카드', () => {
    it('카드번호가 36으로 시작하는 14자리 숫자면 cardBrand값을 DINERS로 반환한다.', () => {
      const userInput = '36123412341234';
      const expected = 'DINERS';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('DINERS 카드일 경우 validMaxLength를 14로 반환한다.', () => {
      const userInput = '36123412341234';
      const expected = 14;
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.validMaxLength).toBe(expected);
    });
  });

  describe('AMEX 카드', () => {
    it('카드번호가 34으로 시작하는 15자리 숫자면 cardBrand값을 AMEX로 반환한다.', () => {
      const userInput = '34123412341234';
      const expected = 'AMEX';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('카드번호가 37으로 시작하는 15자리 숫자면 cardBrand값을 AMEX로 반환한다.', () => {
      const userInput = '34123412341234';
      const expected = 'AMEX';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('AMEX 카드일 경우 validMaxLength를 15로 반환한다.', () => {
      const userInput = '34123412341234';
      const expected = 15;
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.validMaxLength).toBe(expected);
    });
  });

  describe('VISA 카드', () => {
    it('카드번호가 4로 시작하는 16자리 숫자면 cardBrand값을 비자카드로 반환한다.', () => {
      const userInput = '4321123412341234';
      const expected = 'VISA';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('VISA 카드일 경우 validMaxLength를 16로 반환한다.', () => {
      const userInput = '4321123412341234';
      const expected = 16;
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.validMaxLength).toBe(expected);
    });
  });

  describe('MASTER 카드', () => {
    it('카드번호가 51에서 55 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 마스터카드로 반환한다.', () => {
      const userInput = '5521123412341234';
      const expected = 'MASTER';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('MASTER 카드일 경우 validMaxLength를 16로 반환한다.', () => {
      const userInput = '5521123412341234';
      const expected = 16;
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.validMaxLength).toBe(expected);
    });
  });

  describe('UNION_PAY', () => {
    it('카드번호가 624에서 626 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(624)', () => {
      const userInput = '6244123412341234';
      const expected = 'UNION_PAY';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('카드번호가 624에서 626 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(626)', () => {
      const userInput = '6264123412341234';
      const expected = 'UNION_PAY';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('카드번호가 6282에서 6288 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(6282)', () => {
      const userInput = '6282123412341234';
      const expected = 'UNION_PAY';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('카드번호가 6282에서 6288 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(6288)', () => {
      const userInput = '6288123412341234';
      const expected = 'UNION_PAY';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('카드번호가 622126에서 622925 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(622126)', () => {
      const userInput = '6221263412341234';
      const expected = 'UNION_PAY';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('카드번호가 622126에서 622925 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(622925)', () => {
      const userInput = '6229253412341234';
      const expected = 'UNION_PAY';
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.cardBrand).toBe(expected);
    });

    it('UNION_PAY일 경우 validMaxLength를 16로 반환한다.', () => {
      const userInput = '6244123412341234';
      const expected = 16;
      const { result } = renderHook(() => useCardBrand());

      React.act(() => {
        result.current.determineCardBrand(userInput);
      });

      expect(result.current.validMaxLength).toBe(expected);
    });
  });
});
