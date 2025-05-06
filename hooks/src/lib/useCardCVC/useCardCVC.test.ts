import { renderHook, act } from '@testing-library/react';
import { useCardCVC } from './useCardCVC';
import { CARD_CVC_ERROR } from '../constants/errorMessages';

describe('useCardCVC 훅 테스트', () => {
  it('초기값이 올바르게 설정되어야 한다', () => {
    const initialCVC = '123';
    const initialError = '';

    const { result } = renderHook(() => useCardCVC(initialCVC, initialError));

    expect(result.current.cardCVC).toBe(initialCVC);
    expect(result.current.cardCVCError).toBe(initialError);
  });

  it('숫자가 아닌 값이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardCVC('', ''));

    act(() => {
      result.current.handleCardCVCChange({
        target: { value: 'a' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCError).toBe(CARD_CVC_ERROR.onlyNumbers);
    expect(result.current.cardCVC).toBe('');
  });

  it('숫자가 입력되면 cardCVC가 업데이트되고 에러 메시지가 지워져야 한다', () => {
    const { result } = renderHook(() => useCardCVC('', '초기 에러'));

    act(() => {
      result.current.handleCardCVCChange({
        target: { value: '123' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVC).toBe('123');
    expect(result.current.cardCVCError).toBe('');
  });

  it('빈 값이 입력되면 cardCVC가 빈 문자열로 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardCVC('123', ''));

    act(() => {
      result.current.handleCardCVCChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVC).toBe('');
    expect(result.current.cardCVCError).toBe('');
  });

  it('cardCVC가 최대 길이와 일치하면 isCardCVCValid가 true를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardCVC('123', ''));

    expect(result.current.isCardCVCValid()).toBe(true);
  });

  it('cardCVC가 비어 있으면 isCardCVCValid가 false를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardCVC('', ''));

    expect(result.current.isCardCVCValid()).toBe(false);
  });

  it('cardCVC가 최대 길이보다 짧으면 isCardCVCValid가 false를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardCVC('12', ''));

    expect(result.current.isCardCVCValid()).toBe(false);
  });
});
