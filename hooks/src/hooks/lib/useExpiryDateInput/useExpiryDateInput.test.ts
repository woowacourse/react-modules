import { renderHook, act } from "@testing-library/react-hooks";
import useExpiryDateInput from "./useExpiryDateInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useExpiryDateInput", () => {
  describe("초기 상태 테스트", () => {
    it("유효 기간과 오류 메세지는 초기에 빈 값으로 시작한다.", () => {
      const { result } = renderHook(() => useExpiryDateInput());
      expect(result.current.ExpiryDateState.value).toBe("");
      expect(result.current.ExpiryDateState.errorMessage).toBe("");
    });
  });

  describe("유효하지 않은 입력 테스트", () => {
    it("날짜가 비어 있을 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useExpiryDateInput());
      act(() => {
        result.current.handleExpiryDateChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.ExpiryDateState.isValid).toBe(false);
      expect(result.current.ExpiryDateState.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
    });

    it("날짜에 숫자 이외의 문자가 포함된 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useExpiryDateInput());
      act(() => {
        result.current.handleExpiryDateChange({ target: { value: "12/a" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.ExpiryDateState.isValid).toBe(false);
      expect(result.current.ExpiryDateState.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
    });

    it("월이 범위를 벗어날 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useExpiryDateInput());
      act(() => {
        result.current.handleExpiryDateChange({ target: { value: "13/20" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.ExpiryDateState.isValid).toBe(false);
      expect(result.current.ExpiryDateState.errorMessage).toBe(ERROR_MESSAGE.OUT_OF_RANGE_MONTH);
    });
  });

  describe("유효한 입력 테스트", () => {
    it("유효한 유효 기간을 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useExpiryDateInput());
      act(() => {
        result.current.handleExpiryDateChange({ target: { value: "12/22" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.ExpiryDateState.isValid).toBe(true);
      expect(result.current.ExpiryDateState.errorMessage).toBe("");
    });
  });
});
