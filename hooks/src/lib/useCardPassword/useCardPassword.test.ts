import { renderHook, act } from '@testing-library/react';
import { useCardPassword } from './useCardPassword';
import { CARD_PASSWORD_ERROR } from '../constants/errorMessages';

describe('useCardPassword 훅 테스트', () => {
  it('초기값이 올바르게 설정되어야 한다', () => {
    const initialPassword = '1234';
    const initialError = '';

    const { result } = renderHook(() => useCardPassword(initialPassword, initialError));

    expect(result.current.cardPassword).toBe(initialPassword);
    expect(result.current.cardPasswordError).toBe(initialError);
  });

  it('숫자가 입력되면 cardPassword가 업데이트되고 에러 메시지가 지워져야 한다', () => {
    const { result } = renderHook(() => useCardPassword('', ''));

    act(() => {
      result.current.handleCardPasswordChange({
        target: { value: '1234' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword).toBe('1234');
    expect(result.current.cardPasswordError).toBe('');
  });

  it('패스워드가 최대 길이와 일치하면 isCardPasswordValid가 true를 반환해야 한다', () => {
    const { result } = renderHook(() => useCardPassword('12', ''));

    expect(result.current.isCardPasswordValid()).toBe(true);
  });

  it('숫자가 아닌 값이 입력되면 에러 메시지가 설정되어야 한다', () => {
    const { result } = renderHook(() => useCardPassword('', ''));

    act(() => {
      result.current.handleCardPasswordChange({
        target: { value: 'abcd' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPasswordError).toBe(CARD_PASSWORD_ERROR.onlyNumbers);
  });
});
