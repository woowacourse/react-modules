import { renderHook } from '@testing-library/react';
import useCVC from '../useCVC';
import React, { ChangeEvent, FocusEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import { CVC_ERROR_MESSAGES } from '../../constants/error';

describe('useCVC 훅 테스트', () => {
  it('훅을 선언할 때 초기값이 `123`일 시 result.current.value는 `123`이 된다', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    expect(result.current.value).toEqual(initialValue);
  });

  it('훅이 입력값으로 업데이트될 시 초기값 `123`에서 `456`으로 업데이트된다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const changeValue = '456';

    React.act(() => {
      result.current.onChange({
        target: { value: changeValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toEqual(changeValue);
  });

  it(`숫자가 아닌 값(ㄱㄴㄷ)이 들어오면 '${
    CVC_ERROR_MESSAGES[ErrorStatus.IS_NOT_NUMBER]
  }'를 출력.`, () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const invalidValue = 'ㄱㄴㄷ';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVC_ERROR_MESSAGES[ErrorStatus.IS_NOT_NUMBER];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it(`길이가 3글자 초과시 에러(${
    CVC_ERROR_MESSAGES[ErrorStatus.INVALID_LENGTH]
  })를 낸다.`, () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const invalidValue = '1234';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVC_ERROR_MESSAGES[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it(`길이가 3글자 미만시(Blur) 에러(${
    CVC_ERROR_MESSAGES[ErrorStatus.INVALID_LENGTH]
  })를 낸다.`, () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const invalidValue = '12';

    React.act(() => {
      result.current.onBlur({
        target: { value: invalidValue },
      } as FocusEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVC_ERROR_MESSAGES[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
