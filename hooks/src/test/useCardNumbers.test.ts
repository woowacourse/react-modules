import { renderHook, act } from '@testing-library/react';
import useCardNumbers from '../lib/useCardNumbers';
import { CARD_TYPES, ERROR_MESSAGES } from '../constants/card';

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
    it(`카드 브랜드가 없는 경우, 숫자가 아닌 문자 입력 시 '${ERROR_MESSAGES.ONLY_NUMBERS}'라는 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('abc');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.ONLY_NUMBERS}`,
      );
    });

    it(`카드 브랜드가 없는 경우, ${CARD_TYPES.NONE.INPUT_COUNT}자리 미만 숫자 입력 시 '${ERROR_MESSAGES.STANDARD_CARD_LENGTH}'라는 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('1111');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.STANDARD_CARD_LENGTH}`,
      );
    });

    it(`카드 브랜드가 Visa인 경우, ${CARD_TYPES.VISA.INPUT_COUNT}자리 미만 숫자 입력 시 '${ERROR_MESSAGES.VISA_CARD_LENGTH}'라는 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.VISA_CARD_LENGTH}`,
      );
    });

    it(`카드 브랜드가 Master인 경우, ${CARD_TYPES.MASTER.INPUT_COUNT}자리 미만 숫자 입력 시 '${ERROR_MESSAGES.MASTER_CARD_LENGTH}'라는 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.VISA_CARD_LENGTH}`,
      );
    });

    it(`카드 브랜드가 Diners인 경우, ${CARD_TYPES.DINERS.INPUT_COUNT}자리 미만의 숫자를 입력했을 때 '${ERROR_MESSAGES.DINERS_CARD_LENGTH}'라는 에러메세지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('3611');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.DINERS_CARD_LENGTH}`,
      );
    });

    it(`카드 브랜드가 AMEX인 경우, ${CARD_TYPES.AMEX.INPUT_COUNT}자리 미만의 숫자를 입력했을 때 '${ERROR_MESSAGES.AMEX_CARD_LENGTH}'라는 에러메세지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('3411');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.AMEX_CARD_LENGTH}`,
      );
    });

    it(`카드 브랜드가 UnionPay인 경우, ${CARD_TYPES.UNION_PAY.INPUT_COUNT}자리 미만의 숫자를 입력했을 때 '${ERROR_MESSAGES.UNIONPAY_CARD_LENGTH}'라는 에러메세지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('62212611');
      });
      expect(result.current.cardNumbersInfo.errorMessage).toBe(
        `${ERROR_MESSAGES.UNIONPAY_CARD_LENGTH}`,
      );
    });
  });

  describe('카드 브랜드에 따른 포맷팅 테스트', () => {
    it(`일반 카드인 경우 ${CARD_TYPES.NONE.FORMATTING_RULE}로 포맷팅 한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('1211111111111111');
      });
      const expectedValue = ['1211', '1111', '1111', '1111'];
      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it(`Visa 카드는 ${CARD_TYPES.VISA.FORMATTING_RULE}로 포맷팅 한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111111111111111');
      });

      const expectedValue = ['4111', '1111', '1111', '1111'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it(`Master 카드는 ${CARD_TYPES.MASTER.FORMATTING_RULE}로 포맷팅 한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('5511111111111111');
      });

      const expectedValue = ['5511', '1111', '1111', '1111'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it(`UnionPay 카드인 경우 ${CARD_TYPES.UNION_PAY.FORMATTING_RULE}로 포맷팅 한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6241123412341234');
      });

      const expectedValue = ['6241', '1234', '1234', '1234'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it(`Diners 카드인 경우 ${CARD_TYPES.DINERS.FORMATTING_RULE}로 포맷팅 한다.`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('36111111111111');
      });

      const expectedValue = ['3611', '111111', '1111'];

      expect(result.current.cardNumbersInfo.formattedCardNumber).toEqual(
        expectedValue,
      );
    });

    it(`AMEX 카드인 경우 ${CARD_TYPES.AMEX.FORMATTING_RULE}로 포맷팅 한다.`, () => {
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
    it(`일반 카드 번호 ${CARD_TYPES.NONE.INPUT_COUNT}자리 초과 입력 시 입력 제한`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('1211111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(
        CARD_TYPES.NONE.INPUT_COUNT,
      );
    });

    it(`Visa 카드 번호 ${CARD_TYPES.VISA.INPUT_COUNT}자리 초과 입력 시 입력 제한`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('4111111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(
        CARD_TYPES.VISA.INPUT_COUNT,
      );
    });

    it(`Master 카드 번호 ${CARD_TYPES.MASTER.INPUT_COUNT}자리 초과 입력 시 입력 제한`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('5511111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(
        CARD_TYPES.MASTER.INPUT_COUNT,
      );
    });

    it(`UnionPay 카드 번호 ${CARD_TYPES.UNION_PAY.INPUT_COUNT}자리 초과 입력 시 입력 제한`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('6241123412341234');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(
        CARD_TYPES.UNION_PAY.INPUT_COUNT,
      );
    });

    it(`Diners 카드 번호 ${CARD_TYPES.DINERS.INPUT_COUNT}자리 초과 입력 시 입력 제한`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('36111111111111');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(
        CARD_TYPES.DINERS.INPUT_COUNT,
      );
    });

    it(`AMEX 카드 번호 ${CARD_TYPES.AMEX.INPUT_COUNT}자리 초과 입력 시 입력 제한`, () => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbers('341212345612345');
      });
      expect(result.current.cardNumbersInfo.cardNumbers).toHaveLength(
        CARD_TYPES.AMEX.INPUT_COUNT,
      );
    });
  });
});
