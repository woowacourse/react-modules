import { renderHook } from '@testing-library/react';
import useCardType from '../useCardType';
import { act } from 'react';

describe('카드 타입 훅 테스트', () => {
  it('카드 번호 입력 시 첫 글자가 4로 시작할 때 cardType 이 visa 가 된다.', async () => {
    const cardNumberValue = '4444';

    const { result } = renderHook(() => useCardType());

    act(() => {
      result.current.cardTypeHandler(cardNumberValue);
    });

    expect(result.current.cardType).toBe('Visa');
  });

  it('카드 번호 입력 시 앞의 두 글자가 51~55 로 시작할 때 cardType 이 MasterCard 가 된다.', async () => {
    const cardNumberValue = '5526';
    const { result } = renderHook(() => useCardType());

    act(() => {
      result.current.cardTypeHandler(cardNumberValue);
    });

    expect(result.current.cardType).toBe('MasterCard');
  });
  it('카드 번호 입력 시 앞의 두 글자가 36 로 시작할 때 cardType 이 Diners 가 된다.', async () => {
    const cardNumberValue = '3612';
    const { result } = renderHook(() => useCardType());

    act(() => {
      result.current.cardTypeHandler(cardNumberValue);
    });

    expect(result.current.cardType).toBe('Diners');
  });
  it('카드 번호 입력 시 앞의 두 글자가 34, 37 로 시작할 때 cardType 이 MasterCard 가 된다.', async () => {
    const cardNumberValue = '3412';
    const { result } = renderHook(() => useCardType());

    act(() => {
      result.current.cardTypeHandler(cardNumberValue);
    });

    expect(result.current.cardType).toBe('AMEX');
  });
  it('카드 번호 입력 시 앞의 622126~622925로 시작할 때 cardType 이 MasterCard 가 된다.', async () => {
    const cardNumberValue = '62212612';
    const { result } = renderHook(() => useCardType());

    act(() => {
      result.current.cardTypeHandler(cardNumberValue);
    });

    expect(result.current.cardType).toBe('UnionPay');
  });

  it('카드 번호 입력 시 첫 글자에 4 이외의 숫자가 오고, 앞 두글자가 51~55 에 포함되지 않을 경우 cardType 이 Empty 가 된다. ', async () => {
    const cardNumberValue = '6123';
    const { result } = renderHook(() => useCardType());

    act(() => {
      result.current.cardTypeHandler(cardNumberValue);
    });

    expect(result.current.cardType).toBe('Empty');
  });
});
