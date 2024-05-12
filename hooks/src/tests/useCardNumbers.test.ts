import React from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumbers from '../lib/useCard/useCardNumbers';

const initialValue = { first: '1234', second: '1234', third: '2344', fourth: '5623' };

describe('useCardNumbers 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers(initialValue));
    expect(result.current.value).toEqual(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '1453';
    const expected = { first: '1234', second: '1453', third: '2344', fourth: '5623' };
    const { result } = renderHook(() => useCardNumbers(initialValue));

    React.act(() => {
      result.current.handleChange(
        {
          target: { value: userInput },
        } as unknown as React.ChangeEvent<HTMLInputElement>,
        'second',
      );
    });

    expect(result.current.value).toEqual(expected);
  });

  it('userInput에 숫자가 아닌 입력이 들어올 경우 에러이다.', () => {
    const userInput = 'cookie';
    const { result } = renderHook(() => useCardNumbers(initialValue));

    React.act(() => {
      result.current.handleChange(
        {
          target: { value: userInput },
        } as unknown as React.ChangeEvent<HTMLInputElement>,
        'second',
      );
    });

    expect(result.current.errorInfo.second.isValid).toBe(false);
  });

  it('userInput에 4자리가 아닌 아닌 입력이 들어올 경우 에러이다.', () => {
    const userInput = '123';
    const { result } = renderHook(() => useCardNumbers(initialValue));

    React.act(() => {
      result.current.handleBlur(
        {
          target: { value: userInput },
        } as unknown as React.FocusEvent<HTMLInputElement, Element>,
        'second',
      );
    });

    expect(result.current.errorInfo.second.isValid).toBe(false);
  });

  describe('카드번호 포맷팅', () => {
    it('DINERS 카드일 경우 4-6-4 로 포맷팅한 배열을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '36123412341234';
      const expected = ['3612', '341234', '1234'];
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumberList).toEqual(expected);
    });

    it('DINERS 카드일 경우 4-6-4 로 포맷팅한 string을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '36123412341234';
      const expected = '3612-341234-1234';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumber).toBe(expected);
    });

    it('AMEX 카드일 경우 4-6-5 로 포맷팅한 배열을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '341234123412345';
      const expected = ['3412', '341234', '12345'];
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumberList).toEqual(expected);
    });

    it('AMEX 카드일 경우 4-6-5 로 포맷팅한 string을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '341234123412345';
      const expected = '3412-341234-12345';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumber).toBe(expected);
    });

    it('VISA 카드일 경우 4-4-4-4 로 포맷팅한 배열을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '4321123412341234';
      const expected = ['4321', '1234', '1234', '1234'];
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumberList).toEqual(expected);
    });

    it('VISA 카드일 경우 4-4-4-4 로 포맷팅한 string을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '4321123412341234';
      const expected = '4321-1234-1234-1234';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumber).toBe(expected);
    });

    it('MASTER 카드일 경우 4-4-4-4 로 포맷팅한 배열을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '5432123412341234';
      const expected = ['5432', '1234', '1234', '1234'];
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumberList).toEqual(expected);
    });

    it('MASTER 카드일 경우 4-4-4-4 로 포맷팅한 string을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '5432123412341234';
      const expected = '5432-1234-1234-1234';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumber).toBe(expected);
    });

    it('UNION_PAY일 경우 4-4-4-4 로 포맷팅한 배열을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '6243123412341234';
      const expected = ['6243', '1234', '1234', '1234'];
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumberList).toEqual(expected);
    });

    it('UNION_PAY일 경우 4-4-4-4 로 포맷팅한 string을 반환한다.', () => {
      const initialValue = { first: '' };
      const userInput = '6243123412341234';
      const expected = '6243-1234-1234-1234';
      const { result } = renderHook(() => useCardNumbers(initialValue));

      React.act(() => {
        result.current.handleChange(
          {
            target: { value: userInput },
          } as unknown as React.FocusEvent<HTMLInputElement, Element>,
          'first',
        );
      });

      expect(result.current.formattedCardNumber).toBe(expected);
    });
  });

  it('초기값에 숫자가 아닌 입력이 들어올 경우 필드들이 초기화된다.', () => {
    const initialValue = { first: '마루', second: '쿠키', third: '치코', fourth: '해리' };
    const expected = { first: '', second: '', third: '', fourth: '' };
    const { result } = renderHook(() => useCardNumbers(initialValue));

    expect(result.current.value).toEqual(expected);
  });
});
