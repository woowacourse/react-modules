import { renderHook } from '@testing-library/react';
import React from 'react';
import useCardNumber from './useCardNumber';

describe('useCardNumber 테스트', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title: '카드 번호에 "한글"을 입력한 경우 "숫자만 입력 가능합니다."라는 메시지와 함께 에러가 발생한다.',
        inputDetails: '한글',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '숫자만 입력 가능합니다.',
        },
      },
      {
        title: '"1"만 입력한 경우, "카드 번호를 모두 입력해주세요."라는 메시지와 함께 에러가 발생한다.',
        inputDetails: '1',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호를 모두 입력해주세요.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, inputDetails }) => {
      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(inputDetails);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual(expectedErrorDetail);
    });

    it('유저가 기본 카드 번호인 16자리를 모두 입력한 후 값을 하나 지웠을 때 "카드 번호를 모두 입력해주세요."라는 메시지와 함께 에러가 발생한다.', () => {
      // given
      const cardNumbers = '1234123412341234';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      React.act(() => {
        result.current.handleChangeCardNumber('123412341234123');
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: true,
        errorMessage: '카드 번호를 모두 입력해주세요.',
      });
    });

    it('유저가 기본 카드 번호인 16자리를 모두 입력한 후 값을 모두 지웠을 때 "카드 번호를 모두 입력해주세요."라는 메시지와 함께 에러가 발생한다.', () => {
      // given
      const cardNumbers = '1234123412341234';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      React.act(() => {
        result.current.handleChangeCardNumber('');
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: true,
        errorMessage: '카드 번호를 모두 입력해주세요.',
      });
    });
  });
  describe('success case', () => {
    it('유저가 기본 카드 번호인 16자리의 숫자를 모두 입력한 경우 에러가 발생하지 않는다.', () => {
      // given
      const cardNumbers = '1234567890123456';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
    });

    it('유저가 VISA 카드 번호인 16자리의 숫자를 모두 입력한 경우 에러가 발생하지 않고, VISA 카드로 포매팅된 번호를 반환한다.', () => {
      // given
      const cardNumbers = '4123123412341234';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
      expect(result.current.cardNumbers).toStrictEqual(['4123', '1234', '1234', '1234']);
    });
    it('유저가 MASTER 카드 번호인 16자리의 숫자를 모두 입력한 경우 에러가 발생하지 않고, VISA 카드로 포매팅된 번호를 반환한다.', () => {
      // given
      const cardNumbers = '5123123412341234';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
      expect(result.current.cardNumbers).toStrictEqual(['5123', '1234', '1234', '1234']);
    });

    it('유저가 DINERS 카드 번호인 14자리의 숫자를 모두 입력한 경우 에러가 발생하지 않고, DINERS 카드로 포매팅된 번호를 반환한다.', () => {
      // given
      const cardNumbers = '36121234121234';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
      expect(result.current.cardNumbers).toStrictEqual(['3612', '123412', '1234']);
    });

    it('유저가 AMEX 카드 번호인 15자리의 숫자를 모두 입력한 경우 에러가 발생하지 않고, AMEX 카드로 포매팅된 번호를 반환한다.', () => {
      // given
      const cardNumbers = '341212341212345';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
      expect(result.current.cardNumbers).toStrictEqual(['3412', '123412', '12345']);
    });

    it('유저가 UNION 카드 번호인 16자리의 숫자를 모두 입력한 경우 에러가 발생하지 않고, UNION 카드로 포매팅된 번호를 반환한다.', () => {
      // given
      const cardNumbers = '6221261212341234';

      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(cardNumbers);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
      expect(result.current.cardNumbers).toStrictEqual(['6221', '2612', '1234', '1234']);
    });
  });
});
