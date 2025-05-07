import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import useCardNumber from '../lib/cardNumber/useCardNumber';

describe('useCardNumber 성공 케이스', () => {
  it('모든 입력값이 유효할 경우, 에러 메시지는 비어 있어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({ target: { value: '1234' } } as ChangeEvent<HTMLInputElement>, 'first');
      result.current.handleCardNumberChange({ target: { value: '1134' } } as ChangeEvent<HTMLInputElement>, 'second');
    });

    expect(result.current.errorState.errorMessage).toBe('');
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({ target: { value: '1234' } } as ChangeEvent<HTMLInputElement>, 'first');
    });

    expect(result.current.cardNumber.first).toBe('1234');
  });
});

describe('useCardNumber 실패 케이스', () => {
  it('카드 번호에 숫자가 아닌 문자가 포함되면 형식 오류 메시지를 반환해야 한다.', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({ target: { value: '123d' } } as ChangeEvent<HTMLInputElement>, 'first');
    });

    expect(result.current.errorState.errorMessage).toBe('숫자만 입력하세요.');
  });

  it('카드 번호 중 하나가 4자리보다 짧으면 길이 오류 메시지를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({ target: { value: '123' } } as ChangeEvent<HTMLInputElement>, 'first');
    });

    expect(result.current.errorState.errorMessage).toBe('4자리 숫자를 입력하세요.');
  });

  it('카드 번호 중 하나가 4자리보다 길면 길이 오류 메시지를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({ target: { value: '12345' } } as ChangeEvent<HTMLInputElement>, 'first');
    });

    expect(result.current.errorState.errorMessage).toBe('4자리 숫자를 입력하세요.');
  });
});
