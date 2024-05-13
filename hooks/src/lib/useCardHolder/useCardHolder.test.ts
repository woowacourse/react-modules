import { renderHook, act } from '@testing-library/react';
import useCardHolder from './useCardHolder';

import { DEFAULT_LENGTH, DEFAULT_PARAMS } from './useCardHolder';

describe('useCardHolder', () => {
  const initialValue = 'Seongjin Hong';

  it('초기값이 설정되면, cardHolder 상태에 해당 초기값이 저장되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder({ initialValue }));

    expect(result.current.cardHolder).toBe(initialValue);
  });

  it('영문자가 포함된 새로운 카드 소유자 이름이 handleUpdateCardHolder를 통해 들어오면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleUpdateCardHolder('Suya Choi');
    });

    expect(result.current.cardHolder).toBe('Suya Choi');
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('영문자 외에 숫자가 포함된 카드 소유자 이름이 들어오면, validationResult의 isValid가 false로 반환되며 소유자 이름 형식에 따른 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleUpdateCardHolder('Seongjin123');
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.cardHolder).toBe('Seongjin123');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputType,
    });
  });

  it('공백으로 시작되는 카드 소유자 이름이 들어오면, validationResult의 isValid가 false로 반환되며 소유자 이름 형식에 따른 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleUpdateCardHolder('  Seongjin');
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.cardHolder).toBe('  Seongjin');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputType,
    });
  });

  it(`카드 소유자 이름이 최소 길이(${DEFAULT_LENGTH.minLength}글자)를 만족하지 못하면, validationResult의 isValid가 false로 반환되며 소유자 이름 길이에 대한 에러 메시지가 포함되어야 한다.`, () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleUpdateCardHolder('Se');
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.cardHolder).toBe('Se');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(DEFAULT_LENGTH.defaultLength),
    });
  });

  it(`카드 소유자 이름이 최대 길이(${DEFAULT_LENGTH.maxLength}글자)를 초과하면, validationResult의 isValid가 false로 반환되며 소유자 이름 길이에 대한 에러 메시지가 포함되어야 한다.`, () => {
    const newLength = 30;
    const { result } = renderHook(() => useCardHolder({ allowedLength: newLength }));

    act(() => {
      result.current.handleUpdateCardHolder('Seongjin Hong is great');
    });

    expect(result.current.validationResult.isValid).toBe(true);

    act(() => {
      result.current.handleUpdateCardHolder('Seongjin Hong is the greatest person ever');
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.cardHolder).toBe('Seongjin Hong is the greatest person ever');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(newLength),
    });
  });

  it(`카드 소유자 이름의 최대 길이가 15자로 설정되면, 15자를 초과하는 이름에 대해서 validationResult의 isValid가 false로 반환되며 소유자 이름 길이에 대한 에러 메시지가 포함되어야 한다.`, () => {
    const newLength = 15;
    const { result } = renderHook(() => useCardHolder({ allowedLength: newLength }));

    act(() => {
      result.current.handleUpdateCardHolder('Seongjin Hong is');
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.cardHolder).toBe('Seongjin Hong is');
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: DEFAULT_PARAMS.errorMessages.inputLength(newLength),
    });
  });
});
