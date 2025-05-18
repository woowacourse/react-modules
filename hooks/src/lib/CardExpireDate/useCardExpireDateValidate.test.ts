import { renderHook, act } from '@testing-library/react';

import useCardExpireDate, { CardExpireDateResult } from './useCardExpireDate';
import { ERROR_MESSAGE } from '../constants/errorMessage';

describe('CardExpireDateValidate', () => {
  let result: { current: CardExpireDateResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardExpireDate());
    result = rendered.result;
  });

  describe('숫자로 이루어진 2자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.', () => {
    it('month', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '12',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'month'
        );
      });

      expect(result.current.expireDate.month).toBe('12');
      expect(result.current.isValid.month).toBe(true);
      expect(result.current.errorMessage).toBeNull();
    });

    it('year', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '25',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'year'
        );
      });

      expect(result.current.expireDate.year).toBe('25');
      expect(result.current.isValid.year).toBe(true);
      expect(result.current.errorMessage).toBeNull();
    });
  });

  describe('숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.', () => {
    it('month', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '1a',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_NUMBER);
    });

    it('year', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '2a',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'year'
        );
      });

      expect(result.current.isValid.year).toBe(false);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_NUMBER);
    });
  });

  describe('숫자로 이루어진 2자리 값이 들어오면 범위를 검증하여 유효하지 않으면 isValid가 false이고 에러 메시지가 나온다.', () => {
    it('month', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '13',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_MONTH);
    });

    it('year', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '23',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'year'
        );
      });

      expect(result.current.isValid.year).toBe(false);
      expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_YEAR);
    });
  });

  describe('년도가 올해인데 월이 현재 월보다 이전이면 month의 isValid가 false이고 에러 메시지가 나온다.', () => {
    it('month', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '25',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'year'
        );
      });

      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '04',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'month'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe(
        ERROR_MESSAGE.INVALID_EXPIRE_DATE
      );
    });

    it('year', () => {
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '04',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'month'
        );
      });
      act(() => {
        result.current.handleExpireDateChange(
          {
            target: {
              value: '25',
            },
          } as React.ChangeEvent<HTMLInputElement>,
          'year'
        );
      });

      expect(result.current.isValid.month).toBe(false);
      expect(result.current.errorMessage).toBe(
        ERROR_MESSAGE.INVALID_EXPIRE_DATE
      );
    });
  });
});
