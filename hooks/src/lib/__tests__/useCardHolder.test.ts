import { renderHook } from "@testing-library/react";
import useCardHolder from "../hooks/useCardHolder";
import { act } from "react";
import { ERROR_MESSAGES } from "../constants/errorMessage";

const INPUT_LENGTH = 20;

describe("useCardHolder 테스트", () => {
  test("초기 cardHolder 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardHolder(INPUT_LENGTH));

    expect(result.current.cardHolder).toBe("");
    expect(result.current.cardHolderError).toBeFalsy();
  });

  test.each([["Bing Bong"], ["BingBong"]])(
    "카드 소유주 이름이 유효하게 입력될 경우(영어 대소문자, 공백), 입력될 경우 에러 상태가 false 여야 한다.",
    (input) => {
      const { result } = renderHook(() => useCardHolder(INPUT_LENGTH));
      act(() => {
        result.current.handleCardHolderChange(input);
      });
      expect(result.current.cardHolderError).toBeFalsy();
    }
  );
});

describe("useCardHolder 예외 테스트", () => {
  test.each([["프룬"], ["12345"], ["!@#$%^"], ["FF1"]])(
    "카드 소유주 이름이 유효하지 않게 입력될 경우(한글, 숫자, 특수문자), 입력될 경우 에러 상태가 true 여야 한다.",
    (input) => {
      const { result } = renderHook(() => useCardHolder(INPUT_LENGTH));
      act(() => {
        result.current.handleCardHolderChange(input);
      });
      expect(result.current.cardHolderError).toBeTruthy();
    }
  );

  test("카드 소유주 이름에 에러가 있는 경우 적절한 에러 메시지를 반환해야 한다.", () => {
    const { result } = renderHook(() => useCardHolder(INPUT_LENGTH));

    act(() => {
      result.current.handleCardHolderChange("BING1");
    });

    expect(result.current.getCardHolderErrorMessage()).toBe(
      ERROR_MESSAGES.holder
    );
  });
});
