import { renderHook } from '@testing-library/react';
import useIdentifyCard from '../lib/hooks/useIdentifyCard';

describe('useIdentifyCard 훅', () => {
  const { result } = renderHook(() => useIdentifyCard());
  const identify = (input: string) => result.current.getValidCardNumber(input);

  test('VISA (4로 시작) 인식', () => {
    expect(identify('4111111111111111')).toBe('VISA');
    expect(identify('4-123')).toBe('VISA');
  });

  test('MASTERCARD (51~55) 인식', () => {
    expect(identify('5100000000000000')).toBe('MASTERCARD');
    expect(identify('5500123412341234')).toBe('MASTERCARD');

    expect(identify('5612345678901234')).toBe('UNKNOWN');
  });

  test('DINERS (36) 인식', () => {
    expect(identify('36123456789012')).toBe('DINERS');
    expect(identify('35123456789012')).toBe('UNKNOWN');
  });

  test('AMEX (34~37) 인식', () => {
    expect(identify('341234567890123')).toBe('AMEX');
    expect(identify('371234567890123')).toBe('AMEX');

    expect(identify('381234567890123')).toBe('UNKNOWN');
  });

  test('UNIONPAY (622126~622925) 인식', () => {
    expect(identify('6221261234567890')).toBe('UNIONPAY');
    expect(identify('6229250000000000')).toBe('UNIONPAY');

    expect(identify('6221001234567890')).toBe('UNKNOWN');
  });

  test('UNIONPAY (3자리 624~626) 인식', () => {
    expect(identify('6241234567890123')).toBe('UNIONPAY');
    expect(identify('6260000000000000')).toBe('UNIONPAY');
    expect(identify('6230000000000000')).toBe('UNKNOWN');
  });

  test('UNIONPAY (4자리 6282~6288) 인식', () => {
    expect(identify('6282123412341234')).toBe('UNIONPAY');
    expect(identify('6288123412341234')).toBe('UNIONPAY');
    expect(identify('6280123412341234')).toBe('UNKNOWN');
  });

  test('알 수 없는 번호는 UNKNOWN 반환', () => {
    expect(identify('')).toBe('UNKNOWN');
    expect(identify('99')).toBe('UNKNOWN');
    expect(identify('123')).toBe('UNKNOWN');
  });
});
