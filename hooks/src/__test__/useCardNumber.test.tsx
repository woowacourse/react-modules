import { act, renderHook } from '@testing-library/react';
import { useCardNumber } from '../lib/hooks/useCardNumber/useCardNumber';

describe('카드 번호 검증 테스트입니다.', () => {
  const createMockEvent = (value: string) =>
    ({
      target: { value },
    } as React.ChangeEvent<HTMLInputElement>);

  describe('카드 타입 식별 테스트', () => {
    const testCases = [
      { cardNumber: '4', expectedCardType: 'VISA' },
      { cardNumber: '36', expectedCardType: 'Diners' },
      { cardNumber: '34', expectedCardType: 'AMEX' },
      { cardNumber: '51', expectedCardType: 'MASTERCARD' },
      { cardNumber: '622126', expectedCardType: 'UnionPay' },
    ];

    test.each(testCases)(
      '사용자가 입력한 카드번호 "$cardNumber"를 보고 카드 종류 "$expectedCardType"를 반환한다.',
      ({ cardNumber, expectedCardType }) => {
        const { result } = renderHook(() => useCardNumber());

        act(() => {
          result.current.handleCardNumberChange(createMockEvent(cardNumber));
        });
        expect(result.current.cardType).toBe(expectedCardType);
      }
    );
  });

  describe('카드 번호 길이 유효성 검사 테스트', () => {
    const lengthValidationTestCases = [
      {
        cardNumber: '4111111111111111',
        expectedErrorMessage: '',
        description: '4로 시작하는 VISA카드 유효 번호 입력 테스트',
      },
      {
        cardNumber: '41111',
        expectedErrorMessage: '숫자 16자리를 정확히 입력해주세요.',
        description: 'VISA 부적절한 길이 테스트',
      },
      {
        cardNumber: '36111111111111',
        expectedErrorMessage: '',
        description: '36로 시작하는 Diners카드 유효 번호 입력 테스트',
      },
      {
        cardNumber: '36111111',
        expectedErrorMessage: '숫자 14자리를 정확히 입력해주세요.',
        description: 'Diners 부적절한 길이 테스트',
      },
      {
        cardNumber: '5111111111111111',
        expectedErrorMessage: '',
        description: '51로 시작하는 MASTERCARD카드 유효 번호 입력 테스트',
      },
      {
        cardNumber: '341111111111111',
        expectedErrorMessage: '',
        description: '34로 시작하는 AMEX카드 유효 번호 입력 테스트',
      },
      {
        cardNumber: '3411111111',
        expectedErrorMessage: '숫자 15자리를 정확히 입력해주세요.',
        description: 'AMEX 부적절한 길이 테스트',
      },
      {
        cardNumber: '51111111111111',
        expectedErrorMessage: '숫자 16자리를 정확히 입력해주세요.',
        description: 'MASTERCARD 번호 초과 테스트',
      },

      {
        cardNumber: '6221261111111111',
        expectedErrorMessage: '',
        description: '622126로 시작하는 UnionPay카드 유효 번호 입력 테스트',
      },
      {
        cardNumber: '6221261111',
        expectedErrorMessage: '숫자 16자리를 정확히 입력해주세요.',
        description: 'UnionPay 부적절한 길이 테스트',
      },
    ];

    test.each(lengthValidationTestCases)(
      '사용자가 입력한 카드번호 "$cardNumber"를 보고 카드 종류 "$expectedCardType"를 반환한다.',
      ({ cardNumber, expectedErrorMessage }) => {
        const { result } = renderHook(() => useCardNumber());

        act(() => {
          result.current.handleCardNumberChange(createMockEvent(cardNumber));
        });

        expect(result.current.errorMessage).toBe(expectedErrorMessage);
      }
    );
  });
  describe('카드 번호 포맷팅 기능 테스트', () => {
    const formatTestCases = [
      {
        cardNumber: '4111222233334444',
        expectedFormattedValue: '4111 2222 3333 4444',
        description: 'VISA 카드 번호 포맷팅 테스트',
      },
      {
        cardNumber: '36111111112222',
        expectedFormattedValue: '3611 111111 2222',
        description: 'Diners 카드 번호 포맷팅 테스트',
      },
      {
        cardNumber: '341111111122222',
        expectedFormattedValue: '3411 111111 22222',
        description: 'AMEX 카드 번호 포맷팅 테스트',
      },
      {
        cardNumber: '5111111122223333',
        expectedFormattedValue: '5111 1111 2222 3333',
        description: 'MASTERCARD 카드 번호 포맷팅 테스트',
      },
      {
        cardNumber: '6221261111112222',
        expectedFormattedValue: '6221 2611 1111 2222',
        description: 'UnionPay 카드 번호 포맷팅 테스트',
      },
    ];

    test.each(formatTestCases)(
      '$description - 사용자가 입력한 카드번호 "$cardNumber"를 보고 카드 종류 "$expectedCardType"를 반환한다.',
      ({ cardNumber, expectedFormattedValue }) => {
        const { result } = renderHook(() => useCardNumber());

        act(() => {
          result.current.handleCardNumberChange(createMockEvent(cardNumber));
        });

        expect(result.current.cardNumbers).toBe(expectedFormattedValue);
      }
    );
  });
});
