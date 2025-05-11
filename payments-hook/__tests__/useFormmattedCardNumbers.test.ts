import { renderHook } from '@testing-library/react';
import useFormattedCardNumbers from '../src/useFormattedCardNumbers/useFormattedCardNumbers';
import { act } from 'react';
import createInputChangeEvent from '../src/utils/createInputChangeEvent';

describe('useFormattedCardNumbers 테스트', () => {
  it('VISA 카드 번호를 포매팅한다', () => {
    const { result } = renderHook(() => useFormattedCardNumbers());

    const initialInput = '4234';
    const input = '4234123412341234';
    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(initialInput)
      );
    });

    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(input)
      );
    });

    expect(result.current.formattedCardNumbers).toBe('4234 1234 1234 1234');
  });

  it('AMEX 카드 번호를 포매팅한다 ', () => {
    const { result } = renderHook(() => useFormattedCardNumbers());

    const initialInput = '3434';
    const input = '343412345678901';

    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(initialInput)
      );
    });

    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(input)
      );
    });

    expect(result.current.formattedCardNumbers).toBe('3434 123456 78901');
  });

  it('Diners 카드 번호를 포매팅한다', () => {
    const { result } = renderHook(() => useFormattedCardNumbers());

    const initialInput = '3622';
    const input = '36221234567890';

    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(initialInput)
      );
    });

    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(input)
      );
    });

    expect(result.current.formattedCardNumbers).toBe('3622 123456 7890');
  });

  it('카드 네트워크를 인식하지 못하면 FIRST에만 반영된다', () => {
    const { result } = renderHook(() => useFormattedCardNumbers());

    const input = '9999999999999999';

    act(() => {
      result.current.handleFormattedCardNumbersChange(
        createInputChangeEvent(input)
      );
    });

    expect(result.current.formattedCardNumbers).toBe('9999999999999999');
  });
});
