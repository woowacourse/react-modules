import { renderHook } from '@testing-library/react';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import useCardNumber from './useCardNumber';
import { act } from 'react';

const VALID_SINGLE_UNIT_LENGTH = 4;

describe('useCardNumber 커스텀 훅 테스트', () => {
  describe('카드 타입이 없는 경우의 유효성 테스트', () => {
    it('올바른 카드 번호를 입력하면 유효하다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('1234123412341234'));

      expect(result.current.isValidCardNumber).toBe(true);
    });

    it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('v'));

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it('숫자 외의 값을 입력하면 에러 메세지가 표시된다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('v'));

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });

    it(`${VALID_SINGLE_UNIT_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => result.current.handleCardNumberChange('1'));

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it('16자 미만의 카드 번호를 입력하면 에러 메세지가 표시된다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => result.current.handleCardNumberChange('1'));

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH(16));
    });
  });

  describe('VISA 타입의 카드 유효성 테스트', () => {
    it('VISA 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => result.current.handleCardNumberChange('4444444444444444'));

      expect(result.current.cardNumber).toBe('4444 4444 4444 4444');
    });

    it('카드 시작이 4라면 VISA 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => result.current.handleCardNumberChange('4'));

      expect(result.current.cardType).toBe('VISA');
    });
  });

  describe('MASTER 타입의 카드 유효성 테스트', () => {
    it('MASTER 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('5500000000000004'));
      expect(result.current.cardNumber).toBe('5500 0000 0000 0004');
    });
    it('카드 시작이 51 ~ 55 라면 MASTER 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('5500000000000004'));
      expect(result.current.cardType).toBe('MASTER');

      act(() => result.current.handleCardNumberChange('5200000000000004'));
      expect(result.current.cardType).toBe('MASTER');
    });
  });

  describe('AMEX 타입의 카드 유효성 테스트', () => {
    it('AMEX 타입의 길이인 15자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('341111111111111'));
      expect(result.current.cardNumber).toBe('3411 111111 11111');
    });

    it('카드 시작이 34 또는 37이라면 AMEX 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('341111111111111'));
      expect(result.current.cardType).toBe('AMEX');

      act(() => result.current.handleCardNumberChange('371111111111111'));
      expect(result.current.cardType).toBe('AMEX');
    });
  });

  describe('DINERS 타입의 카드 유효성 테스트', () => {
    it('DINERS 타입의 길이인 14자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('36111111111111'));
      expect(result.current.cardNumber).toBe('3611 111111 1111');
    });

    it('카드 시작이 36이라면 DINERS 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('36111111111111'));
      expect(result.current.cardType).toBe('DINERS');
    });
  });

  describe('UNION_PAY 타입의 카드 유효성 테스트', () => {
    it('UNION_PAY 타입의 길이인 16자로 올바르게 입력했다면 패턴대로 포맷된 값이 반환된다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('6221260000000000'));
      expect(result.current.cardNumber).toBe('6221 2600 0000 0000');
    });

    it('카드 시작이 622126~622925 내라면 UNION_PAY 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('6221260000000000'));
      expect(result.current.cardType).toBe('UNION_PAY');
    });

    it('카드 시작이 624~626 내라면 UNION_PAY 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('6250000000000000'));
      expect(result.current.cardType).toBe('UNION_PAY');
    });

    it('카드 시작이 6282~6288 내라면 UNION_PAY 타입이다.', () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => result.current.handleCardNumberChange('6282000000000000'));
      expect(result.current.cardType).toBe('UNION_PAY');
    });
  });
});
