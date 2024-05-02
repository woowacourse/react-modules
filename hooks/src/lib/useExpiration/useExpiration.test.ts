import { renderHook } from '@testing-library/react';
import React from 'react';
import useExpiration from './useExpiration';

describe('유효 기간 입력 테스트', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title: '한글("ㅋ")을 입력한 경우 "월은 01에서 12 사이의 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        expirationDetails: { field: 'month', typeMessage: 'ㅋ' } as const,
        expectedErrorDetail: {
          isError: true,
          errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.',
        },
      },
      {
        title: '"0"을 입력한 경우 "월은 01에서 12 사이의 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        expirationDetails: { field: 'month', typeMessage: '0' } as const,
        expectedErrorDetail: {
          isError: true,
          errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.',
        },
      },
      {
        title: '13을 입력한 경우 "월은 01에서 12 사이의 숫자여야 합니다."라는 메시지와 함께 에러가 발생한다.',
        expirationDetails: { field: 'month', typeMessage: '13' } as const,
        expectedErrorDetail: {
          isError: true,
          errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.',
        },
      },
      {
        title: '01을 입력한 경우 "카드 유효기간이 올바르지 않습니다."라는 메시지와 함께 에러가 발생한다.',
        expirationDetails: { field: 'month', typeMessage: '01' } as const,
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 유효기간이 올바르지 않습니다.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, expirationDetails: { field, typeMessage } }) => {
      // when
      const { result } = renderHook(() => useExpiration());

      React.act(() => {
        result.current.handleChangeExpiration(field, typeMessage);
      });

      // then
      expect(result.current.expirationError).toStrictEqual(expectedErrorDetail);
    });

    it('month를 "01"로 year를 "00"으로 입력했을 때 "카드 유효기간이 올바르지 않습니다."라는 메시지와 함께 에러가 발생한다.', () => {
      // when
      const { result } = renderHook(() => useExpiration());

      React.act(() => {
        result.current.handleChangeExpiration('month', '01');
      });

      React.act(() => {
        result.current.handleChangeExpiration('year', '00');
      });

      // then
      expect(result.current.expirationError).toStrictEqual({
        isError: true,
        errorMessage: '카드 유효기간이 올바르지 않습니다.',
      });
    });
  });

  describe('success case', () => {
    it('month를 "01"로 year를 "25"으로 입력했을 때 에러가 발생하지 않는다.', () => {
      // when
      const { result } = renderHook(() => useExpiration());

      React.act(() => {
        result.current.handleChangeExpiration('month', '01');
      });

      React.act(() => {
        result.current.handleChangeExpiration('year', '25');
      });

      // then
      expect(result.current.expirationError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
    });
  });
});
