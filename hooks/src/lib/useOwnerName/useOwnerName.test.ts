import { renderHook } from '@testing-library/react';
import useOwnerName from './useOwnerName';
import React from 'react';

describe('Owner Name 입력 테스트', () => {
  describe('error case', () => {
    // given
    const errorCases = [
      {
        title:
          '사용자가 입력한 소유자 이름이 영문자가 아닌 다른 문자로 입력한 경우 "카드 소유자 이름은 영문으로 입력해야 합니다."라는 에러 메시지와 함께 에러가 발생해야 한다.',
        input: '123',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 소유자 이름은 영문으로 입력해야 합니다.',
        },
      },
      {
        title:
          '공백만 입력한 경우 "카드 소유자 이름은 영문으로 입력해야 합니다."라는 에러 메시지와 함께 에러가 발생해야한다.',
        input: ' ',
        expectedErrorDetail: {
          isError: true,
          errorMessage: '카드 소유자 이름은 영문으로 입력해야 합니다.',
        },
      },
    ];
    it.each(errorCases)('$title', ({ expectedErrorDetail, input }) => {
      // when
      const { result } = renderHook(() => useOwnerName());

      React.act(() => {
        result.current.handleChangeOwnerName(input);
      });

      // then
      expect(result.current.ownerNameError).toStrictEqual(expectedErrorDetail);
    });

    it('중간 공백이 2번 이상 들어간 경우 "카드 소유자 이름은 영문으로 입력해야 합니다."라는 에러 메시지와 함께 에러가 발생해야한다.', () => {
      // given
      const input = 'SON JIN';
      const expectedErrorDetail = {
        isError: true,
        errorMessage: '카드 소유자 이름은 영문으로 입력해야 합니다.',
      };

      // when
      const { result } = renderHook(() => useOwnerName());

      React.act(() => {
        result.current.handleChangeOwnerName(input);
        result.current.handleChangeOwnerName(`${input} YOUNG`);
      });

      // then
      expect(result.current.ownerNameError).toStrictEqual(expectedErrorDetail);
    });
  });

  describe('success case', () => {
    it('Owner Name이 20자 이하일 경우 에러가 발생하지 않는다.', () => {
      // given
      const ownerName = 'MASTER WE';

      // when
      const { result } = renderHook(() => useOwnerName());

      React.act(() => {
        result.current.handleChangeOwnerName(ownerName);
      });

      expect(result.current.ownerName).toMatch(ownerName);
    });

    it('Owner Name이 20자 이하의 영소문자인 경우 대문자로 바꾸고 에러가 발생하지 않는다.', () => {
      // given
      const ownerName = 'jiny son';
      const upperCaseOwnerName = 'JINY SON';

      // when
      const { result } = renderHook(() => useOwnerName());

      React.act(() => {
        result.current.handleChangeOwnerName(ownerName);
      });

      expect(result.current.ownerName).toMatch(upperCaseOwnerName);
    });

    it('Owner Name이 20자를 초과한 경우 20자만 입력되고 에러가 발생하지 않는다.', () => {
      // given
      const previous = 'JINYISSMARTSUPERZZAN';
      const ownerName = 'JinyIsSmartSuperZZanG';
      const cutOwnerName = 'JINYISSMARTSUPERZZAN';

      // when
      const { result } = renderHook(() => useOwnerName());

      React.act(() => {
        result.current.handleChangeOwnerName(previous);
        result.current.handleChangeOwnerName(ownerName);
      });

      expect(result.current.ownerName).toMatch(cutOwnerName);
    });

    it('Owner Name에 공백이 중간 한번만 들어간 경우 에러가 발생하지 않는다.', () => {
      // given
      const ownerName = 'JINY SON';

      // when
      const { result } = renderHook(() => useOwnerName());

      React.act(() => {
        result.current.handleChangeOwnerName(ownerName);
      });

      expect(result.current.ownerName).toMatch(ownerName);
    });
  });
});
