import { renderHook, act } from '@testing-library/react';

import useCardNumbers, { CardNumbersResult } from './useCardNumbers';

describe('useCardNumbersValidate', () => {
  let result: { current: CardNumbersResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardNumbers());
    result = rendered.result;
  });

  it('4로 시작하는 16자리 카드 번호가 들어오면 카드 타입이 Visa이다.', () => {
    act(() => {
      result.current.handleCardNumberChange({
        target: { value: '4123456789012345' }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers).toBe('4123456789012345');
    expect(result.current.formattedCardNumbers).toBe('4123-4567-8901-2345');
    expect(result.current.cardType).toBe('Visa');
    expect(result.current.cardNumberMaxLength).toBe(16);
    expect(result.current.errorMessage).toBeNull();
  });

  describe('master 카드는 51 ~ 55로 시작하는 16자리 카드 번호이다.', () => {
    it('51로 시작하는 16자리 카드 번호가 들어오면 카드 타입이 Master이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '5123456789012345' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('5123456789012345');
      expect(result.current.formattedCardNumbers).toBe('5123-4567-8901-2345');
      expect(result.current.cardType).toBe('Master');
      expect(result.current.cardNumberMaxLength).toBe(16);
      expect(result.current.errorMessage).toBeNull();
    });

    it('55로 시작하는 16자리 카드 번호가 들어오면 카드 타입이 Master이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '5523456789012345' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('5523456789012345');
      expect(result.current.formattedCardNumbers).toBe('5523-4567-8901-2345');
      expect(result.current.cardType).toBe('Master');
      expect(result.current.cardNumberMaxLength).toBe(16);
      expect(result.current.errorMessage).toBeNull();
    });
  });

  describe('amex 카드는 34 또는 37로 시작하는 15자리 카드 번호이다.', () => {
    it('34로 시작하는 15자리 카드 번호가 들어오면 카드 타입이 Amex이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '342345678901234' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('342345678901234');
      expect(result.current.formattedCardNumbers).toBe('3423-456789-01234');
      expect(result.current.cardType).toBe('Amex');
      expect(result.current.cardNumberMaxLength).toBe(15);
      expect(result.current.errorMessage).toBeNull();
    });

    it('37로 시작하는 15자리 카드 번호가 들어오면 카드 타입이 Amex이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '372345678901234' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('372345678901234');
      expect(result.current.formattedCardNumbers).toBe('3723-456789-01234');
      expect(result.current.cardType).toBe('Amex');
      expect(result.current.cardNumberMaxLength).toBe(15);
      expect(result.current.errorMessage).toBeNull();
    });
  });
  describe('diners 카드는 36 ~ 38로 시작하는 14자리 카드 번호이다.', () => {
    it('36로 시작하는 14자리 카드 번호가 들어오면 카드 타입이 Diners이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '36234567890123' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('36234567890123');
      expect(result.current.formattedCardNumbers).toBe('3623-456789-0123');
      expect(result.current.cardType).toBe('Diners');
      expect(result.current.cardNumberMaxLength).toBe(14);
      expect(result.current.errorMessage).toBeNull();
    });
  });

  describe('unionpay 카드는 62로 시작하는 16자리 카드 번호이다.', () => {
    it('622126 ~ 622925로 시작하고 16자리 카드 번호이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '6221262345678901' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('6221262345678901');
      expect(result.current.formattedCardNumbers).toBe('6221-2623-4567-8901');
      expect(result.current.cardType).toBe('UnionPay');
      expect(result.current.cardNumberMaxLength).toBe(16);
      expect(result.current.errorMessage).toBeNull();
    });

    it('6282 ~ 6288로 시작하고 16자리 카드 번호이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '6282234567890123' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('6282234567890123');
      expect(result.current.formattedCardNumbers).toBe('6282-2345-6789-0123');
      expect(result.current.cardType).toBe('UnionPay');
      expect(result.current.cardNumberMaxLength).toBe(16);
      expect(result.current.errorMessage).toBeNull();
    });

    it('6282 ~ 6288로 시작하고 16자리 카드 번호이다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '6282234567890123' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers).toBe('6282234567890123');
      expect(result.current.formattedCardNumbers).toBe('6282-2345-6789-0123');
      expect(result.current.cardType).toBe('UnionPay');
      expect(result.current.cardNumberMaxLength).toBe(16);
      expect(result.current.errorMessage).toBeNull();
    });
  });

  describe('숫자가 아닌 문자가 들어오면 에러 메시지가 나온다.', () => {
    it('숫자가 아닌 문자가 들어오면 에러 메시지가 나온다.', () => {
      act(() => {
        result.current.handleCardNumberChange({
          target: { value: '12345a' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.errorMessage).toBe('숫자만 입력해주세요.');
    });
  });
});
