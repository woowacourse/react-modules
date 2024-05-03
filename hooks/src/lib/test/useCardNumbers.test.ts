import { renderHook } from '@testing-library/react';
import React, { ChangeEvent, FocusEvent } from 'react';
import useCardNumbers from '../useCardNumbers';
import { CardNumbersErrorMessages } from '../../constants/error';
import { ErrorStatus } from '../../types/errorStatus';

describe('useCardNumbers 훅 테스트', () => {
  it('훅을 선언할 때 초기값과 같은 값이 result.current.value이 된다.', () => {
    const initialValue = {
      cardNumber1: '1234',
      cardNumber2: '1234',
      cardNumber3: '1234',
      cardNumber4: '1234',
    };
    const { result } = renderHook(() => useCardNumbers(initialValue));
    expect(result.current.values).toEqual(initialValue);
  });

  it('입력값(cardNumber1) 업데이트될 시 `1234` -> `5678`로 변경되어야 한다.', () => {
    const initialValues = {
      cardNumber1: '1234',
      cardNumber2: '5678',
      cardNumber3: '5678',
      cardNumber4: '5678',
    };

    const changeValue = {
      cardNumber1: '5678',
      cardNumber2: '5678',
      cardNumber3: '5678',
      cardNumber4: '5678',
    };
    const { result } = renderHook(() => useCardNumbers(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: '5678', name: 'cardNumber1' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual(changeValue);
  });

  it(`숫자아닌 값이 입력됐을 때 에러(${
    CardNumbersErrorMessages[ErrorStatus.IS_NOT_NUMBER]
  })를 낸다.`, () => {
    const valuesWithString = {
      cardNumber1: '',
      cardNumber2: '',
      cardNumber3: '',
      cardNumber4: '',
    };

    const { result } = renderHook(() => useCardNumbers(valuesWithString));

    const invalidValues = 'abcd';
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValues, name: 'cardNumber1' },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      cardNumber1: CardNumbersErrorMessages[ErrorStatus.IS_NOT_NUMBER],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it(`숫자가 4자리가 아닐때(초과시) 에러(${
    CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH]
  })를 낸다.`, () => {
    const valuesWithString = {
      cardNumber1: '',
      cardNumber2: '',
      cardNumber3: '',
      cardNumber4: '',
    };

    const { result } = renderHook(() => useCardNumbers(valuesWithString));

    const invalidValues = '12345';
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValues, name: 'cardNumber1' },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      cardNumber1: CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it(`숫자가 4자리가 아닐때(미만시) 에러(${
    CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH]
  })를 낸다.`, () => {
    const valuesWithString = {
      cardNumber1: '',
      cardNumber2: '',
      cardNumber3: '',
      cardNumber4: '',
    };

    const { result } = renderHook(() => useCardNumbers(valuesWithString));

    const invalidValues = '1';
    React.act(() => {
      result.current.onBlur({
        target: { value: invalidValues, name: 'cardNumber1' },
      } as FocusEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      cardNumber1: CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });
});
