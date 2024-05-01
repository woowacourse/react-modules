import { renderHook, act } from '@testing-library/react';
import useInput from '../useInput';
import { ChangeEvent } from 'react';
import { validateLength, validateNumber } from '../../validate/validate';
import { ErrorStatus } from '../../types/errorStatus';

const cardNumbersValidates = (n: string) => {
  validateNumber(n);
  validateLength(n, 4);
};

describe('useInput', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = 'Initial Value';
    const { result } = renderHook(() => useInput(initialValue, () => {}));

    expect(result.current.value).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = 'Hello';
    const { result } = renderHook(() => useInput('Hello', () => {}));

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userInput);
  });

  it('숫자아닌 값이 입력됐을 때 에러를 낸다.', () => {
    const userInput = 'abcd';
    const { result } = renderHook(() =>
      useInput(userInput, cardNumbersValidates)
    );

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    console.log(result.current.errorStatus);

    expect(result.current.errorStatus).toBe(ErrorStatus.IS_NOT_NUMBER);
  });
});
