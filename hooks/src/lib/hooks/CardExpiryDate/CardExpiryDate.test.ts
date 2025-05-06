import { renderHook, act } from "@testing-library/react";
import useCardExpiryDate from "./index";

describe("useCardExpiryDate", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "0727";
    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleExpiryChange(userInput);
    });
    expect(result.current.expiryDate.value).toBe(userInput);
  });

  it("카드만료일에 문자열을 입력하면 오류가 발생해야한다.", () => {
    const invalidKoreanInput = "ㅁㅁㅁㅁ";
    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleExpiryChange(invalidKoreanInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("카드만료일에 3자리를 입력하면 오류가 발생해야한다.", () => {
    const invalidLengthInput = "122";
    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleExpiryChange(invalidLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "유효기간은 4자리여야 합니다."
    );
  });

  it("카드 만료일에 유효하지 않은 월(1~12월)을 입력하면 에러가 발생한다.", () => {
    const invalidMonthInput = "1325";

    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleExpiryChange(invalidMonthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "월은 1~12 사이여야 합니다."
    );
  });

  it("카드 만료일에 년도는 유효하지만 기간이 지난 월을 입력하면 에러가 발생한다.", () => {
    const invalidMonthInput = "0325";

    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleExpiryChange(invalidMonthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "유효기간이 만료되었습니다."
    );
  });

  it("키드만료일에 옳은 숫자 4자리를 입력하면 유효하게 작동해야한다. ", () => {
    const currentDate = new Date();
    const futureYear = (currentDate.getFullYear() + 3) % 100;
    const futureMonth = currentDate.getMonth() + 1;

    const validInput = `${futureMonth.toString().padStart(2, "0")}${futureYear.toString().padStart(2, "0")}`;

    const { result } = renderHook(() => useCardExpiryDate());

    act(() => {
      result.current.handleExpiryChange(validInput);
    });

    expect(result.current.errorState.isValid).toBe(true);
  });
});
