import { act, renderHook } from '@testing-library/react';
import { useCardNumber } from '../lib/hooks/useCardNumber/useCardNumber';

describe('카드 번호 검증 테스트입니다.', () => {
  test('숫자를 입력하지 않은 경우, 숫자를 입력하라는 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());
    const mockEvent = {
      target: { value: '가나다' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('숫자(0~9)만 입력 가능합니다.');
  });

  test('사용자가 입력한 value값의 길이가 validLength(16)보다 작다면 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('숫자 16자리를 입력해주세요.');
  });

  test('사용자가 입력한 value값의 길이가 validLength(16)보다 크다면 errorMessage를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '12345' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('숫자 16자리를 입력해주세요.');
  });

  test('사용자가 입력한 value값의 길이와 validLength(16)가 같다면, errorMessage를 빈 값으로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '1234123412341234' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.errorMessage).toBe('');
  });
});

describe('카드 타입 검증 테스트입니다.', () => {
  test('카드 번호가 4, 51~55, 36, 34, 37, 622126~622925, 624~626, 6282~6288 로 시작하지 않으면, 카드 타입을 Unknown으로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '123' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('Unknown');
  });

  test('카드 번호가 4로 시작하면, 카드 타입을 Visa로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '4' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('Visa');
  });

  test('카드 번호의 앞자리가 51~55로 시작하면, 카드 타입을 MasterCard로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '55' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('MasterCard');
  });

  test('카드 번호의 앞자리가 36으로 시작하면, 카드 타입을 Diners로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '36' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('Diners');
  });

  test('카드 번호의 앞자리가 34로 시작하면, 카드 타입을 AMEX로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '34' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('AMEX');
  });

  test('카드 번호의 앞자리가 37로 시작하면, 카드 타입을 AMEX로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '37' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('AMEX');
  });

  test('카드 번호의 앞자리가 622126~622925로 시작하면, 카드 타입을 UnionPay로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '622126' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('UnionPay');
  });

  test('카드 번호의 앞자리가 624~626로 시작하면, 카드 타입을 UnionPay로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '624' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('UnionPay');
  });

  test('카드 번호의 앞자리가 6282~6288로 시작하면, 카드 타입을 UnionPay로 반환한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    const mockEvent = {
      target: { value: '6282' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumberChange(mockEvent);
    });

    expect(result.current.cardType).toBe('UnionPay');
  });
});
