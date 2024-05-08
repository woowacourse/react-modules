import { CARD_BRAND_NAME } from './../constants/cardBrand';
import React from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumber from '.';

describe('useCardNumber에 대한 테스트 케이스', () => {
  const testWrongCase = (cardNumber: string) => {
    const { result } = renderHook(() => useCardNumber());

    React.act(() => result.current.setCardNumber(cardNumber));

    expect(result.current.isValid).toBe(false);
  };

  const getTestCardBrandName = (
    cardBrandName: (typeof CARD_BRAND_NAME)[number]
  ) => {
    return (cardNumber: string) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.setCardNumber(cardNumber));

      expect(result.current.cardBrand?.name).toBe(cardBrandName);
    };
  };

  describe('유효성 검증에 실패하는 경우', () => {
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
});
