import { act } from 'react';
import { renderHook } from '@testing-library/react';
import useCardNumber from './useCardNumber';

describe('useCardNumber Hook', () => {
  it('initializes correctly with empty values', () => {
    const { result } = renderHook(() => useCardNumber(''));
    expect(result.current.value).toBe('');
    expect(result.current.cardBrand).toBe('none');
    expect(result.current.errorMessage).toBe('');
  });

  describe('카드 브랜드 별 포맷팅 테스트', () => {
    it.each([
      {
        type: 'Visa',
        number: '4111111111111111',
        formatted: '4111-1111-1111-1111',
      },
      {
        type: 'MasterCard',
        number: '5555555555554444',
        formatted: '5555-5555-5555-4444',
      },
      {
        type: 'Diners',
        number: '36777777777777',
        formatted: '3677-777777-7777',
      },
      {
        type: 'AMEX',
        number: '341111111111111',
        formatted: '3411-111111-11111',
      },
      {
        type: 'UnionPay',
        number: '6221288888888888',
        formatted: '6221-2888-8888-8888',
      },
      {
        type: 'UnionPay',
        number: '6221925888888888',
        formatted: '6221-9258-8888-8888',
      },
    ])(
      '$type 카드의 번호는 $formatted와 같이 포맷팅 되어야 한다.',
      async ({ number, formatted }) => {
        const { result } = renderHook(() => useCardNumber(''));
        act(() => {
          result.current.onChangeHandler({
            target: { value: number },
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.value).toBe(formatted);
      },
    );
  });

  describe('error 처리 테스트', () => {
    it('숫자가 아닌 값이 입력됐을 때, 에러가 발생하고 값이 변경되지 않아야 한다.', () => {
      const { result } = renderHook(() => useCardNumber(''));
      act(() => {
        result.current.onChangeHandler({
          target: { value: 'abc' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.value).toBe('');
      expect(result.current.errorMessage).toContain(
        '카드번호는 숫자만 입력이 가능해요.',
      );
    });
  });

  describe('카드 브랜드별 카드 번호 최대 길이 테스트', () => {
    it.each([
      {
        type: 'Visa',
        number: '4111-1111-1111-1111',
        maxLength: 16,
      },
      {
        type: 'MasterCard',
        number: '5555-5555-5555-4444',
        maxLength: 16,
      },
      {
        type: 'Diners',
        number: '3677-777777-7777',
        maxLength: 14,
      },
      {
        type: 'AMEX',
        number: '3411-111111-11111',
        maxLength: 15,
      },
      {
        type: 'UnionPay',
        number: '6221-2888-8888-8888',
        maxLength: 16,
      },
    ])('formats $type card correctly', ({ number, maxLength }) => {
      const { result } = renderHook(() => useCardNumber(''));
      act(() =>
        result.current.onChangeHandler({
          target: { value: number },
        } as React.ChangeEvent<HTMLInputElement>),
      );
      act(() =>
        result.current.onChangeHandler({
          target: { value: number + '1' },
        } as React.ChangeEvent<HTMLInputElement>),
      );
      expect(result.current.errorMessage).toBe(
        `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      );
    });
  });
});
