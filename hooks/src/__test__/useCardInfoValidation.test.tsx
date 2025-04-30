import { renderHook } from "@testing-library/react";
import useCardInfoValidation from "../lib/useCardInfoValidation";
import * as useCardCvcValidation from "../lib/useCardCvcValidation";
import * as useCardExpirationValidation from "../lib/useCardExpirationValidation";
import * as useCardNumberValidation from "../lib/useCardNumberValidation";
import * as useCardPasswordValidation from "../lib/useCardPasswordValidation";
import { CompanyType } from "../types/Card";

jest.mock("../lib/useCardCvcValidation");
jest.mock("../lib/useCardExpirationValidation");
jest.mock("../lib/useCardNumberValidation");
jest.mock("../lib/useCardPasswordValidation");

describe("useCardInfoValidation 테스트", () => {
  const mockCardInfo = {
    number: { first: "1234", second: "5678", third: "1234", fourth: "5678" },
    expiration: { month: "12", year: "25" },
    company: "BC카드" as CompanyType,
    cvc: "123",
    passwordFront: "12",
  };

  it("모든 카드 정보가 유효한 경우", () => {
    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [false, false, false, false] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [false, false] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: false });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: false });

    const { result } = renderHook(() => useCardInfoValidation(mockCardInfo));
    expect(result.current).toBe(false);
  });

  it("카드 번호가 유효하지 않은 경우", () => {
    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [true, false, false, false] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [false, false] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: false });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: false });

    const { result } = renderHook(() => useCardInfoValidation(mockCardInfo));
    expect(result.current).toBe(true);
  });

  it("유효기간이 유효하지 않은 경우", () => {
    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [false, false, false, false] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [true, false] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: false });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: false });

    const { result } = renderHook(() => useCardInfoValidation(mockCardInfo));
    expect(result.current).toBe(true);
  });

  it("CVC가 유효하지 않은 경우", () => {
    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [false, false, false, false] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [false, false] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: true });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: false });

    const { result } = renderHook(() => useCardInfoValidation(mockCardInfo));
    expect(result.current).toBe(true);
  });

  it("비밀번호가 유효하지 않은 경우", () => {
    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [false, false, false, false] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [false, false] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: false });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: true });

    const { result } = renderHook(() => useCardInfoValidation(mockCardInfo));
    expect(result.current).toBe(true);
  });

  it("카드 회사가 선택되지 않은 경우", () => {
    const invalidCardInfo = { ...mockCardInfo, company: "" as CompanyType };

    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [false, false, false, false] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [false, false] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: false });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: false });

    const { result } = renderHook(() => useCardInfoValidation(invalidCardInfo));
    expect(result.current).toBe(true);
  });

  it("모든 필드가 비어 있는 경우", () => {
    const emptyCardInfo = {
      number: { first: "", second: "", third: "", fourth: "" },
      expiration: { month: "", year: "" },
      company: "" as CompanyType,
      cvc: "",
      passwordFront: "",
    };

    jest
      .spyOn(useCardNumberValidation, "default")
      .mockReturnValue({ isCardNumberError: [true, true, true, true] });
    jest
      .spyOn(useCardExpirationValidation, "default")
      .mockReturnValue({ isCardExpirationError: [true, true] });
    jest
      .spyOn(useCardCvcValidation, "default")
      .mockReturnValue({ isCvcError: true });
    jest
      .spyOn(useCardPasswordValidation, "default")
      .mockReturnValue({ isPasswordError: true });

    const { result } = renderHook(() => useCardInfoValidation(emptyCardInfo));
    expect(result.current).toBe(true);
  });
});
