import {renderHook} from '@testing-library/react';
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from '../lib/constants/validation';
import useCvc from '../lib/hooks/useCvc';
import {act} from 'react';

describe('useCvc', () => {
  it('CVC번호가 올바른 경우 에러가 발생하지 않는다.', () => {
    // given
    const value = '123';

    // when
    const {result} = renderHook(() => useCvc());

    act(() => {
      result.current.onChange(value);
    });

    // then
    expect(result.current.cvcValidationResult).toEqual(defaultValidationValue);
  });

  it('CVC번호가 숫자가 아닌 경우 에러가 발생한다.', () => {
    // given
    const value = 'ㄱ';

    // when
    const {result} = renderHook(() => useCvc());

    act(() => {
      result.current.onChange(value);
    });

    // then
    expect(result.current.cvcValidationResult).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it('CVC번호의 자릿수가 3이 아닌 경우 에러가 발생한다.', () => {
    // given
    const MAX_LENGTH = 3;
    const value = '12';

    // when
    const {result} = renderHook(() => useCvc());

    act(() => {
      result.current.onChange(value);
    });

    // then
    expect(result.current.cvcValidationResult).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });
});
