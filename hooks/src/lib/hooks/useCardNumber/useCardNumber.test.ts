import React from 'react';
import { renderHook } from '@testing-library/react';

import useCardNumber from './useCardNumber';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import { CARD_TYPE } from '../../constants/Condition';

describe('useCardNumber 커스텀 훅 테스트', () => {
  describe('DINERS 카드 유효성 테스트', () => {
    it(`${CARD_TYPE['DINERS'].VALID_LENGTH}자 카드 번호를 입력하면 유효하다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('36'));
      React.act(() => result.current.handleCardNumberChange('3612 234567 3456'));

      expect(result.current.isValidCardNumber).toBe(true);
    });

    it(`${CARD_TYPE['DINERS'].VALID_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('36'));
      React.act(() => result.current.handleCardNumberChange('3612 234567 345'));

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it(`${CARD_TYPE['DINERS'].VALID_LENGTH}자 미만의 카드 번호를 입력하면 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('36'));
      React.act(() => result.current.handleCardNumberChange('3612 234567 345'));

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH);
    });
  });

  describe('AMEX 카드 유효성 테스트', () => {
    it(`${CARD_TYPE['AMEX'].VALID_LENGTH}자의 카드 번호를 입력하면 유효하다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('34'));
      React.act(() => result.current.handleCardNumberChange('3412 234567 34567'));

      expect(result.current.isValidCardNumber).toBe(true);
    });

    it(`${CARD_TYPE['AMEX'].VALID_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('34'));
      React.act(() => result.current.handleCardNumberChange('3412 234567 3456'));

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it(`${CARD_TYPE['AMEX'].VALID_LENGTH}자 미만의 카드 번호를 입력하면 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('34'));
      React.act(() => result.current.handleCardNumberChange('3412 234567 3456'));

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH);
    });
  });

  describe('기본 카드 유효성 테스트', () => {
    it(`${CARD_TYPE['DEFAULT'].VALID_LENGTH}자 카드 번호를 입력하면 유효하다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('1234 2345 3456 4567'));

      expect(result.current.isValidCardNumber).toBe(true);
    });

    it(`${CARD_TYPE['DEFAULT'].VALID_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('1234 2345 3456 456'));

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it(`${CARD_TYPE['DEFAULT'].VALID_LENGTH}자 미만의 카드 번호를 입력하면 에러 메시지를 표시한다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('1234 2345 3456 456'));

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH);
    });

    it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('ㄱ'));

      expect(result.current.isValidCardNumber).toBe(false);
    });

    it('숫자 외의 값을 입력하면 에러 메세지가 표시된다.', () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('ㄱ'));

      expect(result.current.cardNumberErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });
  });

  describe('카드 번호 포맷팅 테스트', () => {
    it(`DINERS 카드는 ${CARD_TYPE['DINERS'].PATTERN} 패턴으로 포맷팅 된다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('36'));
      React.act(() => result.current.handleCardNumberChange('36122345673456'));

      expect(result.current.cardNumber).toBe('3612 234567 3456');
    });

    it(`AMEX 카드는 ${CARD_TYPE['AMEX'].PATTERN} 패턴으로 포맷팅 된다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('34'));
      React.act(() => result.current.handleCardNumberChange('341223456734567'));

      expect(result.current.cardNumber).toBe('3412 234567 34567');
    });

    it(`기본 카드는 ${CARD_TYPE['DEFAULT'].PATTERN} 패턴으로 포맷팅 된다.`, () => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => result.current.handleCardNumberChange('1234234534564567'));

      expect(result.current.cardNumber).toBe('1234 2345 3456 4567');
    });
  });
});
