import {renderHook} from '@testing-library/react';
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from '../lib/constants/validation';
import usePassword from '../lib/hooks/usePassword';
import {act} from 'react';

describe('usePasswordValidation', () => {
  it('비밀번호가 올바른 경우 에러가 발생하지 않는다.', () => {
    // given
    const value = '12';

    // when
    const {result} = renderHook(() => usePassword());

    act(() => {
      result.current.onChange(value);
    });

    // then
    expect(result.current.passwordValidationResult).toEqual(
      defaultValidationValue
    );
  });

  it('비밀번호가 숫자가 아닌 경우 에러가 발생한다.', () => {
    // given
    const value = 'ㄱ';

    // when
    const {result} = renderHook(() => usePassword());

    act(() => {
      result.current.onChange(value);
    });

    // then
    expect(result.current.passwordValidationResult).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it('비밀번호의 자릿수가 2가 아닌 경우 에러가 발생한다.', () => {
    // given
    const MAX_LENGTH = 2;
    const value = '1';

    // when
    const {result} = renderHook(() => usePassword());

    act(() => {
      result.current.onChange(value);
    });

    // then
    expect(result.current.passwordValidationResult).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });
});
