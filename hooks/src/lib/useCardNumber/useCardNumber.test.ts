import { CARD_BRAND_NAME } from './../constants/cardBrandRule';
import React from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumber from '.';

describe('useCardNumber에 대한 테스트 케이스', () => {
  describe('유효성 검증에 실패하는 경우', () => {
    const testWrongCase = (cardNumber: string) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.setCardNumber(cardNumber));

      expect(result.current.isValid).toBe(false);
    };

    test.each(['12345678901234a'])(
      '숫자가 아닌 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );

    test.each(['1234567890123456789'])(
      '16자리가 넘어가는 경우(%s) 유효하지 않은 값으로 판단한다.',
      testWrongCase
    );
  });

  describe('카드 브랜드 검증', () => {
    const getTestCardBrandName = (
      cardBrandName: (typeof CARD_BRAND_NAME)[number] | null,
      targetBrandNames?: (typeof CARD_BRAND_NAME)[number][]
    ) => {
      return (cardNumber: string) => {
        const { result } = renderHook(() => useCardNumber(targetBrandNames));

        React.act(() => result.current.setCardNumber(cardNumber));

        expect(result.current.cardBrandRule?.name ?? null).toBe(cardBrandName);
      };
    };
    test.each(['412', '4' + '1'.repeat(15)])(
      '4로 시작하는 카드번호(%s)을 입력한 경우 비자카드로 판단한다.',
      getTestCardBrandName('비자카드')
    );
    test.each(['51', '52' + '1'.repeat(14), '55' + '1'.repeat(14)])(
      '51~55로 시작하는 카드번호(%s)을 입력한 경우 마스터카드로 판단한다.',
      getTestCardBrandName('마스터카드')
    );
    test.each(['36', '36' + '1'.repeat(13)])(
      '36으로 시작하는 카드번호(%s)을 입력한 경우 다이너스 클럽으로 판단한다.',
      getTestCardBrandName('다이너스 클럽')
    );
    test.each(['34', '37', '34' + '1'.repeat(13), '37' + '1'.repeat(13)])(
      '34나 37로 시작하는 카드번호(%s)을 입력한 경우 아메리칸 익스프레스로 판단한다.',
      getTestCardBrandName('아메리칸 익스프레스')
    );
    test.each([
      '622126',
      '622555',
      '622925',
      '622126' + '1'.repeat(10),
      '622555' + '1'.repeat(10),
      '622925' + '1'.repeat(10),
    ])(
      '622126~622925로 시작하는 카드번호(%s)을 입력한 경우 유니온페이로 판단한다.',
      getTestCardBrandName('유니온페이')
    );
    test.each(['624', '626', '624' + '1'.repeat(13), '626' + '1'.repeat(13)])(
      '624~626로 시작하는 카드번호(%s)을 입력한 경우 유니온페이로 판단한다.',
      getTestCardBrandName('유니온페이')
    );

    test.each([
      '6282',
      '6288',
      '6282' + '1'.repeat(12),
      '6288' + '1'.repeat(12),
    ])(
      '6282~6288로 시작하는 카드번호(%s)을 입력한 경우 유니온페이로 판단한다.',
      getTestCardBrandName('유니온페이')
    );
  });

  describe('카드 포맷팅 확인', () => {
    const testFormatting = (cardNumber: string, expected: string[]) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.setCardNumber(cardNumber));

      expect(result.current.formattedCardNumber).toEqual(expected);
    };

    test.each([['4123456789012345', ['4123', '4567', '8901', '2345']]])(
      '비자카드는 4 4 4 4로 나눠서 포맷팅한다.',
      testFormatting
    );

    test.each([
      ['5123456789012345', ['5123', '4567', '8901', '2345']],
      ['5223456789012345', ['5223', '4567', '8901', '2345']],
      ['5323456789012345', ['5323', '4567', '8901', '2345']],
      ['5423456789012345', ['5423', '4567', '8901', '2345']],
      ['5523456789012345', ['5523', '4567', '8901', '2345']],
    ])('마스터카드는 4 4 4 4로 나눠서 포맷팅한다.', testFormatting);

    test.each([['36123456789012', ['3612', '345678', '9012']]])(
      '다이너스 클럽은 4 6 4로 나눠서 포맷팅한다.',
      testFormatting
    );

    test.each([
      ['341234567890123', ['3412', '345678', '90123']],
      ['371234567890123', ['3712', '345678', '90123']],
    ])('아메리칸 익스프레스는 4 6 5로 나눠서 포맷팅한다.', testFormatting);

    test.each([
      ['6221261234567890', ['6221', '2612', '3456', '7890']],
      ['6229251234567890', ['6229', '2512', '3456', '7890']],
      ['6240123456789012', ['6240', '1234', '5678', '9012']],
      ['6260123456789012', ['6260', '1234', '5678', '9012']],
      ['6282123456789012', ['6282', '1234', '5678', '9012']],
      ['6288123456789012', ['6288', '1234', '5678', '9012']],
    ])('유니온페이는 4 4 4 4로 나눠서 포맷팅한다.', testFormatting);
  });

  const testCardBrandName = (
    cardNumber: string,
    cardBrandName: (typeof CARD_BRAND_NAME)[number] | null,
    targetBrandNames?: (typeof CARD_BRAND_NAME)[number][]
  ) => {
    const { result } = renderHook(() => useCardNumber(targetBrandNames));

    React.act(() => result.current.setCardNumber(cardNumber));

    expect(result.current.cardBrandRule?.name ?? null).toBe(cardBrandName);
  };

  test.each([
    [
      '6221261234567890',
      null,
      ['비자카드'] as (typeof CARD_BRAND_NAME)[number][],
    ],
  ])('비자카드가 들어오는 경우를 확인한다.', testCardBrandName);
});
