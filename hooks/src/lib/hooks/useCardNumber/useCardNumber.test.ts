import { renderHook } from '@testing-library/react';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import useCardNumber from './useCardNumber';
import { act } from 'react';

const VALID_SINGLE_UNIT_LENGTH = 4;

describe('useCardNumber 커스텀 훅 테스트', () => {
  const setup = (initialCardNumber?: string) => {
    const { result } = renderHook(() => useCardNumber(initialCardNumber));
    return result;
  };

  const setCardNumber = (result: any, cardNumber: string) => {
    act(() => result.current.handleCardNumberChange(cardNumber));
  };

  it('초기값을 전달해주면 해당 값으로 초기값을 세팅한다.', () => {
    const cardNumber = '123';

    const result = setup(cardNumber);

    expect(result.current.cardNumber).toBe(cardNumber);
  });

  describe('카드 타입이 없는 경우의 유효성 테스트', () => {
    it('기본 숫자 16자의 올바른 카드 번호를 입력하면 유효하다.', () => {
      const result = setup();
      setCardNumber(result, '1234123412341234');

      expect(result.current.isValidCardNumber).toBe(true);
    });

    it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
      const result = setup();
      setCardNumber(result, 'v');

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it('숫자 외의 값을 입력하면 에러 메세지가 표시된다.', () => {
      const result = setup();
      setCardNumber(result, 'v');

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });

    it(`${VALID_SINGLE_UNIT_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
      const result = setup();
      setCardNumber(result, '1');

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it('16자 미만의 카드 번호를 입력하면 에러 메세지가 표시된다.', () => {
      const result = setup();
      setCardNumber(result, '1');

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH(16));
    });
  });

  describe('VISA 타입의 카드 유효성 테스트', () => {
    it('VISA 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '4444444444444444');

      expect(result.current.cardNumber).toBe('4444 4444 4444 4444');
    });

    it('카드 시작이 4라면 VISA 타입이다.', () => {
      const result = setup();
      setCardNumber(result, '4');

      expect(result.current.cardType).toBe('VISA');
    });
  });

  describe('MASTER 타입의 카드 유효성 테스트', () => {
    it('MASTER 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '5500000000000004');

      expect(result.current.cardNumber).toBe('5500 0000 0000 0004');
    });

    test.each(['5100000000000000', '5200000000000000', '5300000000000000', '5400000000000000', '5500000000000000'])(
      '카드 시작이 51 ~ 55 라면 MASTER 타입이다.',
      (cardNumber) => {
        const result = setup();
        setCardNumber(result, cardNumber);
        expect(result.current.cardType).toBe('MASTER');
      },
    );
  });

  describe('AMEX 타입의 카드 유효성 테스트', () => {
    it('AMEX 타입의 길이인 15자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '341111111111111');

      expect(result.current.cardNumber).toBe('3411 111111 11111');
    });

    test.each(['341111111111111', '371111111111111'])('카드 시작이 34 또는 37이라면 AMEX 타입이다.', (cardNumber) => {
      const result = setup();
      setCardNumber(result, cardNumber);
      expect(result.current.cardType).toBe('AMEX');
    });
  });

  describe('DINERS 타입의 카드 유효성 테스트', () => {
    it('DINERS 타입의 길이인 14자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '36111111111111');

      expect(result.current.cardNumber).toBe('3611 111111 1111');
    });

    it('카드 시작이 36이라면 DINERS 타입이다.', () => {
      const result = setup();
      setCardNumber(result, '36111111111111');

      expect(result.current.cardType).toBe('DINERS');
    });
  });

  describe('UNION_PAY 타입의 카드 유효성 테스트', () => {
    it('UNION_PAY 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '6221260000000000');

      expect(result.current.cardNumber).toBe('6221 2600 0000 0000');
    });

    test.each([
      '6221261111111111',
      '6222001111111111',
      '6223541111111111',
      '6226001111111111',
      '6228651111111111',
      '6229251111111111',
    ])('카드 시작이 622126~622925 내라면 UNION_PAY 타입이다.', (cardNumber) => {
      const result = setup();
      setCardNumber(result, cardNumber);

      expect(result.current.cardType).toBe('UNION_PAY');
    });

    test.each(['6241111111111111', '6251111111111111', '6261111111111111'])(
      '카드 시작이 624~626 내라면 UNION_PAY 타입이다.',
      (cardNumber) => {
        const result = setup();
        setCardNumber(result, cardNumber);

        expect(result.current.cardType).toBe('UNION_PAY');
      },
    );

    test.each([
      '6282111111111111',
      '6283111111111111',
      '6284111111111111',
      '6285111111111111',
      '6286111111111111',
      '6287111111111111',
      '6288111111111111',
    ])('카드 시작이 6282~6288 내라면 UNION_PAY 타입이다.', (cardNumber) => {
      const result = setup();
      setCardNumber(result, cardNumber);

      expect(result.current.cardType).toBe('UNION_PAY');
    });
  });

  describe('JCB 타입의 카드 유효성 테스트', () => {
    it('JCB 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '3528111111111111');

      expect(result.current.cardNumber).toBe('3528 1111 1111 1111');
    });

    test.each(['3528111111111111', '3589111111111111'])(
      '카드 시작이 3528 또는 3589 라면 JCB 타입이다.',
      (cardNumber) => {
        const result = setup();
        setCardNumber(result, cardNumber);
        expect(result.current.cardType).toBe('JCB');
      },
    );
  });

  describe('DISCOVER 타입의 카드 유효성 테스트', () => {
    it('DISCOVER 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const result = setup();
      setCardNumber(result, '6011111111111117');

      expect(result.current.cardNumber).toBe('6011 1111 1111 1117');
    });
    test.each([
      '6011111111111117',
      '6511111111111117',
      '6441111111111117',
      '6451111111111117',
      '6461111111111117',
      '6471111111111117',
      '6481111111111117',
      '6491111111111117',
    ])('카드 시작이 6011 또는 65 또는 64[4-9] 라면 DISCOVER 타입이다.', (cardNumber) => {
      const result = setup();
      setCardNumber(result, cardNumber);
      expect(result.current.cardType).toBe('DISCOVER');
    });
  });
});
