import { renderHook } from '@testing-library/react';
import { useCardFormatter } from './useCardFormatter';
import { useCardBrandValidation } from '../useCardBrandValidation';

jest.mock('../useCardBrandValidation');

describe('useCardFormatter', () => {
  beforeEach(() => {
    (useCardBrandValidation as jest.Mock).mockReturnValue({
      cardBrand: null
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('초기 상태에서는 빈 문자열을 반환해야 함', () => {
    const { result } = renderHook(() => useCardFormatter(''));

    expect(result.current.formattedNumber).toBe('');
  });

  it('Visa 카드 번호를 올바르게 포맷팅해야 함', () => {
    (useCardBrandValidation as jest.Mock).mockReturnValue({
      cardBrand: 'visa'
    });

    const { result } = renderHook(() => useCardFormatter('4111111111111111'));
    expect(result.current.formattedNumber).toBe('4111 1111 1111 1111');
  });

  it('Amex 카드 번호를 올바르게 포맷팅해야 함', () => {
    (useCardBrandValidation as jest.Mock).mockReturnValue({
      cardBrand: 'amex'
    });

    const { result } = renderHook(() => useCardFormatter('378282246310005'));
    expect(result.current.formattedNumber).toBe('3782 822463 10005');
  });

  it('숫자가 아닌 문자는 필터링되어야 함', () => {
    (useCardBrandValidation as jest.Mock).mockReturnValue({
      cardBrand: 'visa'
    });

    const { result } = renderHook(() => useCardFormatter('4111-2222-3333-4444'));
    expect(result.current.formattedNumber).toBe('4111 2222 3333 4444');
  });

  it('빈 문자열이 입력되면 포맷팅도 빈 문자열이어야 함', () => {
    const { result } = renderHook(() => useCardFormatter(''));
    expect(result.current.formattedNumber).toBe('');
  });

  it('다양한 카드 타입에 따른 포맷팅 테스트', () => {
    const testCases = [
      { brand: 'mastercard', number: '5555555555554444', expected: '5555 5555 5555 4444' },
      { brand: 'diners', number: '36700102000000', expected: '3670 010200 0000' },
      { brand: 'unionpay', number: '6250941006528599', expected: '6250 9410 0652 8599' }
    ];

    testCases.forEach(({ brand, number, expected }) => {
      (useCardBrandValidation as jest.Mock).mockReturnValue({
        cardBrand: brand
      });

      const { result } = renderHook(() => useCardFormatter(number));
      expect(result.current.formattedNumber).toBe(expected);
    });
  });
});
