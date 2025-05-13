import {act, renderHook} from '@testing-library/react';
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from '../lib/constants/validation';
import useCardNumber from '../lib/hooks/useCardNumber';

describe('useCardNumber', () => {
  describe('초기 상태', () => {
    it('4칸이 초기화 되어 있어야한다.', () => {
      const {result} = renderHook(() => useCardNumber());

      expect(result.current.formattingCardNumber).toEqual(['', '', '', '']);
    });
  });

  describe('입력 처리', () => {
    describe('Visa', () => {
      const cardNumber = '4123123412341234';

      it('카드 번호 입력시 올바른 카드 브랜드를 출력한다.', () => {
        const {result} = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange(cardNumber);
        });

        expect(result.current.cardBrand).toEqual('Visa');
      });

      it('카드 번호 입력시 올바른 카드 포맷을 출력한다.', () => {
        const {result} = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange(cardNumber);
        });

        expect(result.current.formattingCardNumber).toEqual([
          '4123',
          '1234',
          '1234',
          '1234',
        ]);
      });
    });

    describe('MasterCard', () => {
      it.each([
        '5123123412341234',
        '5223123412341234',
        '5323123412341234',
        '5423123412341234',
        '5523123412341234',
      ])('카드 번호 입력시 올바른 카드 브랜드를 출력한다.', (cardNumber) => {
        const {result} = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange(cardNumber);
        });

        expect(result.current.cardBrand).toEqual('MasterCard');
      });

      it('카드 번호 입력시 올바른 카드 포맷을 출력한다.', () => {
        const cardNumber = '5123123412341234';

        const {result} = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange(cardNumber);
        });

        expect(result.current.formattingCardNumber).toEqual([
          '5123',
          '1234',
          '1234',
          '1234',
        ]);
      });
    });
  });

  describe('Diners', () => {
    const cardNumber = '36123456789012';
    it('카드 번호 입력시 올바른 카드 브랜드를 출력한다.', () => {
      const {result} = renderHook(() => useCardNumber());
      act(() => {
        result.current.onChange(cardNumber);
      });

      expect(result.current.cardBrand).toEqual('Diners');
    });

    it('카드 번호 입력시 올바른 카드 포맷을 출력한다.', () => {
      const {result} = renderHook(() => useCardNumber());
      act(() => {
        result.current.onChange(cardNumber);
      });

      expect(result.current.formattingCardNumber).toEqual([
        '3612',
        '345678',
        '9012',
      ]);
    });
  });

  describe('AMEX', () => {
    it.each(['341234567890123', '371234567890123'])(
      '카드 번호 입력시 올바른 카드 브랜드를 출력한다.',
      (cardNumber) => {
        const {result} = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange(cardNumber);
        });

        expect(result.current.cardBrand).toEqual('AMEX');
      }
    );

    it('카드 번호 입력시 올바른 카드 포맷을 출력한다.', () => {
      const cardNumber = '341234567890123';
      const {result} = renderHook(() => useCardNumber());
      act(() => {
        result.current.onChange(cardNumber);
      });

      expect(result.current.formattingCardNumber).toEqual([
        '3412',
        '345678',
        '90123',
      ]);
    });
  });

  describe('UNION', () => {
    it.each(['6221261234567890', '6240123456789012', '6282123456789012'])(
      '카드 번호 입력시 올바른 카드 브랜드를 출력한다.',
      (cardNumber) => {
        const {result} = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange(cardNumber);
        });

        expect(result.current.cardBrand).toEqual('Union');
      }
    );

    it('카드 번호 입력시 올바른 카드 포맷을 출력한다.', () => {
      const cardNumber = '6221261234567890';
      const {result} = renderHook(() => useCardNumber());
      act(() => {
        result.current.onChange(cardNumber);
      });

      expect(result.current.formattingCardNumber).toEqual([
        '6221',
        '2612',
        '3456',
        '7890',
      ]);
    });
  });

  describe('유효성 검사', () => {
    it('카드 번호가 올바른 경우 에러가 발생하지 않는다.', () => {
      // when
      const {result} = renderHook(() => useCardNumber());

      act(() => {
        result.current.onChange('36123456789012');
      });

      // then
      expect(result.current.cardNumberValidationResult).toEqual(
        defaultValidationValue
      );
    });

    it('카드 번호가 숫자가 아닌 경우 에러가 발생한다.', () => {
      // when
      const {result} = renderHook(() => useCardNumber());

      act(() => {
        result.current.onChange('ㄱㄱ');
      });

      // then
      expect(result.current.cardNumberValidationResult).toEqual({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
    });

    it('카드 번호의 자릿수가 14~16이 아닌 경우 에러가 발생한다.', () => {
      // given
      const MIN_LENGTH = 14;
      const MAX_LENGTH = 16;

      // when
      const {result} = renderHook(() => useCardNumber());

      act(() => {
        result.current.onChange('123');
      });

      // then
      expect(result.current.cardNumberValidationResult).toEqual({
        isError: true,
        errorMessage: ERROR_MESSAGE.generateInvalidBetweenMsg(
          MIN_LENGTH,
          MAX_LENGTH
        ),
      });
    });
  });
});
