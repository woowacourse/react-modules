import { renderHook, act } from '@testing-library/react';
import useCardExpireDateValidate from './useCardExpireDateValidate';

describe('CardExpireDateValidate', () => {
  describe('숫자로 이루어진 2자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    it('month', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '12',
            year: ''
          },
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(true);
      expect(result.current.errorMessage).toBeNull();
    });

    it('year', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '',
            year: '25'
          },
          'year'
        );
      });

      expect(result.current.isValid.year).toBe(true);
      expect(result.current.errorMessage).toBeNull();
    });
  });

  describe('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    it('month', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '1a',
            year: ''
          },
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe('숫자만 입력해주세요.');
    });

    it('year', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '',
            year: '2a'
          },
          'year'
        );
      });

      expect(result.current.isValid.year).toBe(false);
      expect(result.current.errorMessage).toBe('숫자만 입력해주세요.');
    });
  });

  describe('숫자로 이루어진 2자리 값이 들어오면 범위를 검증하여 유효하지 않으면 isValid가 false이고 에러 메시지가 나온다.', () => {
    it('month', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '13',
            year: ''
          },
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe(
        '1~12 사이의 숫자를 입력해주세요.'
      );
    });

    it('year', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '',
            year: '23'
          },
          'year'
        );
      });

      expect(result.current.isValid.year).toBe(false);
      expect(result.current.errorMessage).toBe('유효한 년도를 입력해주세요.');
    });
  });

  describe('년도가 올해인데 월이 현재 월보다 이전이면 month의 isValid가 false이고 에러 메시지가 나온다.', () => {
    it('month', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '04',
            year: '25'
          },
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe('유효한 만료일을 입력해주세요.');
    });

    it('year', () => {
      const { result } = renderHook(() => useCardExpireDateValidate());

      act(() => {
        result.current.validateCardExpireDate(
          {
            month: '04',
            year: '25'
          },
          'year'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe('유효한 만료일을 입력해주세요.');
    });
  });
});
