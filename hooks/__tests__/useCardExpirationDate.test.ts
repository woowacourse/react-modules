import { CARD_EXPIRATION_DATE_ERROR_MESSAGE } from "./../src/useCardExpirationDate/useCardExpirationDate";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import useCardExpirationDate, {
  CARD_EXPIRATION_DATE_MAX_LENGTH,
} from "../src/useCardExpirationDate/useCardExpirationDate";

describe("useCardExpirationDate hook 테스트", () => {
  it("초깃값은 빈 문자열이다", () => {
    const { result } = renderHook(() => useCardExpirationDate());

    expect(result.current.cardExpirationDate).toEqual({
      MONTH: "",
      YEAR: "",
    });
  });

  it("초기값을 설정 할 수 있다", () => {
    const { result } = renderHook(() =>
      useCardExpirationDate({
        MONTH: "12",
        YEAR: "34",
      })
    );

    expect(result.current.cardExpirationDate).toEqual({
      MONTH: "12",
      YEAR: "34",
    });
  });

  it("handleCardExpirationDateChange를 호출하면 유효 기간이 변경된다", () => {
    const { result } = renderHook(() =>
      useCardExpirationDate({
        MONTH: "12",
        YEAR: "34",
      })
    );

    const event = {
      target: {
        value: "11",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardExpirationDateChange({ target: "MONTH" })(event);
    });
    expect(result.current.cardExpirationDate).toEqual({
      MONTH: "11",
      YEAR: "34",
    });
  });

  describe("잘못된 값이 들어오면 그에 맞는 에러 상태를 반환한다", () => {
    it(`${CARD_EXPIRATION_DATE_MAX_LENGTH}자리 이상의 input이 들어오면 에러 상태를 반환한다`, () => {
      const { result } = renderHook(() => useCardExpirationDate());

      const event = {
        target: {
          value: "123",
        },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleCardExpirationDateChange({ target: "MONTH" })(
          event
        );
      });
      expect(result.current.error.MONTH).toBe(true);
      expect(result.current.errorMessage.MONTH).toEqual(
        CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_LENGTH
      );
    });

    it("숫자가 아닌 input이 들어오면 에러 상태를 반환한다", () => {
      const { result } = renderHook(() => useCardExpirationDate());

      const event = {
        target: {
          value: "1a",
        },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleCardExpirationDateChange({ target: "MONTH" })(
          event
        );
      });
      expect(result.current.error.MONTH).toBe(true);
      expect(result.current.errorMessage.MONTH).toEqual(
        CARD_EXPIRATION_DATE_ERROR_MESSAGE.NOT_NUMERIC
      );
    });

    describe("유효기간의 달은 1 ~ 12 사이의 정수여야 한다.", () => {
      it("입력된 달이 1보다 작으면 오류를 발생시킨다.", () => {
        const { result } = renderHook(() => useCardExpirationDate());

        const event = {
          target: {
            value: "00",
          },
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => {
          result.current.handleCardExpirationDateChange({ target: "MONTH" })(
            event
          );
        });
        expect(result.current.error.MONTH).toBe(true);
        expect(result.current.errorMessage.MONTH).toEqual(
          CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_MONTH_RANGE
        );
      });

      it("입력된 달이 12보다 크면 오류를 발생시킨다.", () => {
        const { result } = renderHook(() => useCardExpirationDate());

        const event = {
          target: {
            value: "13",
          },
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => {
          result.current.handleCardExpirationDateChange({ target: "MONTH" })(
            event
          );
        });
        expect(result.current.error.MONTH).toBe(true);
        expect(result.current.errorMessage.MONTH).toEqual(
          CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_MONTH_RANGE
        );
      });
    });

    it("현재 날짜보다 이전이면 에러 상태를 반환한다.", () => {
      const currentDate = new Date();
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
      const currentYear = String(currentDate.getFullYear()).slice(-2);

      const { result } = renderHook(() =>
        useCardExpirationDate({
          MONTH: "",
          YEAR: currentYear,
        })
      );

      const event = {
        target: {
          value: "0" + String(Number(currentMonth) - 1),
        },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleCardExpirationDateChange({ target: "MONTH" })(
          event
        );
      });
      expect(result.current.error.MONTH).toBe(true);
      expect(result.current.errorMessage.MONTH).toEqual(
        CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_DATE
      );
    });

    it("현재보다 이전 년도를 입력하면 에러 상태를 반환한다.", () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;

      const { result } = renderHook(() =>
        useCardExpirationDate({
          MONTH: "12",
          YEAR: "",
        })
      );

      const event = {
        target: {
          value: String(currentYear - 1),
        },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleCardExpirationDateChange({ target: "YEAR" })(
          event
        );
      });
      expect(result.current.error.YEAR).toBe(true);
      expect(result.current.errorMessage.YEAR).toEqual(
        CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_DATE
      );
    });
  });

  it("달을 입력 중일 때는 에러를 반환하지 않는다. (1자리인 경우 에러를 반환하지 않는다.))", () => {
    const currentDate = new Date();
    const currentYear = String(currentDate.getFullYear()).slice(-2);

    const { result } = renderHook(() =>
      useCardExpirationDate({
        MONTH: "",
        YEAR: currentYear,
      })
    );

    const event = {
      target: {
        value: "0",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardExpirationDateChange({ target: "MONTH" })(event);
    });
    expect(result.current.error.MONTH).toBe(false);
    expect(result.current.errorMessage.MONTH).toEqual("");
  });
});
