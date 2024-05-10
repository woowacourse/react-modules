import { renderHook } from '@testing-library/react';
import useCardNumberValidate from '../useCardNumberValidation';
import ERROR_MESSAGES from '../constants/error';
import { act } from 'react';

describe('카드 번호 입력 유효성 검증 커스텀 훅 테스트', () => {
  it("카드 번호에 공백이 입력됐을경우 isError가 true가 되고 errorMessage가 '불필요한 공백이 포함되어 있습니다.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const cardNumberValue = ' ';

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.cardNumberValidateHandler(cardNumberValue, 'Visa');
    });

    expect(result.current.cardNumberValidation.errorMessage).toBe(errorMessage);
    expect(result.current.cardNumberValidation.isError).toBe(true);
  });

  it("카드 번호에 숫자가 아닌 다른 값이 입력 될 경우 isError가 true가 되고 errorMessage가 '숫자만 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_NUMBER;
    const cardNumberValue = 'a';

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.cardNumberValidateHandler(cardNumberValue, 'Visa');
    });

    expect(result.current.cardNumberValidation.errorMessage).toBe(errorMessage);
    expect(result.current.cardNumberValidation.isError).toBe(true);
  });

  it("카드 번호가 4자 이하로 입력될 경우 isError가 true가 되고 errorMessage가 '4자로 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_MAX_LENGTH;
    const cardNumberValue = '411';

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.cardNumberValidateHandler(cardNumberValue, 'Visa');
    });

    expect(result.current.cardNumberValidation.errorMessage).toBe(
      '16' + errorMessage
    );
    expect(result.current.cardNumberValidation.isError).toBe(true);
  });

  it("카드 번호가 '5123123412341234'가 입력된 경우 isError가 false이고 errorMessage가 ''라는 빈 문자열이다.", async () => {
    const errorMessage = '';
    const cardNumberValue = '5123123412341234';

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.cardNumberValidateHandler(cardNumberValue, 'Visa');
    });

    expect(result.current.cardNumberValidation.errorMessage).toBe(errorMessage);
    expect(result.current.cardNumberValidation.isError).toBe(false);
  });
});
