import { renderHook, act } from '@testing-library/react';
import useInputError from './useInputError';
import { NO_ERROR } from './constants';

describe('useError', () => {
  const initError = {
    name: NO_ERROR,
    email: NO_ERROR,
  };

  const getValidationFns = (length: number, value: string) => [
    {
      condition: () => length === 0,
      errorMsg: 'FIELD_REQUIRED',
    },
    {
      condition: () => value.includes('invalid'),
      errorMsg: 'INVALID_VALUE',
    },
  ];

  test('에러 상태를 초기화한다.', () => {
    const { result } = renderHook(() =>
      useInputError({
        initError,
        getValidationFns,
      })
    );

    expect(result.current.error).toEqual(initError);
    expect(result.current.isError()).toBe(false);
    expect(result.current.getErrorMessage()).toBeUndefined();
  });

  test('유효성 검사에 실패했을 때 에러 상태를 설정해야한다.', () => {
    const { result } = renderHook(() =>
      useInputError({
        initError,
        getValidationFns,
      })
    );

    act(() => {
      result.current.checkValidation({
        length: 0,
        value: '',
        type: 'name',
      });
    });

    expect(result.current.error.name).toBe('FIELD_REQUIRED');
    expect(result.current.isError()).toBe(true);
    expect(result.current.getErrorMessage()).toBe('FIELD_REQUIRED');
  });

  test('에러를 리셋해야한다.', () => {
    const { result } = renderHook(() =>
      useInputError({
        initError,
        getValidationFns,
      })
    );

    act(() => {
      result.current.checkValidation({
        length: 0,
        value: '',
        type: 'name',
      });
    });

    expect(result.current.isError()).toBe(true);

    act(() => {
      result.current.resetErrors();
    });

    expect(result.current.error).toEqual(initError);
    expect(result.current.isError()).toBe(false);
  });
});
