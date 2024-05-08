import { renderHook } from '@testing-library/react';
import React from 'react';
import useCardNumber from './useCardNumber';

describe('useCardNumber 테스트', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title: '"한글"을 입력한 경우 "숫자만 입력 가능합니다."라는 메시지와 함께 에러가 발생한다.',
        input: '한글',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '숫자만 입력 가능합니다.',
        },
      },
      {
        title: '숫자 "1"만 입력한 경우 "카드 번호 16자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        input: '1',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호는 16자리 숫자여야 합니다.',
        },
      },
      {
        title: '숫자 "36"만 입력한 경우 "카드 번호 14자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        input: '36',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호는 14자리 숫자여야 합니다.',
        },
      },
      {
        title: '숫자 "34"만 입력한 경우 "카드 번호 15자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        input: '34',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호는 15자리 숫자여야 합니다.',
        },
      },
      {
        title: '숫자 "37"만 입력한 경우 "카드 번호 15자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        input: '37',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호는 15자리 숫자여야 합니다.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, input }) => {
      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(input);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual(expectedErrorDetail);
    });

    // given
    const complexErrorCases = [
      {
        title:
          '"36454545454545"를 입력 후 "5"를 제거하면 diners 카드 규칙으로 인해 "카드 번호 14자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        firstInput: '36454545454545',
        secondInput: '3645454545454',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호는 14자리 숫자여야 합니다.',
        },
      },
      {
        title:
          '숫자 "34454545454545"를 입력 후 "5"를 제거하면 amex 카드 규칙으로 인해 "카드 번호 15자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        firstInput: '34454545454545',
        secondInput: '3445454545454',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 번호는 15자리 숫자여야 합니다.',
        },
      },
    ];
    it.each(complexErrorCases)('$title', ({ expectedErrorDetail, firstInput, secondInput }) => {
      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(firstInput);
        result.current.handleChangeCardNumber(secondInput);
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual(expectedErrorDetail);
    });
  });

  describe('formatting case', () => {
    // given
    const formattingCases = [
      {
        title: '숫자 "36454545454545"를 입력했을 때 diners 카드 규칙이 적용되어 "3645 454545 4545"로 포맷팅 된다.',
        input: '36454545454545',
        expected: '3645 454545 4545',
      },
      {
        title: '숫자 "341231234121234"를 입력했을 때 amex 카드 규칙이 적용되어 "3412 312341 21234"로 포맷팅 된다.',
        input: '341231234121234',
        expected: '3412 312341 21234',
      },
      {
        title: '숫자 "371231234121234"를 입력했을 때 amex 카드 규칙이 적용되어 "3712 312341 21234"로 포맷팅 된다.',
        input: '371231234121234',
        expected: '3712 312341 21234',
      },
      {
        title:
          '숫자 "1412312341212345"를 입력했을 때 일반적인 카드 규칙이 적용되어 "1412 3123 4121 2345"로 포맷팅 된다.',
        input: '1412312341212345',
        expected: '1412 3123 4121 2345',
      },
    ];
    it.each(formattingCases)('$title', ({ expected, input }) => {
      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(input);
      });

      // then
      expect(result.current.cardNumbers.join(' ')).toMatch(expected);
    });
  });

  describe('blocking input test', () => {
    // given
    const blockingInputTestCases = [
      {
        title:
          '"36454545454545"를 입력 후 "5"를 입력하면 카드 번호가 14자리가 아닌 15자리가 되므로 입력되지 않아야 한다.',
        firstInput: '36454545454545',
        secondInput: '364545454545455',
        expected: ['3645', '454545', '4545'],
      },
      {
        title:
          '"344545454545455"를 입력 후 "5"를 입력하면 카드 번호가 15자리가 아닌 16자리가 되므로 입력되지 않아야 한다.',
        firstInput: '344545454545455',
        secondInput: '3445454545454555',
        expected: ['3445', '454545', '45455'],
      },
      {
        title:
          '"1234567891234567"를 입력 후 "8"를 입력하면 카드 번호가 16자리가 아닌 17자리가 되므로 입력되지 않아야 한다.',
        firstInput: '1234567891234567',
        secondInput: '12345678912345678',
        expected: ['1234', '5678', '9123', '4567'],
      },
    ];
    it.each(blockingInputTestCases)('$title', ({ firstInput, secondInput, expected }) => {
      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleChangeCardNumber(firstInput);
        result.current.handleChangeCardNumber(secondInput);
      });

      // then
      expect(result.current.cardNumbers).toStrictEqual(expected);
    });
  });
});
