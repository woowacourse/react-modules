import {renderHook} from '@testing-library/react';
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from '../lib/constants/validation';
import useCardNumber from '../lib/hooks/useCardNumber';
import {act} from 'react';

const defaultCardNumberValidationValue = {
  first: defaultValidationValue,
  second: defaultValidationValue,
  third: defaultValidationValue,
  fourth: defaultValidationValue,
};

describe('useCardNumberValidation', () => {
  it('카드 번호가 올바른 경우 에러가 발생하지 않는다.', () => {
    // when
    const {result} = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange('first', '1111');
    });

    // then
    expect(result.current.cardNumberValidationResult).toEqual(
      defaultCardNumberValidationValue
    );
  });

  it('카드 번호가 숫자가 아닌 경우 에러가 발생한다.', () => {
    // when
    const {result} = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange('first', 'ㄱ');
    });

    // then
    expect(result.current.cardNumberValidationResult).toEqual({
      ...defaultCardNumberValidationValue,
      first: {isError: true, errorMessage: ERROR_MESSAGE.INVALID_NUMBER},
    });
  });

  it('카드 번호의 각 섹션의 자릿수가 4가 아닌 경우 에러가 발생한다.', () => {
    // given
    const MAX_LENGTH = 4;

    // when
    const {result} = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange('first', '123');
    });

    // then
    expect(result.current.cardNumberValidationResult).toEqual({
      ...defaultCardNumberValidationValue,
      first: {
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      },
    });
  });

  it('여러 에러가 발생하는 경우 각 섹션마다 에러가 발생한다.', () => {
    // given
    const MAX_LENGTH = 4;

    // when
    const {result} = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange('first', '123');
      result.current.onChange('second', 'ㄱㄱ');
    });

    // then
    expect(result.current.cardNumberValidationResult).toEqual({
      ...defaultCardNumberValidationValue,
      first: {
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      },
      second: {
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      },
    });
  });
});
