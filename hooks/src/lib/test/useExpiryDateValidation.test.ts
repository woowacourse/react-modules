import { renderHook } from '@testing-library/react';
import useExpiryDateValidation from '../useExpiryDateValidation';
import ERROR_MESSAGES from '../constants/error';
import { act } from 'react';

describe('카드 만료기간 입력 유효성 검증 커스텀 훅 테스트', () => {
  it("만료기간에 공백이 입력됐을경우 isError가 true가 되고 errorMessage가 '불필요한 공백이 포함되어 있습니다.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const expiryDateValue = ' ';
    const expiryDateName = 'month';

    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.expiryDateValidateHandler(expiryDateValue, expiryDateName);
    });

    expect(result.current.expiryDateValidation.errorMessage.month).toBe(
      errorMessage
    );
    expect(result.current.expiryDateValidation.isError[expiryDateName]).toBe(
      true
    );
  });

  it("만료기간에 숫자가 아닌 다른 값이 입력 될 경우 isError가 true가 되고 errorMessage가 '숫자만 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_NUMBER;
    const expiryDateValue = 'a';
    const expiryDateName = 'month';

    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.expiryDateValidateHandler(expiryDateValue, expiryDateName);
    });

    expect(result.current.expiryDateValidation.errorMessage.month).toBe(
      errorMessage
    );
    expect(result.current.expiryDateValidation.isError[expiryDateName]).toBe(
      true
    );
  });

  it("만료기간 중 '월'이 1이상 12이하가 아닌 경우 isError가 true가 되고 errorMessage가 '카드의 유효한 유효기간(월)을 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_MONTH;
    const expiryDateValue = '13';
    const expiryDateName = 'month';

    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.expiryDateValidateHandler(expiryDateValue, expiryDateName);
    });

    expect(result.current.expiryDateValidation.errorMessage.month).toBe(
      errorMessage
    );
    expect(result.current.expiryDateValidation.isError[expiryDateName]).toBe(
      true
    );
  });

  it("만료기간 중 '년'이 0이상 99이하가 아닌 경우 isError가 true가 되고 errorMessage가 '카드의 유효한 유효기간(년)을 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_YEAR;
    const expiryDateValue = '100';
    const expiryDateName = 'year';

    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.expiryDateValidateHandler(expiryDateValue, expiryDateName);
    });

    expect(result.current.expiryDateValidation.errorMessage.year).toBe(
      errorMessage
    );
    expect(result.current.expiryDateValidation.isError[expiryDateName]).toBe(
      true
    );
  });

  it("만료기간이 월이 12라면 isError가 false 되고 errorMessage가 ''라는 값이 된다.", async () => {
    const errorMessage = '';
    const expiryDateMonth = 'month';
    const expiryDateMonthValue = '12';
    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.expiryDateValidateHandler(
        expiryDateMonthValue,
        expiryDateMonth
      );
    });

    expect(result.current.expiryDateValidation.errorMessage.year).toBe(
      errorMessage
    );
    expect(result.current.expiryDateValidation.isError[expiryDateMonth]).toBe(
      false
    );
  });

  it("만료기간이 년이 24라면 isError가 false 되고 errorMessage가 ''라는 값이 된다.", async () => {
    const errorMessage = '';
    const expiryDateYear = 'year';
    const expiryDateYearValue = '24';

    const { result } = renderHook(() => useExpiryDateValidation());

    act(() => {
      result.current.expiryDateValidateHandler(
        expiryDateYearValue,
        expiryDateYear
      );
    });

    expect(result.current.expiryDateValidation.errorMessage.year).toBe(
      errorMessage
    );
    expect(result.current.expiryDateValidation.isError[expiryDateYear]).toBe(
      false
    );
  });
});
