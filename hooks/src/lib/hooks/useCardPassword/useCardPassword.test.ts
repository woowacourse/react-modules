import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardPassword from './useCardPassword';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';

const VALID_CARD_PASSWORD_LENGTH = 2;

describe('useCardPassword 커스텀 훅 테스트', () => {
  it('올바른 카드 비밀번호를 입력하면 유효하다', () => {
    const { result } = renderHook(() => useCardPassword(VALID_CARD_PASSWORD_LENGTH));
    act(() => {
      result.current.handlePasswordChange('12');
    });
    expect(result.current.isValidPassword).toBe(true);
  });

  it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
    const { result } = renderHook(() => useCardPassword(VALID_CARD_PASSWORD_LENGTH));
    act(() => {
      result.current.handlePasswordChange('v');
    });
    expect(result.current.isValidPassword).toBe(false);
  });

  it('숫자 외의 값을 입력하면 에러 메세지를 표시한다.', () => {
    const { result } = renderHook(() => useCardPassword(VALID_CARD_PASSWORD_LENGTH));
    act(() => {
      result.current.handlePasswordChange('v');
    });
    expect(result.current.passwordErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
  });

  it(`${VALID_CARD_PASSWORD_LENGTH}자 미만의 카드 비밀번호를 입력하면 유효하지 않다.`, () => {
    const { result } = renderHook(() => useCardPassword(VALID_CARD_PASSWORD_LENGTH));
    act(() => {
      result.current.handlePasswordChange('1');
    });
    expect(result.current.isValidPassword).toBe(false);
  });

  it(`${VALID_CARD_PASSWORD_LENGTH}자 미만의 카드 비밀번호를 입력하면 에러 메세지를 표시한다.`, () => {
    const { result } = renderHook(() => useCardPassword(VALID_CARD_PASSWORD_LENGTH));
    act(() => {
      result.current.handlePasswordChange('1');
    });
    expect(result.current.passwordErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH(VALID_CARD_PASSWORD_LENGTH));
  });
});
