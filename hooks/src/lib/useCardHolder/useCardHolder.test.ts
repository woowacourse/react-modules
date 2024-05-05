import { renderHook, act } from '@testing-library/react';
import useCardHolder from './useCardHolder';

import { DEFAULT_PARAMS } from './useCardHolder';

describe('useCardHolder', () => {
  const initialValue = 'Seongjin Hong';

  it('초기값이 설정되면, cardHolder 상태에 해당 초기값이 저장되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.cardHolder).toBe(initialValue);
  });

  it('영문자가 포함된 새로운 카드 소유자 이름이 handleUpdateCardHolder를 통해 들어오면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleUpdateCardHolder('Suya Choi');
    });

    expect(result.current.cardHolder).toBe('Suya Choi');
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('영문자 외에 숫자가 포함된 카드 소유자 이름이 들어오면, validationResult의 isValid가 false로 반환되며 소유자 이름 형식에 따른 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

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
    const { result } = renderHook(() => useCardHolder(initialValue));

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
});
