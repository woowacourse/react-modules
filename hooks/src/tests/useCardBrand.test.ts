import { renderHook, act } from '@testing-library/react';
import useCardBrand from '../lib/useCard/useCardBrand';
import { useCardNumbers } from '../lib';

describe('useCardHolder 커스텀 훅 테스트', () => {
  it('카드번호가 36으로 시작하는 14자리 숫자면 cardBrand값을 Diners로 반환한다.', () => {
    const initialValue = { first: '36123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('Diners');
  });

  it('Diners일 경우 4-6-4 로 포맷팅하여 배열로 값을 반환한다.', () => {
    const initialValue = { first: '36123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.formattedCardNumbers).toEqual(['3612', '341234', '1234']);
  });

  it('카드번호가 34으로 시작하는 15자리 숫자면 cardBrand값을 AMEX로 반환한다.', () => {
    const initialValue = { first: '341234123412345' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('AMEX');
  });

  it('카드번호가 37으로 시작하는 15자리 숫자면 cardBrand값을 AMEX로 반환한다.', () => {
    const initialValue = { first: '371234123412345' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('AMEX');
  });

  it('AMEX일 경우 4-6-5 로 포맷팅하여 배열로 값을 반환한다.', () => {
    const initialValue = { first: '341234123412345' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.formattedCardNumbers).toEqual(['3412', '341234', '12345']);
  });

  it('카드번호가 4로 시작하는 16자리 숫자면 cardBrand값을 비자카드로 반환한다.', () => {
    const initialValue = { first: '4321123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('비자카드');
  });

  it('비자카드일 경우 4-4-4-4 로 포맷팅하여 배열로 값을 반환한다.', () => {
    const initialValue = { first: '4321123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.formattedCardNumbers).toEqual(['4321', '1234', '1234', '1234']);
  });

  it('카드번호가 51에서 55 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 마스터카드로 반환한다.', () => {
    const initialValue = { first: '5521123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('마스터카드');
  });

  it('마스터카드일 경우 4-4-4-4 로 포맷팅하여 배열로 값을 반환한다.', () => {
    const initialValue = { first: '5521123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.formattedCardNumbers).toEqual(['5521', '1234', '1234', '1234']);
  });

  it('카드번호가 624에서 626 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(624)', () => {
    const initialValue = { first: '6244123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('유니온페이');
  });

  it('카드번호가 624에서 626 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(626)', () => {
    const initialValue = { first: '6264123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('유니온페이');
  });

  it('카드번호가 6282에서 6288 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(6282)', () => {
    const initialValue = { first: '6282123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('유니온페이');
  });

  it('카드번호가 6282에서 6288 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(6288)', () => {
    const initialValue = { first: '6288123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('유니온페이');
  });

  it('카드번호가 622126에서 622925 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(622126)', () => {
    const initialValue = { first: '6221263412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('유니온페이');
  });

  it('카드번호가 622126에서 622925 사이의 값으로 시작하는 16자리 숫자면 cardBrand값을 유니온페이로 반환한다.(622925)', () => {
    const initialValue = { first: '6229253412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.cardBrand).toBe('유니온페이');
  });

  it('유니온페이일 경우 4-4-4-4 로 포맷팅하여 배열로 값을 반환한다.', () => {
    const initialValue = { first: '6244123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    expect(result.current.formattedCardNumbers).toEqual(['6244', '1234', '1234', '1234']);
  });

  it('카드번호가 바뀌는 것을 감지하여 624로 시작하는 카드번호를 유니온 페이로 반환한다.', () => {
    const initialValue = { first: '' };
    const userInput = '6244123412341234';
    const expected = {
      cardBrand: '유니온페이',
      formattedCardNumbers: ['6244', '1234', '1234', '1234'],
    };

    const { result: cardNumbers } = renderHook(() => useCardNumbers(initialValue));

    act(() => {
      cardNumbers.current.handleChange(
        {
          target: { value: userInput },
        } as unknown as React.ChangeEvent<HTMLInputElement>,
        'first',
      );
    });

    const { result } = renderHook(() => useCardBrand(cardNumbers.current.value));

    expect(result.current).toEqual(expected);
  });

  it('카드 브랜드의 등록되지 않은 카드번호일 경우 빈 값을 반환한다.', () => {
    const initialValue = { first: '1234123412341234' };

    const { result } = renderHook(() => useCardBrand(initialValue));

    const BLANK_VALUE = {
      cardBrand: '',
      formattedCardNumbers: [],
    };

    expect(result.current).toEqual(BLANK_VALUE);
  });
});
