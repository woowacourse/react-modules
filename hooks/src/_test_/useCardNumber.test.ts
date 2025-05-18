import useCardNumber from '../lib/cardNumber/useCardNumber';
import { renderHook, act } from '@testing-library/react';

describe('useCardNumber 성공 케이스', () => {
  it('모든 입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange('1234');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange('12345678');
    });

    expect(result.current.cardNumber).toBe('1234 5678');
  });

  describe('Visa', () => {
    it('이름이 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('4123123456789012');
      });

      expect(result.current.cardCompany).toBe('Visa');
    });

    it('포맷팅이 [4,4,4,4] 간격으로 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('4234567891234567');
      });

      expect(result.current.cardNumber).toBe('4234 5678 9123 4567');
    });
  });

  describe('MasterCard', () => {
    it('이름이 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('5134567856785678');
      });

      expect(result.current.cardCompany).toBe('MasterCard');
    });

    it('포맷팅이 [4,4,4,4] 간격으로 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('5134567891234567');
      });

      expect(result.current.cardNumber).toBe('5134 5678 9123 4567');
    });
  });

  describe('AMEX', () => {
    it('이름이 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('3434567812121234');
      });

      expect(result.current.cardCompany).toBe('AMEX');
    });

    it('포맷팅이 [4,6,5] 간격으로 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('343456789123456');
      });

      expect(result.current.cardNumber).toBe('3434 567891 23456');
    });
  });

  describe('Diners', () => {
    it('이름이 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('36345678912341');
      });

      expect(result.current.cardCompany).toBe('Diners');
    });

    it('포맷팅이 [4,6,4] 간격으로 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('36345678912345');
      });

      expect(result.current.cardNumber).toBe('3634 567891 2345');
    });
  });

  describe('UnionPay', () => {
    it('이름이 정확히 업데이트 되어야 한다. (62[4-6])', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('6243456781123456');
      });

      expect(result.current.cardCompany).toBe('UnionPay');
    });

    it('이름이 정확히 업데이트 되어야 한다. (628[2-8])', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('6282345678123456');
      });

      expect(result.current.cardCompany).toBe('UnionPay');
    });

    it('이름이 정확히 업데이트 되어야 한다. (622126 ~ 622925)', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('6221262123456789');
      });

      expect(result.current.cardCompany).toBe('UnionPay');
    });

    it('포맷팅이 [4,4,4,4] 간격으로 정확히 업데이트 되어야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('6221262345678901');
      });

      expect(result.current.cardNumber).toBe('6221 2623 4567 8901');
    });
  });
});

describe('useCardNumber 실패 케이스', () => {
  it('카드 번호에 숫자가 아닌 문자가 포함되면 형식 오류 메시지를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange('123d');
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  describe('Visa', () => {
    it('15자리 이하일 경우 에러 메시지지를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('412312345678901');
      });

      expect(result.current.errorState.errorMessage).toBe('16자리를 입력하세요.');
    });
  });

  describe('MasterCard', () => {
    it('15자리 이하일 경우 에러 메시지지를 반환한다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('512312345678901');
      });

      expect(result.current.errorState.errorMessage).toBe('16자리를 입력하세요.');
    });
  });

  describe('AMEX', () => {
    it('14자리 이하일 경우 이름이 업데이트 되면 안된다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('34345678121212');
      });

      expect(result.current.errorState.errorMessage).toBe('15자리를 입력하세요.');
    });
  });

  describe('Diners', () => {
    it('13자리 이하일 경우 이름이 업데이트 되면 안된다.', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('3634567891234');
      });

      expect(result.current.errorState.errorMessage).toBe('14자리를 입력하세요.');
    });
  });

  describe('UnionPay', () => {
    it('15자리 이하일 경우 이름이 업데이트 되면 안된다. (62[4-6])', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('624345678112345');
      });

      expect(result.current.errorState.errorMessage).toBe('16자리를 입력하세요.');
    });

    it('15자리 이하일 경우 이름이 업데이트 되면 안된다. (628[2-8])', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('628234567812345');
      });

      expect(result.current.errorState.errorMessage).toBe('16자리를 입력하세요.');
    });

    it('15자리 이하일 경우 이름이 업데이트 되면 안된다. (622126 ~ 622925)', () => {
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange('622126212345678');
      });

      expect(result.current.errorState.errorMessage).toBe('16자리를 입력하세요.');
    });
  });
});
