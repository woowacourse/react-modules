import { renderHook } from '@testing-library/react';
import usePasswordValidation from '../useCardPasswordValidation';
import ERROR_MESSAGES from '../constants/error';
import { act } from 'react';

describe('비밀번호 입력 유효성 검증 커스텀 훅 테스트', () => {
  it("카드 비밀번호에 공백이 입력됐을경우 isError가 true가 되고 errorMessage가 '불필요한 공백이 포함되어 있습니다.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const passwordValue = ' ';

    const { result } = renderHook(() => usePasswordValidation());

    act(() => {
      result.current.passwordValidateHandler(passwordValue);
    });

    expect(result.current.passwordValidation.errorMessage).toBe(errorMessage);
    expect(result.current.passwordValidation.isError).toBe(true);
  });

  it("카드 비밀번호에 숫자가 아닌 값이 입력됐을경우 isError가 true가 되고 errorMessage가 '숫자만 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_NUMBER;
    const passwordValue = 'b';

    const { result } = renderHook(() => usePasswordValidation());

    act(() => {
      result.current.passwordValidateHandler(passwordValue);
    });

    expect(result.current.passwordValidation.errorMessage).toBe(errorMessage);
    expect(result.current.passwordValidation.isError).toBe(true);
  });
  it("카드 비밀번호에 공백이 입력됐을경우 isError가 true가 되고 errorMessage가 '불필요한 공백이 포함되어 있습니다.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_MAX_LENGTH;
    const passwordValue = '1';

    const { result } = renderHook(() => usePasswordValidation());

    act(() => {
      result.current.passwordValidateHandler(passwordValue);
    });

    expect(result.current.passwordValidation.errorMessage).toBe(
      '2' + errorMessage
    );
    expect(result.current.passwordValidation.isError).toBe(true);
  });

  it("카드 비밀번호에 '12' 입력됐을경우 isError가 false가 되고 errorMessage가 ''이다.", async () => {
    const errorMessage = '';
    const passwordValue = '12';

    const { result } = renderHook(() => usePasswordValidation());

    act(() => {
      result.current.passwordValidateHandler(passwordValue);
    });

    expect(result.current.passwordValidation.errorMessage).toBe(errorMessage);
    expect(result.current.passwordValidation.isError).toBe(false);
  });
});
