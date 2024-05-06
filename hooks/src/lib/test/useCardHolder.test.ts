import { renderHook } from '@testing-library/react';
import React, { ChangeEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import useCardHolder from '../useCardHolder';
import { CARD_HOLDER_ERROR_MESSAGES } from '../../constants/error';

describe('useCardHolder 훅 테스트', () => {
  it('훅을 선언할 때 초기값이 `HAILEY RIAN`일 시 result.current.value는 `HAILEY RIAN`이 된다', () => {
    const initialValue = 'HAILEY RIAN';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('훅이 입력값으로 업데이트될 시 초기값 ``에서 `HAILEY RIAN`으로 업데이트된다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardHolder(initialValue));
    const invalidValue = 'HAILEY RIAN';
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(invalidValue);
  });

  it(`영어 대문자가 아니면 에러(${
    CARD_HOLDER_ERROR_MESSAGES[ErrorStatus.ONLY_UPPERCASE]
  })를 낸다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardHolder(initialValue));
    const invalidValue = 'hailey rian';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      CARD_HOLDER_ERROR_MESSAGES[ErrorStatus.ONLY_UPPERCASE];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it(`빈칸이 두 개이면 에러(${
    CARD_HOLDER_ERROR_MESSAGES[ErrorStatus.IS_DOUBLE_BLANK]
  })를 낸다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardHolder(initialValue));
    const invalidValue = 'HAILEY  RIAN';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      CARD_HOLDER_ERROR_MESSAGES[ErrorStatus.IS_DOUBLE_BLANK];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
