import { renderHook } from '@testing-library/react';
import React, { ChangeEvent, FocusEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import { CARD_NUMBERS_ERROR_MESSAGES } from '../../constants/error';
import useCardNumbers from '../useCardNumbers';

describe.only('useCard 훅 테스트', () => {
  it('훅을 선언할 때 초기값이 `123`일 시 result.current.value는 `123`이 된다', () => {
    const initialValue = '1234567890';
    const { result } = renderHook(() => useCardNumbers(initialValue));
    expect(result.current.value).toEqual(initialValue);
  });

  it('훅이 입력값으로 업데이트될 시 초기값 `123`에서 `456`으로 업데이트된다.', () => {
    const initialValue = '1234567890';
    const { result } = renderHook(() => useCardNumbers(initialValue));
    const changeValue = '0987654321';

    React.act(() => {
      result.current.onChange({
        target: { value: changeValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toEqual(changeValue);
  });

  it(`숫자가 아닌 값(ㄱㄴㄷ)이 들어오면 '${
    CARD_NUMBERS_ERROR_MESSAGES[ErrorStatus.IS_NOT_NUMBER]
  }'를 출력.`, () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCardNumbers(initialValue));
    const invalidValue = 'ㄱㄴㄷ';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      CARD_NUMBERS_ERROR_MESSAGES[ErrorStatus.IS_NOT_NUMBER];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it.only(`카드 브랜드 종류 변경으로 조건 달라짐 확인`, () => {
    const initialValue = '1234123412341234';
    const { result } = renderHook(() => useCardNumbers(initialValue));

    // 브랜드 변경으로 인한 조건 변경 (16자리)
    const invalidValue = '3634123412341234';
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as FocusEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      CARD_NUMBERS_ERROR_MESSAGES[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
36341234123412;
