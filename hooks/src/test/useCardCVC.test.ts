import { ChangeEvent } from "react";
import { renderHook, act } from "@testing-library/react";
import { COMMON_ERROR, CVC_NUMBER } from "../lib/constants/validation";
import useCardCVC from "../lib/useCardCVC";

describe("useCardCVC 커스텀 훅 테스트", () => {
  const cardCVCLength = 3;

  it("입력된 CVC가 전부 숫자가 아닌 경우 isValid는 false이고, 숫자를 입력해달라는 에러 메세지를 출력한다.", () => {
    const CVCNotOnlyNumber = "12A";
    const { result } = renderHook(() => useCardCVC(cardCVCLength));

    act(() => {
      result.current.onChangeCardCVC({
        target: { value: CVCNotOnlyNumber },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.isValid).toBe(false);
    expect(result.current.cardCVCInfo.errorMessages).toContain(
      COMMON_ERROR.notNumeric
    );
  });

  it("입력된 CVC 길이가 사용자 설정값을 초과한 경우 isValid는 false이고, CVC는 n자리 숫자라는 에러 메세지를 출력한다.", () => {
    const CVCOverLength = "1234";
    const { result } = renderHook(() => useCardCVC(cardCVCLength));

    act(() => {
      result.current.onChangeCardCVC({
        target: { value: CVCOverLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.isValid).toBe(false);
    expect(result.current.cardCVCInfo.errorMessages).toContain(
      CVC_NUMBER.errorMessage.inValidLength(cardCVCLength)
    );
  });

  it("입력된 CVC 길이가 사용자 설정값 미만인 경우 isValid는 false이고, CVC는 n자리 숫자라는 에러 메세지를 출력한다.", () => {
    const CVCUnderLength = "12";
    const { result } = renderHook(() => useCardCVC(cardCVCLength));

    act(() => {
      result.current.onChangeCardCVC({
        target: { value: CVCUnderLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.isValid).toBe(false);
    expect(result.current.cardCVCInfo.errorMessages).toContain(
      CVC_NUMBER.errorMessage.inValidLength(cardCVCLength)
    );
  });

  it("CVC 입력에 따라 CVC 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardCVC(cardCVCLength));
    const CVC = "123";

    act(() => {
      result.current.onChangeCardCVC({
        target: { value: CVC },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.cardCVC).toBe(CVC);
    expect(result.current.cardCVCInfo.isValid).toBe(true);
    expect(result.current.cardCVCInfo.errorMessages).toHaveLength(0);
  });
});
