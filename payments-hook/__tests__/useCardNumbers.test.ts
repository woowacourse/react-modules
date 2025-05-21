import { renderHook } from '@testing-library/react';
import useCardNumbers, {
  CARD_NUMBER_ERROR_MESSAGE,
  CardNumbersKeys,
} from '../src/useCardNumbers/useCardNumbers';
import { act } from 'react';
import createInputChangeEvent from '../src/utils/createInputChangeEvent';

import {
  AMEX_CARD_NUMBER_LENGTH_BY_POSITION,
  DINERS_CARD_NUMBER_LENGTH_BY_POSITION,
  MASTER_CARD_NUMBER_LENGTH_BY_POSITION,
  UNIONPAY_CARD_NUMBER_LENGTH_BY_POSITION,
  VISA_CARD_NUMBER_LENGTH_BY_POSITION,
} from '../src/constants/cardNumberlengthByPosition';
type CardTestCase = {
  readonly name: string;
  readonly validNumbers: [string, string, string, string];
  readonly tooLong: string;
  readonly invalidChar: string;
  readonly target: CardNumbersKeys;
  readonly lengthByPosition: Readonly<Record<CardNumbersKeys, number>>;
};

const CARD_TEST_CASES: CardTestCase[] = [
  {
    name: 'VISA',
    validNumbers: ['4234', '4234', '4234', '4234'],
    tooLong: '42345',
    invalidChar: '4a',
    target: 'FIRST',
    lengthByPosition: VISA_CARD_NUMBER_LENGTH_BY_POSITION,
  },
  {
    name: 'MasterCard',
    validNumbers: ['5122', '2345', '3456', '4567'],
    tooLong: '51234',
    invalidChar: '5b',
    target: 'FIRST',
    lengthByPosition: MASTER_CARD_NUMBER_LENGTH_BY_POSITION,
  },
  {
    name: 'AMEX_34',
    validNumbers: ['3433', '123456', '78901', ''], // 총 15자리
    tooLong: '34121',
    invalidChar: '3x',
    target: 'FIRST',
    lengthByPosition: AMEX_CARD_NUMBER_LENGTH_BY_POSITION,
  },
  {
    name: 'AMEX_37',
    validNumbers: ['3722', '123456', '78901', ''],
    tooLong: '37123',
    invalidChar: '3z',
    target: 'FIRST',
    lengthByPosition: AMEX_CARD_NUMBER_LENGTH_BY_POSITION,
  },
  {
    name: 'Diners',
    validNumbers: ['3622', '123456', '7890', ''], // 총 14자리
    tooLong: '36123',
    invalidChar: '3#',
    target: 'FIRST',
    lengthByPosition: DINERS_CARD_NUMBER_LENGTH_BY_POSITION,
  },
  {
    name: 'UnionPay',
    validNumbers: ['6222', '3456', '7890', '1234'], // 총 16자리
    tooLong: '62456',
    invalidChar: '6x',
    target: 'FIRST',
    lengthByPosition: UNIONPAY_CARD_NUMBER_LENGTH_BY_POSITION,
  },
];

describe('useCardNumbers 브랜드별 테스트', () => {
  CARD_TEST_CASES.forEach((testCase) => {
    testCardBrand(testCase);
  });
});

function testCardBrand({
  name,
  validNumbers,
  tooLong,
  invalidChar,
  target,
  lengthByPosition,
}: {
  name: string;
  validNumbers: string[];
  tooLong: string;
  invalidChar: string;
  target: CardNumbersKeys;
  lengthByPosition: Record<string, number>;
}) {
  describe(`${name} 카드 테스트`, () => {
    let result;

    beforeEach(() => {
      result = renderHook(() => useCardNumbers()).result;
    });

    it('정상 입력은 에러를 발생시키지 않는다', () => {
      act(() => {
        result.current.handleCardNumbersChange({ target: 'FIRST' })(
          createInputChangeEvent(validNumbers[0])
        );
        result.current.handleCardNumbersChange({ target: 'SECOND' })(
          createInputChangeEvent(validNumbers[1])
        );
        result.current.handleCardNumbersChange({ target: 'THIRD' })(
          createInputChangeEvent(validNumbers[2])
        );
        result.current.handleCardNumbersChange({ target: 'FOURTH' })(
          createInputChangeEvent(validNumbers[3])
        );
      });

      expect(result.current.isError[target]).toBe(false);
    });

    it('숫자가 아닌 input이 들어오면 에러 상태를 반환한다', () => {
      act(() => {
        result.current.handleCardNumbersChange({ target: target })(
          createInputChangeEvent(invalidChar)
        );
      });

      expect(result.current.isError[target]).toBe(true);
      expect(result.current.errorMessage[target]).toEqual(
        CARD_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC
      );
    });

    it(`${lengthByPosition[target]}자리 이상의 input이 들어오면 에러 상태를 반환한다`, () => {
      act(() => {
        result.current.handleCardNumbersChange({ target })(
          createInputChangeEvent(validNumbers[0])
        );
      });

      act(() => {
        result.current.handleCardNumbersChange({ target })(
          createInputChangeEvent(tooLong)
        );
      });

      expect(result.current.isError[target]).toBe(true);
      expect(result.current.errorMessage[target]).toEqual(
        CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(lengthByPosition[target])
      );
    });
  });
}
