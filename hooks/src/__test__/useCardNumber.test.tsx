import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../lib/hooks/useCardNumber';

describe('useCardNumber 훅', () => {
  describe('초기 상태', () => {
    test('모든 값이 빈문자열 혹은 false여야 한다.', () => {
      const { result } = renderHook(() => useCardNumber());
      expect(result.current.formatted).toEqual('');
      expect(result.current.isError).toEqual(false);
      expect(result.current.errorMessage).toBe('');
    });
  });

  describe('입력 처리', () => {
    test('숫자 입력 시 parseNumber로 숫자만 남기고 formatted에 반영한다', async () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => {
        result.current.onChange({
          target: { value: '1234**567891234567' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formatted).toEqual([
        '1234',
        '5678',
        '9123',
        '4567',
      ]);
      expect(result.current.isError).toBe(false);
      expect(result.current.errorMessage).toBe('');
    });

    test('입력 수 초과시 입력되지 않는다.', async () => {
      const { result } = renderHook(() => useCardNumber());
      act(() => {
        result.current.onChange({
          target: { value: '12345678912345678' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formatted).toEqual([
        '1234',
        '5678',
        '9123',
        '45678',
      ]);
      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe(
        '4-4-4-4 형태의 16자리로 16자리로 입력해주세요'
      );
    });
  });

  describe('카드 브랜드 감지', () => {
    describe('Visa 패턴', () => {
      test('4로 시작하는 16자리 숫자 입력시 Visa로 감지한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '4123123456781234' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe('Visa');
      });
    });

    describe('MasterCard 패턴', () => {
      test('51~55 로 시작하는 16자리 숫자 입력시 MasterCard로 감지한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '5123123456781234' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe('MasterCard');
      });
    });

    describe('Diners 패턴', () => {
      test('36 로 시작하는 14자리 숫자 입력시 Diners로 감지한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '36123456789012' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe('Diners');
      });
    });

    describe('AMEX 패턴', () => {
      test('34, 37 로 시작하는 15자리 숫자 입력시 AMEX로 감지한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '341234567890123' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe('AMEX');
      });
    });

    describe('UnionPay 패턴', () => {
      test('622126~ 622925 / 624~626 / 6282~6288 로 시작하는 16자리 숫자 입력시 UnionPay로 감지한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '6221261234567890' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe('UnionPay');
      });
    });
  });

  describe('포맷팅', () => {
    describe('Visa 패턴', () => {
      test('Visa 카드번호 입력시 4-4-4-4 로 포매팅 한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '4123123456781234' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formatted).toEqual([
          '4123',
          '1234',
          '5678',
          '1234',
        ]);
      });
    });

    describe('MasterCard 패턴', () => {
      test('MasterCard 카드번호 입력시 4-4-4-4 로 포매팅 한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '5123123456781234' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formatted).toEqual([
          '5123',
          '1234',
          '5678',
          '1234',
        ]);
      });
    });

    describe('Diners 패턴', () => {
      test('Diners 카드번호 입력시 4-6-4 로 포매팅 한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '36123456789012' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formatted).toEqual(['3612', '345678', '9012']);
      });
    });

    describe('AMEX 패턴', () => {
      test('AMEX 카드번호 입력시 4-6-5 로 포매팅 한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '341234567890123' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formatted).toEqual(['3412', '345678', '90123']);
      });
    });

    describe('UnionPay 패턴', () => {
      test('UnionPay 카드번호 입력시 4-4-4-4 로 포매팅 한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '6221261234567890' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.formatted).toEqual([
          '6221',
          '2612',
          '3456',
          '7890',
        ]);
      });
    });
  });

  describe('예외처리', () => {
    describe('Visa 패턴', () => {
      test('4로 시작하는 16 자리 숫자로 입력하지 않으면 오류가 발생한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '41231234567812' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.isError).toBe(true);
        expect(result.current.errorMessage).toBe(
          '4-4-4-4 형태의 16자리로 입력해주세요'
        );
      });
    });

    describe('MasterCard 패턴', () => {
      test('51~55로 시작하는 16자리 숫자로 입력하지 않으면 오류가 발생한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '51231234567812' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.isError).toBe(true);
        expect(result.current.errorMessage).toBe(
          '4-4-4-4 형태의 16자리로 입력해주세요'
        );
      });
    });

    describe('Diners 패턴', () => {
      test('36으로 시작하는 14자리 숫자로 입력하지 않으면 오류가 발생한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '3612345678901' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.isError).toBe(true);
        expect(result.current.errorMessage).toBe(
          '4-6-4 형태의 14자리로 입력해주세요'
        );
      });
    });

    describe('AMEX 패턴', () => {
      test('34, 37로 시작하는 15자리 숫자로 입력하지 않으면 오류가 발생한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '34123456789012' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.isError).toBe(true);
        expect(result.current.errorMessage).toBe(
          '4-6-5 형태의 15자리로 입력해주세요'
        );
      });
    });

    describe('UnionPay 패턴', () => {
      test('622126~622925 / 624~626 / 6282~6288로 시작하는 16자리 숫자로 입력하지 않으면 오류가 발생한다.', async () => {
        const { result } = renderHook(() => useCardNumber());
        act(() => {
          result.current.onChange({
            target: { value: '6221261234567' },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.isError).toBe(true);
        expect(result.current.errorMessage).toBe(
          '4-4-4-4 형태의 16자리로 입력해주세요'
        );
      });
    });
  });
});
