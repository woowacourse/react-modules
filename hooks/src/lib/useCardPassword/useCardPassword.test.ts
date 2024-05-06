import { renderHook, act } from '@testing-library/react';
import useCardPassword from './useCardPassword';

import { DEFAULT_LENGTH, DEFAULT_PARAMS } from './useCardPassword';

describe('useCardPassword 테스트', () => {
  it('2자리 숫자의 초기값이 설정되면, password 상태에 해당 초기값이 저장되어야 한다.', () => {
    const allowedLength = 2;
    const initialValue = '12';
    const { result } = renderHook(() => useCardPassword(allowedLength, initialValue));

    expect(result.current.password).toBe(initialValue);
    expect(result.current.validationResult.isValid).toBe(true);
  });

  it('2자리 숫자의 새로운 입력값이 handleUpdatePassword로 들어오면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const newValue = '34';
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleUpdatePassword(newValue);
    });

    expect({
      password: result.current.password,
      isValid: result.current.validationResult.isValid,
    }).toEqual({ password: newValue, isValid: true });
  });

  it('3자리 숫자의 새로운 입력값이 handleUpdatePassword로 들어오면, validationResult의 isValid가 false로 반환되고 입력 길이 오류에 따른 에러 메시지가 함께 포함되어야 한다.', () => {
    const newValue = '345';
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleUpdatePassword(newValue);
    });

    expect({
      password: result.current.password,
      isValid: result.current.validationResult.isValid,
      errorMessage: result.current.validationResult.errorMessage,
    }).toEqual({
      password: newValue,
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(DEFAULT_LENGTH.minLength),
    });
  });

  it('문자가 포함된 새로운 입력값이 handleUpdatePassword로 들어오면, validationResult의 isValid가 false로 반환되고 입력 형식 오류에 따른 에러 메시지가 함께 포함되어야 한다.', () => {
    const newValue = '2a';
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleUpdatePassword(newValue);
    });

    expect({
      password: result.current.password,
      isValid: result.current.validationResult.isValid,
      errorMessage: result.current.validationResult.errorMessage,
    }).toEqual({
      password: newValue,
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputType,
    });
  });

  it('비밀번호의 길이가 4로 설정된 상태에서 2자리 숫자의 입력값이 handleUpdatePassword로 들어오면, validationResult의 isValid가 false로 반환되고 입력 길이 오류에 따른 에러 메시지가 함께 포함되어야 한다.', () => {
    const newLength = 4;
    const newValue = '12';
    const { result } = renderHook(() => useCardPassword(newLength));

    act(() => {
      result.current.handleUpdatePassword(newValue);
    });

    expect({
      password: result.current.password,
      isValid: result.current.validationResult.isValid,
      errorMessage: result.current.validationResult.errorMessage,
    }).toEqual({
      password: newValue,
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(newLength),
    });
  });
});
