import useCardArrayValidate, { ValidateResult } from './useCardArrayValidate';

import { act } from 'react';
import { renderHook } from '@testing-library/react';

describe('useCardArrayValidate custom hook', () => {
  let validateOnChangeMock: jest.Mock<ValidateResult, [string, number]>;
  let validateOnBlurMock: jest.Mock<ValidateResult, []>;

  beforeEach(() => {
    validateOnChangeMock = jest.fn();
    validateOnBlurMock = jest.fn();
  });

  test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
    validateOnBlurMock.mockReturnValue({ isValid: false, errorMessage: '' });

    const { result } = renderHook(() =>
      useCardArrayValidate({
        initValue: ['12', ''],
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    expect(result.current.values).toEqual(['12', '']);
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('특정 index의 input에 유효한 입력값이 입력될 때, onChangeHandler의 결과로 해당 index의 상태가 입력값으로 변경된다.', () => {
    validateOnChangeMock.mockReturnValue({ isValid: true, errorMessage: '' });

    const { result } = renderHook(() =>
      useCardArrayValidate({
        initValue: ['', ''],
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onChangeHandler({ target: { value: '789' } } as any, 1);
    });

    expect(result.current.values).toEqual(['', '789']);
    expect(result.current.errorMessage).toBe('');
    expect(validateOnChangeMock).toHaveBeenCalledWith('789', 1);
  });

  test('특정 index의 input에 유효하지 않은 입력값이 입력될 때 상태가 변경되지 않고, errorMessage를 설정한다.', () => {
    validateOnChangeMock.mockReturnValue({
      isValid: false,
      errorMessage: '유효하지 않은 값이 입력됐어요',
    });

    const { result } = renderHook(() =>
      useCardArrayValidate({
        initValue: ['', ''],
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onChangeHandler({ target: { value: 'abc' } } as any, 1);
    });

    expect(result.current.values).toEqual(['', '']);
    expect(result.current.errorMessage).toBe('유효하지 않은 값이 입력됐어요');
    expect(validateOnChangeMock).toHaveBeenCalledWith('abc', 1);
  });

  test('모든 필드의 포커스가 해제될 때, 모든 index의 입력값이 유효한 경우 isCompleted를 true 로 설정한다.', () => {
    validateOnBlurMock.mockReturnValue({ isValid: true, errorMessage: '' });

    const { result } = renderHook(() =>
      useCardArrayValidate({
        initValue: ['123', '456'],
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onFocusHandler(0);
      result.current.onBlurHandler(0);
    });

    expect(validateOnBlurMock).toHaveBeenCalledTimes(1);
    expect(result.current.isCompleted).toBe(true);
  });

  test('모든 필드의 포커스가 해제될 때, 하나의 index라도 유효하지 않은 경우 errorMessage를 설정한다.', () => {
    validateOnBlurMock.mockReturnValue({
      isValid: false,
      errorMessage: '유효하지 않은 값이 입력됐어요',
    });

    const { result } = renderHook(() =>
      useCardArrayValidate({
        initValue: ['123', '12'],
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onFocusHandler(0);
      result.current.onBlurHandler(0);
      result.current.onBlurHandler(1);
    });

    expect(validateOnBlurMock).toHaveBeenCalledTimes(1);
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('유효하지 않은 값이 입력됐어요');
  });
});
