import { renderHook } from '@testing-library/react';
import React from 'react';
import useCardNumber from './useCardNumber';

describe('useCardNumber 테스트', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title: '카드 번호에 "한글"을 입력한 경우 "숫자만 입력 가능합니다."라는 메시지와 함께 에러가 발생한다.',
        inputDetails: [{ inputIndex: 0, typeMessage: '한글' }],
        expectedErrorDetail: {
          errorConditions: [true, false, false, false],
          errorMessage: '숫자만 입력 가능합니다.',
        },
      },
      {
        title:
          '첫 번째 입력창에 숫자 "1"만 입력한 경우 "카드 번호 4자리를 입력해주세요."라는 메시지와 함께 첫 번째 입력창에서 에러가 발생한다.',
        inputDetails: [{ inputIndex: 0, typeMessage: '1' }],
        expectedErrorDetail: {
          errorConditions: [true, false, false, false],
          errorMessage: '카드 번호 4자리를 입력해주세요.',
        },
      },
      {
        title:
          '두 번째 입력창에 숫자 "1"만 입력한 경우 "카드 번호 4자리를 입력해주세요."라는 메시지와 함께 두번째 입력창에서 에러가 발생한다.',
        inputDetails: [{ inputIndex: 1, typeMessage: '1' }],
        expectedErrorDetail: {
          errorConditions: [false, true, false, false],
          errorMessage: '카드 번호 4자리를 입력해주세요.',
        },
      },
      {
        title:
          '세 번째 입력창에 숫자 "1"만 입력한 경우 "카드 번호 4자리를 입력해주세요."라는 메시지와 함께 세번째 입력창에서 에러가 발생한다.',
        inputDetails: [{ inputIndex: 2, typeMessage: '1' }],
        expectedErrorDetail: {
          errorConditions: [false, false, true, false],
          errorMessage: '카드 번호 4자리를 입력해주세요.',
        },
      },
      {
        title:
          '마지막 입력창에 숫자 "1"만 입력한 경우 "카드 번호 4자리를 입력해주세요."라는 메시지와 함께 마지막 입력창에서 에러가 발생한다.',
        inputDetails: [{ inputIndex: 3, typeMessage: '1' }],
        expectedErrorDetail: {
          errorConditions: [false, false, false, true],
          errorMessage: '카드 번호 4자리를 입력해주세요.',
        },
      },
      {
        title:
          '한 입력 창에 4자리 모두 입력한 경우 "카드 번호는 16자리 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        inputDetails: [{ inputIndex: 0, typeMessage: '1234' }],
        expectedErrorDetail: {
          errorConditions: [false, true, true, true],
          errorMessage: '카드 번호는 16자리 숫자여야 합니다.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, inputDetails }) => {
      // when
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        inputDetails.forEach(({ typeMessage, inputIndex }) => {
          result.current.handleChangeCardNumber(inputIndex, typeMessage);
        });
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual(expectedErrorDetail);
    });

    it('유저가 16자리를 다 입력한 후 2번째 입력 창의 값을 하나 지웠을 때 "카드 번호 4자리를 입력해주세요."라는 메시지와 함께 에러가 발생한다.', () => {
      // given
      const cardNumbers = ['1234', '5678', '9012', '3456'];

      // when
      const { result } = renderHook(() => useCardNumber());

      cardNumbers.forEach((num, index) => {
        React.act(() => {
          result.current.handleChangeCardNumber(index, num);
        });
      });

      React.act(() => {
        result.current.handleChangeCardNumber(1, '567');
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        errorConditions: [false, true, false, false],
        errorMessage: '카드 번호 4자리를 입력해주세요.',
      });
    });

    it('유저가 16자리를 다 입력한 후 모두 지웠을 때 "카드 번호 4자리를 입력해주세요."라는 메시지와 함께 에러와 함께 발생한다.', () => {
      // given
      const cardNumbers = ['1234', '5678', '9012', '3456'];

      // when
      const { result } = renderHook(() => useCardNumber());

      cardNumbers.forEach((num, index) => {
        React.act(() => {
          result.current.handleChangeCardNumber(index, num);
        });
      });

      [
        { inputIndex: 3, typeMessage: '' },
        { inputIndex: 2, typeMessage: '' },
        { inputIndex: 1, typeMessage: '' },
        { inputIndex: 0, typeMessage: '' },
      ].forEach(({ inputIndex, typeMessage }) => {
        React.act(() => {
          result.current.handleChangeCardNumber(inputIndex, typeMessage);
        });
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        errorConditions: [true, false, false, false],
        errorMessage: '카드 번호 4자리를 입력해주세요.',
      });
    });
  });

  describe('success case', () => {
    it('유저가 16자리의 숫자를 모두 입력한 경우 에러가 발생하지 않는다.', () => {
      // given
      const cardNumbers = ['1234', '5678', '9012', '3456'];

      // when
      const { result } = renderHook(() => useCardNumber());

      cardNumbers.forEach((num, index) => {
        React.act(() => {
          result.current.handleChangeCardNumber(index, num);
        });
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        errorConditions: [false, false, false, false],
        errorMessage: '',
      });
    });

    it('유저가 한 입력창에 4자리 이상 입력하는 경우 4자리만 입력한다.', () => {
      // given
      const cardNumbers = ['1234', '5678', '9012', '3456'];

      // when
      const { result } = renderHook(() => useCardNumber());

      cardNumbers.forEach((num, index) => {
        React.act(() => {
          result.current.handleChangeCardNumber(index, num);
        });
      });

      // then
      expect(result.current.cardNumberError).toStrictEqual({
        errorConditions: [false, false, false, false],
        errorMessage: '',
      });
    });
  });
});
