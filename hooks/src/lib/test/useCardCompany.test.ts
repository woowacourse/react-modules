import { renderHook } from '@testing-library/react';
import React from 'react';
import useCardCompany from '../useCardCompany';
import { CardCompanyErrorMessage } from '../../constants/error';
import { ErrorStatus } from '../../types/errorStatus';

export const EXAMPLE_CARD_BRANDS = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
];

describe('useCardCompany 훅 테스트', () => {
  it('훅을 선언할 때 초기값이 ``일 시 result.current.value는 ``이 된다', () => {
    const initialValue = '';
    const { result } = renderHook(() =>
      useCardCompany({ initialValue, optionArray: EXAMPLE_CARD_BRANDS })
    );

    expect(result.current.value).toBe(initialValue);
  });

  it(`훅이 입력값으로 업데이트될 시 초기값 ''에서 '${EXAMPLE_CARD_BRANDS[0]}'으로 업데이트된다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() =>
      useCardCompany({ initialValue, optionArray: EXAMPLE_CARD_BRANDS })
    );

    const validValue = EXAMPLE_CARD_BRANDS[0];
    React.act(() => {
      result.current.onSelect(validValue);
    });

    expect(result.current.value).toBe(validValue);
  });

  it(`유효하지 않은 옵션 선택시 에러(${
    CardCompanyErrorMessage[ErrorStatus.INVALID_OPTION]
  })를 낸다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() =>
      useCardCompany({ initialValue, optionArray: EXAMPLE_CARD_BRANDS })
    );

    const invalidValue = '헤일리 은행';
    React.act(() => {
      result.current.onSelect(invalidValue);
    });

    const expectedErrorMessage =
      CardCompanyErrorMessage[ErrorStatus.INVALID_OPTION];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
