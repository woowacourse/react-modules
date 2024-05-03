import { renderHook } from '@testing-library/react';
import React, { ChangeEvent, FocusEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import usePassword from '../usePassword';
import { PasswordErrorMessages } from '../../constants/error';

describe('usePassword 훅 테스트', () => {
  it('훅을 선언할 때 초기값과 result.current.value는 같다.', () => {
    const initialValue = '12';
    const { result } = renderHook(() => usePassword(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('훅이 입력값으로 업데이트될 시 초기값 ``에서 `12`으로 업데이트된다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => usePassword(initialValue));
    const invalidValue = '12';
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(invalidValue);
  });

  it(`숫자가 아닌 값이 들어오면 에러(${
    PasswordErrorMessages[ErrorStatus.IS_NOT_NUMBER]
  })를 낸다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() => usePassword(initialValue));
    const invalidValue = 'ab';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });
    const expectedErrorMessage =
      PasswordErrorMessages[ErrorStatus.IS_NOT_NUMBER];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it(`길이가 2글자 초과면 에러(${
    PasswordErrorMessages[ErrorStatus.INVALID_LENGTH]
  })를 낸다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() => usePassword(initialValue));
    const invalidValue = '123';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      PasswordErrorMessages[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it(`길이가 2글자 미만(Blur)이면 에러(${
    PasswordErrorMessages[ErrorStatus.INVALID_LENGTH]
  })를 낸다.`, () => {
    const initialValue = '';
    const { result } = renderHook(() => usePassword(initialValue));
    const invalidValue = '1';

    React.act(() => {
      result.current.onBlur({
        target: { value: invalidValue },
      } as FocusEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      PasswordErrorMessages[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
