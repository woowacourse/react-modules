import { renderHook, act } from '@testing-library/react';
import useCardNumbers from '../lib/useCardNumbers';

describe('useCardNumbers 커스텀 훅 테스트', () => {
  describe('카드 브랜드 식별 테스트', () => {
    it('4로 시작하는 카드 번호인 경우 카드 브랜드가 Visa이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111111111111111');
      });

      expect(result.current.cardNumbersInfo.cardBrand).toBe('Visa');
    });

    it('51로 시작하는 카드 번호인 경우 카드 브랜드가 Master이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('5111111111111111');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('Master');
    });
    it('55로 시작하는 카드 번호인 경우 카드 브랜드가 Master이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('5511111111111111');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('Master');
    });

    it('36으로 시작하는 카드 번호인 경우 카드 브랜드가 Diners이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('36111111111111');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('Diners');
    });

    it('34로 시작하는 카드 번호인 경우 카드 브랜드가 Amex이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('342222212341234');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('AMEX');
    });

    it('37로 시작하는 카드 번호인 경우 카드 브랜드가 Amex이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('372222212341234');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('AMEX');
    });

    it('622126로 시작하는 카드 번호인 경우 카드 브랜드가 UnionPay이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6221261212341234');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('UnionPay');
    });
    it('622925로 시작하는 카드 번호인 경우 카드 브랜드가 UnionPay이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6229251212341234');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('UnionPay');
    });
    it('624로 시작하는 카드 번호인 경우 카드 브랜드가 UnionPay이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6249251212341234');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('UnionPay');
    });
    it('626로 시작하는 카드 번호인 경우 카드 브랜드가 UnionPay이다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6269251212341234');
      });
      expect(result.current.cardNumbersInfo.cardBrand).toBe('UnionPay');
    });
  });

  describe('에러 메시지 테스트', () => {
    it(`카드 브랜드가 없는 경우, 숫자가 아닌 문자 입력 시 '숫자만 입력 가능합니다.' 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('abc');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        '숫자만 입력 가능합니다.',
      );
    });

    it(`카드 브랜드가 없는 경우, 16자리 미만 숫자 입력 시 '일반 카드는 16자리 숫자여야 합니다.'라는 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('1111');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        '일반 카드는 16자리 숫자여야 합니다.',
      );
    });

    it(`카드 브랜드가 Diners인 경우, 14자리 미만의 숫자를 입력했을 때 'Diners 카드는 14자리 숫자여야 합니다.'라는 에러메세지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('3611');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        'Diners 카드는 14자리 숫자여야 합니다.',
      );
    });

    it(`카드 브랜드가 AMEX인 경우, 15자리 미만의 숫자를 입력했을 때 'AMEX 카드는 15자리 숫자여야 합니다.'라는 에러메세지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('3411');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        'AMEX 카드는 15자리 숫자여야 합니다.',
      );
    });

    it(`카드 브랜드가 UnionPay인 경우, 16자리 미만의 숫자를 입력했을 때 'UnionPay 카드는 16자리 숫자여야 합니다.'라는 에러메세지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('62212611');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        'UnionPay 카드는 16자리 숫자여야 합니다.',
      );
    });
  });

  describe('카드 브랜드에 따른 포맷팅 테스트', () => {
    it('일반 카드인 경우 4-4-4-4로 포맷팅 한다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('1211111111111111');
      });
      const expectedValue = ['1211', '1111', '1111', '1111'];
      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it('Visa 카드는 4-4-4-4로 포맷팅 한다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111111111111111');
      });

      const expectedValue = ['4111', '1111', '1111', '1111'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it('Master 카드는 4-4-4-4로 포맷팅 한다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('5511111111111111');
      });

      const expectedValue = ['5511', '1111', '1111', '1111'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it('UnionPay 카드인 경우 4-4-4-4로 포맷팅 한다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6241123412341234');
      });

      const expectedValue = ['6241', '1234', '1234', '1234'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it('Diners 카드인 경우 4-6-4로 포맷팅 한다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('36111111111111');
      });

      const expectedValue = ['3611', '111111', '1111'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it('AMEX 카드인 경우 4-6-5로 포맷팅 한다.', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('341212345612345');
      });

      const expectedValue = ['3412', '123456', '12345'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });
  });

  describe('카드 브랜드 별 초과 입력 제한 테스트', () => {
    it('일반 카드 번호 16자리 초과 입력 시 입력 제한', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('1211111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(16);
    });

    it('Visa 카드 번호 16자리 초과 입력 시 입력 제한', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(16);
    });

    it('Master 카드 번호 16자리 초과 입력 시 입력 제한', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('5511111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(16);
    });

    it('UnionPay 카드 번호 16자리 초과 입력 시 입력 제한', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6241123412341234');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(16);
    });

    it('Diners 카드 번호 14자리 초과 입력 시 입력 제한', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('36111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(14);
    });

    it('AMEX 카드 번호 15자리 초과 입력 시 입력 제한', () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('341212345612345');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(15);
    });
  });
});
