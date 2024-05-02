import { renderHook } from '@testing-library/react';
import useCardPassword from './useCardPassword';
import React from 'react';

describe('카드 비밀번호 입력 기능', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title: '카드 비밀번호에 한글("ㅋ")을 입력한 경우 "숫자만 입력 가능합니다."라는 메시지와 함께 에러가 발생한다.',
        input: 'ㅋ',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '숫자만 입력 가능합니다.',
        },
      },
      {
        title:
          '카드 비밀번호를 1자리만 입력한 경우("1") "카드 비밀번호 2자리를 입력해주세요."라는 메시지와 함께 에러가 발생한다.',
        input: '1',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 비밀번호 2자리를 입력해주세요.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, input }) => {
      // when
      const { result } = renderHook(() => useCardPassword());

      React.act(() => {
        result.current.handleChangeCardPassword(input);
      });

      // then
      expect(result.current.cardPasswordError).toStrictEqual(expectedErrorDetail);
    });

    it('카드 비밀번호를 2자리 입력한 후("12") 한자리를 지웠을 경우("2") "카드 비밀번호 2자리를 입력해주세요."라는 메시지와 함께 에러가 발생한다.', () => {
      // given
      const input = '12';
      const expectedErrorDetail = { isError: true, errorMessage: '카드 비밀번호 2자리를 입력해주세요.' };

      // when
      const { result } = renderHook(() => useCardPassword());

      React.act(() => {
        result.current.handleChangeCardPassword(input);
        result.current.handleChangeCardPassword('1');
      });

      // then
      expect(result.current.cardPasswordError).toStrictEqual(expectedErrorDetail);
    });
  });

  describe('success case', () => {
    it('cardPassword가 2자리일 경우 에러가 발생하지 않는다.', () => {
      // given
      const cardPassword = '12';

      // when
      const { result } = renderHook(() => useCardPassword());

      React.act(() => {
        result.current.handleChangeCardPassword(cardPassword);
      });

      // then
      expect(result.current.cardPasswordError).toStrictEqual({
        isError: false,
        errorMessage: '',
      });
    });

    it('cardPassword를 2자리 이상 입력했을 때, 입력 되지 않는다.', () => {
      // given
      const cardPassword = '12';

      // when
      const { result } = renderHook(() => useCardPassword());

      React.act(() => {
        result.current.handleChangeCardPassword(cardPassword);
        result.current.handleChangeCardPassword('123');
      });

      // then
      expect(result.current.cardPassword).toMatch('12');
    });
  });
});
