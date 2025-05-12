import { renderHook } from "@testing-library/react";
import { useCardNumber } from "../lib";
import { act } from "react";

describe("cardType 테스트", () => {
  it("VISA 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("4321123412341234");
    });

    expect(result.current.cardType).toBe("VISA");
  });

  it("Master 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("5221123412341234");
    });

    expect(result.current.cardType).toBe("MasterCard");
  });
  it("Diners 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("36211234121234");
    });

    expect(result.current.cardType).toBe("Diners");
  });
  it("AMEX 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("341212345612345");
    });

    expect(result.current.cardType).toBe("AMEX");
  });
  it("UnionPay 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("6221261212341234");
    });

    expect(result.current.cardType).toBe("UnionPay");
  });
});

// describe("cardType에 따른 포맷팅 테스트", () => {
//   it("VISA 카드 포맷팅 테스트", () => {
//     const { result } = renderHook(() => useCardNumber());

//     act(() => {
//       result.current.handleCardNumber("4321", "first");
//       result.current.handleCardNumber("1234", "second");
//       result.current.handleCardNumber("1234", "third");
//       result.current.handleCardNumber("123", "fourth");
//     });

//     expect(result.current.isCardNumberError).toEqual([
//       false,
//       false,
//       false,
//       true,
//     ]);
//     expect(result.current.errorText).toBe("fourth 입력값은 4자리여야 합니다.");
//   });
//   it("Master 카드 포맷팅 테스트", () => {
//     const { result } = renderHook(() => useCardNumber());

//     act(() => {
//       result.current.handleCardNumber("5221", "first");
//       result.current.handleCardNumber("1234", "second");
//       result.current.handleCardNumber("1234", "third");
//       result.current.handleCardNumber("123", "fourth");
//     });

//     expect(result.current.isCardNumberError).toEqual([
//       false,
//       false,
//       false,
//       true,
//     ]);
//     expect(result.current.errorText).toBe("fourth 입력값은 4자리여야 합니다.");
//   });
// });
// it("Diners 카드 포맷팅 테스트", () => {
//   const { result } = renderHook(() => useCardNumber());

//   act(() => {
//     result.current.handleCardNumber("3621", "first");
//     result.current.handleCardNumber("1234", "second");
//     result.current.handleCardNumber("1234", "third");
//   });

//   expect(result.current.isCardNumberError).toEqual([false, true, false, false]);
//   expect(result.current.errorText).toBe("second 입력값은 6자리여야 합니다.");
// });

// it("AMEX 카드 포맷팅 테스트", () => {
//   const { result } = renderHook(() => useCardNumber());

//   act(() => {
//     result.current.handleCardNumber("3412", "first");
//     result.current.handleCardNumber("123456", "second");
//     result.current.handleCardNumber("1234", "third");
//   });

//   expect(result.current.isCardNumberError).toEqual([false, false, true, false]);
//   expect(result.current.errorText).toBe("third 입력값은 5자리여야 합니다.");
// });
// it("UnionPay 카드 포맷팅 테스트", () => {
//   const { result } = renderHook(() => useCardNumber());

//   act(() => {
//     result.current.handleCardNumber("6221", "first");
//     result.current.handleCardNumber("2612", "second");
//     result.current.handleCardNumber("1234", "third");
//     result.current.handleCardNumber("123", "fourth");
//   });

//   expect(result.current.isCardNumberError).toEqual([false, false, false, true]);
//   expect(result.current.errorText).toBe("fourth 입력값은 4자리여야 합니다.");
// });
