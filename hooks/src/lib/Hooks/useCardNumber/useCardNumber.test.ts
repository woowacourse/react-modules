import { renderHook, act, waitFor } from '@testing-library/react';
import useCardNumber from '.';

describe('useCardNumberValidation', () => {
  it('초기 noError 상태는 true이다.', () => {
    const { result } = renderHook(() => useCardNumber());
    expect(result.current.noError).toBe(true);
  });

  it('정확한 길이의 숫자 입력 시 noError는 true이다.', async () => {
    const { result } = renderHook(() => useCardNumber());
    const testCases = [
      {
        name: 'Visa',
        value: '4111111111111111',
        expectedBrand: 'visa',
        expectedFormat: [4, 4, 4, 4],
        expectedFormatted: '4111 1111 1111 1111',
      },
      {
        name: 'Diners',
        value: '36123456789012',
        expectedBrand: 'diners',
        expectedFormat: [4, 6, 4],
        expectedFormatted: '3612 345678 9012',
      },
      {
        name: 'Amex',
        value: '341234567890123',
        expectedBrand: 'amex',
        expectedFormat: [4, 6, 5],
        expectedFormatted: '3412 345678 90123',
      },
      {
        name: 'UnionPay',
        value: '6221261234567890',
        expectedBrand: 'unionpay',
        expectedFormat: [4, 4, 4, 4],
        expectedFormatted: '6221 2612 3456 7890',
      },
    ];

    for (const test of testCases) {
      const event = {
        target: { value: test.value },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.onChange(0)(event);
      });

      await waitFor(() => {
        expect(result.current.cardBrand).toBe(test.expectedBrand);
        expect(result.current.format).toEqual(test.expectedFormat);
        expect(result.current.formattedValue).toBe(test.expectedFormatted);
        expect(result.current.noError).toBe(true);
        expect(result.current.errorMessage).toBe('');
      });
    }
  });

  it('자릿수가 부족한 경우 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());
    const shortValue = {
      target: { value: '41111111111' }, // Visa지만 부족한 길이
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(shortValue);
    });

    expect(result.current.noError).toBe(false);
    expect(result.current.errorMessage).toBe('16자리의 숫자를 입력해주세요.');
  });

  it('formattedValue는 카드 브랜드에 따라 포맷팅된다 (Visa)', () => {
    const { result } = renderHook(() => useCardNumber());
    const event = {
      target: { value: '4111111111111111' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(event);
    });

    expect(result.current.formattedValue).toBe('4111 1111 1111 1111');
  });

  it('formattedValue는 카드 브랜드에 따라 포맷팅된다 (AMEX)', () => {
    const { result } = renderHook(() => useCardNumber());
    const event = {
      target: { value: '341234567890123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(event);
    });

    expect(result.current.formattedValue).toBe('3412 345678 90123');
    expect(result.current.cardBrand).toBe('amex');
    expect(result.current.format).toEqual([4, 6, 5]);
  });

  it('식별되지 않는 카드 번호는 포맷 없이 출력된다.', () => {
    const { result } = renderHook(() => useCardNumber());
    const event = {
      target: { value: '1234567890123456' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(event);
    });

    expect(result.current.formattedValue).toBe('1234 5678 9012 3456');
    expect(result.current.format).toEqual([4, 4, 4, 4]);
  });
});
