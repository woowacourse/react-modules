import { renderHook } from "@testing-library/react";
import { useCardBrand } from "./useCardBrand";
import { detectCardBrand } from "./utils/detectCardBrand";

jest.mock("./utils/detectCardBrand", () => ({
  detectCardBrand: jest.fn(),
}));

describe("useCardBrand", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("초기 상태에서는 null을 반환해야 함", () => {
    (detectCardBrand as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useCardBrand(""));

    expect(result.current).toBeNull();
  });

  it('Visa 카드 번호를 감지하면 "Visa"를 반환해야 함', () => {
    (detectCardBrand as jest.Mock).mockReturnValue("Visa");

    const { result } = renderHook(() => useCardBrand("4111"));

    expect(result.current).toBe("Visa");
  });

  it('MasterCard 카드 번호를 감지하면 "MasterCard"를 반환해야 함', () => {
    (detectCardBrand as jest.Mock).mockReturnValue("MasterCard");

    const { result } = renderHook(() => useCardBrand("5111"));

    expect(result.current).toBe("MasterCard");
  });

  it('AMEX 카드 번호를 감지하면 "AMEX"를 반환해야 함', () => {
    (detectCardBrand as jest.Mock).mockReturnValue("AMEX");

    const { result } = renderHook(() => useCardBrand("3411"));

    expect(result.current).toBe("AMEX");
  });

  it('Diners 카드 번호를 감지하면 "Diners"를 반환해야 함', () => {
    (detectCardBrand as jest.Mock).mockReturnValue("Diners");

    const { result } = renderHook(() => useCardBrand("3611"));

    expect(result.current).toBe("Diners");
  });

  it('UnionPay 카드 번호를 감지하면 "UnionPay"를 반환해야 함', () => {
    (detectCardBrand as jest.Mock).mockReturnValue("UnionPay");

    const { result } = renderHook(() => useCardBrand("6221261111111111"));

    expect(result.current).toBe("UnionPay");
  });

  it("카드 번호가 변경되면 브랜드도 업데이트되어야 함", () => {
    (detectCardBrand as jest.Mock)
      .mockReturnValueOnce("Visa")
      .mockReturnValueOnce("MasterCard");

    const { result, rerender } = renderHook(
      (cardNumber) => useCardBrand(cardNumber),
      { initialProps: "4111" }
    );

    expect(result.current).toBe("Visa");

    rerender("5111");

    expect(result.current).toBe("MasterCard");
  });

  it("지원되지 않는 카드 번호 형식인 경우 null을 반환해야 함", () => {
    (detectCardBrand as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useCardBrand("1234"));

    expect(result.current).toBeNull();
  });
});
