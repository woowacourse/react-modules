import useCVCNumber from './useCVCNumber';

import React from 'react';

import { renderHook } from '@testing-library/react';

describe('cvc 번호 입력 테스트', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title:
          'cvc 번호에 숫자가 아닌 다른 값을("ㅋ") 입력한 경우 "숫자만 입력 가능합니다."라는 메시지와 함께 에러가 발생한다.',
        input: 'ㅋ',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '숫자만 입력 가능합니다.',
        },
      },
      {
        title:
          'cvc 번호를 3자리 이하로 입력한 경우("0") "cvc 번호 3자리를 입력해주세요."라는 메시지와 함께 에러가 발생한다.',
        input: '0',
        expectedErrorDetail: {
          isError: true,
          errorMessage: 'cvc 번호 3자리를 입력해주세요.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, input }) => {
      // when
      const { result } = renderHook(() => useCVCNumber());

      React.act(() => {
        result.current.handleChangeCVCNumber(input);
      });

      // then
      expect(result.current.cvcError).toStrictEqual(expectedErrorDetail);
    });
  });

  describe('success case', () => {
    it('cvc 번호가 3자리일 경우 에러가 발생하지 않는다.', () => {
      // given
      const cvcNumber = '123';

      // when
      const { result } = renderHook(() => useCVCNumber());

      React.act(() => {
        result.current.handleChangeCVCNumber(cvcNumber);
      });

      // then
      expect(result.current.cvcError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
    });

    it('cvc 번호를 4자리를 입력 했을 때 3자리만 입력된다.', () => {
      // given
      const cvcNumber = '123';

      // when
      const { result } = renderHook(() => useCVCNumber());

      React.act(() => {
        result.current.handleChangeCVCNumber(cvcNumber);
      });

      React.act(() => {
        result.current.handleChangeCVCNumber('1234');
      });

      // then
      expect(result.current.cvcNumber).toStrictEqual('123');
    });
  });
});
