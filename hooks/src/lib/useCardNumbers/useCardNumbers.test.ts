import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';

import type { CardNumbersType } from '../types/CardNumberTypes';

describe('useCardNumbers', () => {
  const initialValues: CardNumbersType = ['1234', '5678', '9012', '3456'];

  it('초기값이 설정되면, cardNumbers 상태에 해당 초기값이 저장되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    expect(result.current.cardNumbers).toEqual(initialValues);
  });

  it('validStates 상태는 cardNumbers 배열이 가진 각 번호에 대한 검증 결과를 포함하고 있어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    expect(result.current.validStates).toEqual([true, true, true, true]);
  });

  it('validStates의 모든 원소값이 true라면, validationState의 isValid는 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    expect(result.current.validStates).toEqual([true, true, true, true]);
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('validStates의 모든 원소값이 true가 아니라면, validationState의 isValid는 false로 반환되며 카드번호 양식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const wrongInitialValues: CardNumbersType = ['1234', '5678', '90ab', '3456'];
    const { result } = renderHook(() => useCardNumbers(wrongInitialValues));

    expect(result.current.validStates).toEqual([true, true, false, true]);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '카드 번호는 4자리의 숫자여야 합니다. 확인 후 다시 입력해주세요.',
    });
  });

  it('카드번호 입력 필드의 인덱스(inputValue)와 4자리 숫자의 번호가 handleUpdateCardNumbers를 통해 들어오면, 해당 번호에 대한 검증 결과가 validState[indexValue]에 반영되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(0, '7890');
    });

    expect(result.current.cardNumbers).toEqual(['7890', '5678', '9012', '3456']);
    expect(result.current.validStates).toEqual([true, true, true, true]);
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('문자가 포함된 카드번호가 handleUpdateCardNumbers를 통해 들어오면, 해당 입력 필드 인덱스에 매칭되는 validState 값이 false로 변하고 validationResult의 isValid가 false로 반환되며 카드번호 양식에 대한 에러 메시지가 포함되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(1, 'abc');
    });

    const newCardNumbers = [...initialValues];
    newCardNumbers[1] = 'abc';

    expect(result.current.cardNumbers).toEqual(newCardNumbers);
    expect(result.current.validStates).toEqual([true, false, true, true]);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '카드 번호는 4자리의 숫자여야 합니다. 확인 후 다시 입력해주세요.',
    });
  });

  it('모든 카드번호 입력 필드가 4자리의 숫자로 입력되면 validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(0, '7890');
    });
    act(() => {
      result.current.handleUpdateCardNumbers(1, '1234');
    });
    act(() => {
      result.current.handleUpdateCardNumbers(2, '5678');
    });
    act(() => {
      result.current.handleUpdateCardNumbers(3, '9012');
    });

    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it('하나 이상의 카드번호 입력 필드에 숫자가 아닌 문자가 입력되었다면 validationResult의 isValid가 false로 반환되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(0, '7890');
    });
    act(() => {
      result.current.handleUpdateCardNumbers(1, 'abcd');
    });
    act(() => {
      result.current.handleUpdateCardNumbers(2, '5678');
    });
    act(() => {
      result.current.handleUpdateCardNumbers(3, '9012');
    });

    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: '카드 번호는 4자리의 숫자여야 합니다. 확인 후 다시 입력해주세요.',
    });
  });
});
