import { renderHook, waitFor } from '@testing-library/react';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';
import useCardPassword from './useCardPassword';

const VALID_CARD_PASSWORD_LENGTH = 2;

describe('useCardPassword 커스텀 훅 테스트', () => {
  const { result } = renderHook(() => useCardPassword());

  it('올바른 카드 비밀번호를 입력하면 유효하다', () => {
    result.current.handlePasswordChange('12');

    waitFor(() => expect(result.current.isValidPassword).toBe(true));
  });

  it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
    result.current.handlePasswordChange('v');

    waitFor(() => expect(result.current.isValidPassword).toBe(false));
  });

  it('숫자 외의 값을 입력하면 에러 메세지를 표시한다.', () => {
    result.current.handlePasswordChange('v');

    waitFor(() => expect(result.current.isValidPassword).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER));
  });

  it(`${VALID_CARD_PASSWORD_LENGTH}자 미만의 카드 번호를 입력하면 유효하지 않다.`, () => {
    result.current.handlePasswordChange('1');

    waitFor(() => expect(result.current.isValidPassword).toBe(false));
  });

  it(`${VALID_CARD_PASSWORD_LENGTH}자 미만의 카드 번호를 입력하면 에러 메시지를 표시한다.`, () => {
    result.current.handlePasswordChange('1');

    waitFor(() => expect(result.current.isValidPassword).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH));
  });
});
