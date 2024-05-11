import { CARD_BRAND } from '../constants/cardBrand';
import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumber from './useCardNumber';

describe('useCardNumber', () => {
  describe('초기값 설정', () => {
    test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
      const { result } = renderHook(() => useCardNumber('1234'));

      expect(result.current.value).toEqual('1234');
    });
  });

  describe('카드번호 업데이트', () => {
    test(`카드번호가 업데이트되면 value와 formattingValue가 업데이트된다.`, () => {
      const { result } = renderHook(() => useCardNumber(''));

      act(() => {
        result.current.onChangeHandler({
          target: { value: '12345678' },
        } as any);
      });

      expect(result.current.value).toBe(`12345678`);
      expect(result.current.formattingValue).toBe(`1234-5678`);
    });
  });

  describe('카드번호 유효성 검사', () => {
    const maxLength = 16;

    test(`카드 번호에 숫자가 아닌 문자를 입력하면 "카드번호는 숫자만 입력이 가능해요." 라는 errorMessage를 반환한다.`, () => {
      const { result } = renderHook(() => useCardNumber(''));

      act(() => {
        result.current.onChangeHandler({
          target: { value: 'abcd' },
        } as any);
      });

      expect(result.current.errorMessage).toBe(
        `카드번호는 숫자만 입력이 가능해요.`,
      );
    });

    test(`카드번호에서 ${maxLength}를 초과하는 값을 입력하면 "카드번호는 ${maxLength}글자 까지만 입력이 가능해요." 라는 errorMessage를 반환한다.`, () => {
      const { result } = renderHook(() => useCardNumber(''));

      act(() => {
        result.current.onChangeHandler({
          target: { value: '12345678123456789' },
        } as any);
      });

      expect(result.current.errorMessage).toBe(
        `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      );
    });
  });

  describe('카드 브랜드 식별', () => {
    test.each([
      // Visa
      ['4111111111111111', CARD_BRAND.VISA.name],
      ['4012888888881881', CARD_BRAND.VISA.name],
      ['3111111111111111', CARD_BRAND.NONE.name],

      // Mastercard
      ['5011111111111111', CARD_BRAND.NONE.name],
      ['5111111111111111', CARD_BRAND.MASTERCARD.name],
      ['5211111111111111', CARD_BRAND.MASTERCARD.name],
      ['5311111111111111', CARD_BRAND.MASTERCARD.name],
      ['5411111111111111', CARD_BRAND.MASTERCARD.name],
      ['5511111111111111', CARD_BRAND.MASTERCARD.name],
      ['5611111111111111', CARD_BRAND.NONE.name],
      ['6111111111111111', CARD_BRAND.NONE.name],

      // AMEX
      ['331111111111111', CARD_BRAND.NONE.name],
      ['341111111111111', CARD_BRAND.AMEX.name],
      ['371111111111111', CARD_BRAND.AMEX.name],
      ['381111111111111', CARD_BRAND.NONE.name],

      // Diners
      ['36111111111111', CARD_BRAND.DINERS.name],
      ['35111111111111', CARD_BRAND.NONE.name],

      // UnionPay
      ['6231111111111111', CARD_BRAND.NONE.name],
      ['6241111111111111', CARD_BRAND.UNIONPAY.name],
      ['6251111111111111', CARD_BRAND.UNIONPAY.name],
      ['6261111111111111', CARD_BRAND.UNIONPAY.name],
      ['6271111111111111', CARD_BRAND.NONE.name],

      ['6281111111111111', CARD_BRAND.NONE.name],
      ['6282111111111111', CARD_BRAND.UNIONPAY.name],
      ['6283111111111111', CARD_BRAND.UNIONPAY.name],
      ['6284111111111111', CARD_BRAND.UNIONPAY.name],
      ['6285111111111111', CARD_BRAND.UNIONPAY.name],
      ['6286111111111111', CARD_BRAND.UNIONPAY.name],
      ['6287111111111111', CARD_BRAND.UNIONPAY.name],
      ['6288111111111111', CARD_BRAND.UNIONPAY.name],
      ['6289111111111111', CARD_BRAND.NONE.name],

      ['6221251111111111', CARD_BRAND.NONE.name],
      ['6221261111111111', CARD_BRAND.UNIONPAY.name],
      ['6222111111111111', CARD_BRAND.UNIONPAY.name],
      ['6223111111111111', CARD_BRAND.UNIONPAY.name],
      ['6224111111111111', CARD_BRAND.UNIONPAY.name],
      ['6225111111111111', CARD_BRAND.UNIONPAY.name],
      ['6226111111111111', CARD_BRAND.UNIONPAY.name],
      ['6227111111111111', CARD_BRAND.UNIONPAY.name],
      ['6228111111111111', CARD_BRAND.UNIONPAY.name],
      ['6229111111111111', CARD_BRAND.UNIONPAY.name],
      ['6229251111111111', CARD_BRAND.UNIONPAY.name],
      ['6229261111111111', CARD_BRAND.NONE.name],
    ])(
      '카드 번호에 따라 카드 브랜드를 반환한다. (%s)',
      (cardNumber, cardBrand) => {
        const { result } = renderHook(() => useCardNumber(''));

        act(() => {
          result.current.onChangeHandler({
            target: { value: cardNumber },
          } as any);
        });

        expect(result.current.cardBrand).toBe(cardBrand);
      },
    );
  });

  describe('카드 브랜드 포멧팅 결과 확인', () => {
    test.each([
      // Visa
      ['4111111111111111', '4111-1111-1111-1111'],
      // Mastercard
      ['5111111111111111', '5111-1111-1111-1111'],
      // AMEX
      ['341111111111111', '3411-111111-11111'],
      // Diners
      ['36111111111111', '3611-111111-1111'],
      // UnionPay
      ['6241111111111111', '6241-1111-1111-1111'],
      //None
      ['1234567812345678', '1234-5678-1234-5678'],
    ])('카드 브랜드에 따라 포멧팅', (cardNumber, formattedCardNumber) => {
      const { result } = renderHook(() => useCardNumber(''));

      act(() => {
        result.current.onChangeHandler({
          target: { value: cardNumber },
        } as any);
      });

      expect(result.current.formattingValue).toBe(formattedCardNumber);
    });
  });
});
