import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardPassword from './useCardPassword';
import { NUMBER_ERROR_MESSAGES } from '../../utils/validation/validation';

const VALID_CARD_PASSWORD_LENGTH = 2;

describe('useCardPassword 커스텀 훅 테스트', () => {
  const setup = () => {
    const { result } = renderHook(() => useCardPassword(VALID_CARD_PASSWORD_LENGTH));
    return result;
  };

  const setPassword = (result: any, password: string) => {
    act(() => result.current.handlePasswordChange(password));
  };

  describe(`올바른 ${VALID_CARD_PASSWORD_LENGTH}자의 카드 비밀번호를 입력한 경우`, () => {
    const password = '12';
    it(`올바른 ${VALID_CARD_PASSWORD_LENGTH}자의 카드 비밀번호를 입력하면 유효하다`, () => {
      const result = setup();
      setPassword(result, password);

      expect(result.current.isValidPassword).toBe(true);
    });

    it(`올바른 ${VALID_CARD_PASSWORD_LENGTH}자의 카드 비밀번호를 입력하면 해당 값을 저장한다.`, () => {
      const result = setup();
      setPassword(result, password);

      expect(result.current.password).toBe(password);
    });
  });

  describe('올바르지 않은 비밀번호를 입력한 경우', () => {
    it('숫자 외의 값을 입력하면 유효하지 않다.', () => {
      const result = setup();
      setPassword(result, 'v');

      expect(result.current.isValidPassword).toBe(false);
    });

    it('숫자 외의 값을 입력하면 에러 메세지를 표시한다.', () => {
      const result = setup();
      setPassword(result, 'v');

      expect(result.current.passwordErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });

    it('공백을 입력하면 유효하지 않다.', () => {
      const invalidCVCNumber = ' ';
      const result = setup();

      setPassword(result, invalidCVCNumber);

      expect(result.current.isValidPassword).toBe(false);
    });

    it('공백을 입력하면 에러 메세지를 표시한다.', () => {
      const invalidCVCNumber = ' ';
      const result = setup();

      setPassword(result, invalidCVCNumber);

      expect(result.current.passwordErrorMessage).toBe(NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    });

    it(`${VALID_CARD_PASSWORD_LENGTH}자 미만의 카드 비밀번호를 입력하면 유효하지 않다.`, () => {
      const result = setup();
      setPassword(result, '1');

      expect(result.current.isValidPassword).toBe(false);
    });

    it(`${VALID_CARD_PASSWORD_LENGTH}자 미만의 카드 비밀번호를 입력하면 에러 메세지를 표시한다.`, () => {
      const result = setup();
      setPassword(result, '1');

      expect(result.current.passwordErrorMessage).toBe(NUMBER_ERROR_MESSAGES.MAX_LENGTH(VALID_CARD_PASSWORD_LENGTH));
    });
  });
});
