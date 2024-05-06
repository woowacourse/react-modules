import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import useCardNumbers from '../lib/useCardNumbers';

describe('useCardNumbers 커스텀 훅 테스트', () => {
  const cardNumbersLength = 16;

  it('카드 번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const cardNumber = '1234567812345678';
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));

    const mockEvent = {
      target: { value: cardNumber },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>,
      );
    });

    expect(result.current.cardNumbersInfo.cardNumbers).toBe(cardNumber);
  });

  it('카드 번호 길이를 초과한 입력에 대해 숫자 ~자리를 입력해주세요.라는 메세지를 보여준다.', () => {
    const numbersOverSixteenLength = '12345678901234567';
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));

    const mockEvent = {
      target: { value: numbersOverSixteenLength },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>,
      );
    });

    expect(result.current.cardNumbersInfo.errorMessage).toBe(
      `숫자 ${cardNumbersLength}자리를 입력해주세요.`,
    );
  });

  it('카드 번호 길이 미만의 입력에 대해 숫자 ~자리를 입력해주세요.라는 메세지를 보여준다.', () => {
    const numbersUnderSixteenLength = '12345';
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));

    const mockEvent = {
      target: { value: numbersUnderSixteenLength },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>,
      );
    });

    expect(result.current.cardNumbersInfo.errorMessage).toBe(
      `숫자 ${cardNumbersLength}자리를 입력해주세요.`,
    );
  });
});
