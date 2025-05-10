import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../src/lib/hooks/useCardNumber';

const ERROR_MESSAGES = {
  INVALID_LENGTH: '카드 번호는 4자리로 입력해주세요.',
  INVALID_CHARACTERS: '카드 번호는 숫자만 입력해주세요.',
  INVALID_START_NUMBER_OF_MASTERCARD: 'MasterCard 카드: 51 ~ 55로 시작하는 16자리 숫자를 입력해주세요.',
  INVALID_START_NUMBER_OF_DINERS: 'Diners 카드: 36으로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
  INVALID_START_NUMBER_OF_AMEX: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.',
};

describe('useCardNumber 테스트', () => {
  it('모든 입력이 유효한 경우 isValid는 true고 errorMessage는 비어있어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4234',
        input2: '5678',
        input3: '9012',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: true,
      input3: true,
      input4: true,
    });
    expect(result.current.errorMessage).toBe('');
  });

  it('숫자가 아닌 값이 포함된 경우, 해당 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4133',
        input2: '2ㅁㅁ8',
        input3: '9012',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: false,
      input3: true,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });
  it('4자리가 아닌 숫자가 포함된 경우, 해당 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4234',
        input2: '5678',
        input3: '902',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: true,
      input3: false,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  });

  it('4자리가 아닌 숫자와 숫자가 아닌 값이 포함된 경우, 해당 2개의 input만 false가 되어야 하며 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '4123',
        input2: '56ㅁ8',
        input3: '902',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: false,
      input3: false,
      input4: true,
    });
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_CHARACTERS);
  });
});

describe('useCardNumber 훅을 통한 카드 브랜드 성공 테스트', () => {
  it('어느 브랜드 카드도 해당되지 않는 경우', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '1234',
        input2: '5678',
        input3: '9012',
        input4: '3456',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: true,
      input3: true,
      input4: true,
    });
    expect(result.current.cardBrand).toBe('Unknown');
  }),
    it('MasterCard 카드: 51 ~ 55로 시작하는 16자리 숫자 입력 조건을 성공한 경우', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '5234',
          input2: '5678',
          input3: '9012',
          input4: '3456',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('Master');
    }),
    it('Diners 카드: 36으로 시작할 경우 ****-******-**** 형식으로 입력에 성공한 경우', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '3612',
          input2: '567892',
          input3: '9012',
          input4: '',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('Diners');
    }),
    it('AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '3412',
          input2: '567892',
          input3: '90123',
          input4: '',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('AMEX');
    }),
    it('UnionPay 카드: 622126~622925로 시작하는 경우', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '6221',
          input2: '2612',
          input3: '9013',
          input4: '1234',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('UnionPay');
    }),
    it('UnionPay 카드: 624~626 시작하는 경우', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '6241',
          input2: '2612',
          input3: '9013',
          input4: '1234',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('UnionPay');
    }),
    it('UnionPay 카드: 6282~6288 시작하는 경우', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '6284',
          input2: '2612',
          input3: '9013',
          input4: '1234',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('UnionPay');
    });
});

describe('validateCardNumber를 통한 카드 브랜드 실패 테스트', () => {
  it('어느 브랜드 카드도 해당되지 않는 경우에서 실패한 경우', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber({
        input1: '1234',
        input2: '5678',
        input3: '9012',
        input4: '345632',
      });
    });

    expect(result.current.isValid).toEqual({
      input1: true,
      input2: true,
      input3: true,
      input4: false,
    });
    expect(result.current.cardBrand).toBe('Unknown');
    expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_LENGTH);
  }),
    it('Diners 카드: 36으로 시작할 경우 ****-******-**** 형식 조건에 실패한 경우', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '3612',
          input2: '5678923',
          input3: '9012',
          input4: '',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: false,
        input3: true,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('Diners');
      expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_START_NUMBER_OF_DINERS);
    }),
    it('AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumber({
          input1: '3412',
          input2: '567892',
          input3: '901231',
          input4: '',
        });
      });

      expect(result.current.isValid).toEqual({
        input1: true,
        input2: true,
        input3: false,
        input4: true,
      });
      expect(result.current.cardBrand).toBe('AMEX');
      expect(result.current.errorMessage).toBe(ERROR_MESSAGES.INVALID_START_NUMBER_OF_AMEX);
    });
});
