import useInputValidate, { ValidateResult } from './useInputValidate';

import { act } from 'react';
import { renderHook } from '@testing-library/react';

describe('useInputValidate custom hook 테스트', () => {
  let validateOnChangeMock: jest.Mock<ValidateResult, [string]>;
  let validateOnBlurMock: jest.Mock<ValidateResult, []>;

  beforeEach(() => {
    validateOnChangeMock = jest.fn();
    validateOnBlurMock = jest.fn();
  });

  test('hook이 초기화될 때 주어진 initValue로 설정된다.', () => {
    const { result } = renderHook(() =>
      useInputValidate({
        initValue: '1234',
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    expect(result.current.value).toBe('1234');
    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('유효한 값이 입력될 때 onChangeHandler의 결과로 상태가 입력값으로 변경된다.', () => {
    validateOnChangeMock.mockReturnValue({ isValid: true, errorMessage: '' });

    const { result } = renderHook(() =>
      useInputValidate({
        initValue: '',
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onChangeHandler({ target: { value: '3' } } as any);
    });

    expect(result.current.value).toBe('3');
    expect(result.current.errorMessage).toBe('');
    expect(validateOnChangeMock).toHaveBeenCalledWith('3');
  });

  test('유효하지 않은 값이 입력될 때 상태가 변경되지 않고, errorMessage를 설정한다.', () => {
    validateOnChangeMock.mockReturnValue({
      isValid: false,
      errorMessage: '유효하지 않은 값이 입력됐어요',
    });

    const { result } = renderHook(() =>
      useInputValidate({
        initValue: '',
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onChangeHandler({ target: { value: 'a' } } as any);
    });

    expect(result.current.value).toBe('');
    expect(result.current.errorMessage).toBe('유효하지 않은 값이 입력됐어요');
    expect(validateOnChangeMock).toHaveBeenCalledWith('a');
  });

  test('errorMessage가 있을 때, input을 포커스한다면, errorMessage가 초기화된다.', () => {
    validateOnChangeMock.mockReturnValue({
      isValid: false,
      errorMessage: '유효하지 않은 값이 입력됐어요',
    });

    const { result } = renderHook(() =>
      useInputValidate({
        initValue: '',
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onChangeHandler({ target: { value: 'a' } } as any);
    });

    expect(result.current.errorMessage).toBe('유효하지 않은 값이 입력됐어요');

    act(() => {
      result.current.onFocusHandler();
    });

    expect(result.current.errorMessage).toBe('');
  });

  test('포커스 해제 시, 현재 상태가 유효한 값이라면 isCompleted 상태를 true로 변경한다.', () => {
    validateOnBlurMock.mockReturnValue({
      isValid: true,
      errorMessage: '',
    });

    const { result } = renderHook(() =>
      useInputValidate({
        initValue: '',
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onFocusHandler();
    });

    expect(result.current.errorMessage).toBe('');

    act(() => {
      result.current.onBlurHandler();
    });

    expect(result.current.isCompleted).toBe(true);
    expect(result.current.errorMessage).toBe('');
    expect(validateOnBlurMock).toHaveBeenCalled();
  });

  test('포커스 해제 시, 현재 상태가 유효하지 않은 값이라면 errorMessage를 설정한다.', () => {
    validateOnBlurMock.mockReturnValue({
      isValid: false,
      errorMessage: '유효하지 않은 값이 입력됐어요',
    });

    const { result } = renderHook(() =>
      useInputValidate({
        initValue: '',
        validateOnChange: validateOnChangeMock,
        validateOnBlur: validateOnBlurMock,
      }),
    );

    act(() => {
      result.current.onFocusHandler();
    });

    expect(result.current.errorMessage).toBe('');

    act(() => {
      result.current.onBlurHandler();
    });

    expect(result.current.isCompleted).toBe(false);
    expect(result.current.errorMessage).toBe('유효하지 않은 값이 입력됐어요');
    expect(validateOnBlurMock).toHaveBeenCalled();
  });
});
