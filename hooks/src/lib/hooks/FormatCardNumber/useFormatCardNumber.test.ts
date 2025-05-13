import { renderHook } from "@testing-library/react";
import useFormatCardNumber from "./index";
import { CardBrand } from "@/lib/cardBrand/types";

function testCardNumberFormatting(
  cardNumber: string,
  cardBrand: CardBrand,
  expectedFormat: string
) {
  const { result } = renderHook(() =>
    useFormatCardNumber({
      cardNumber,
      cardBrand,
    })
  );
  expect(result.current).toBe(expectedFormat);
}

describe("useFormatCardNumber", () => {
  describe("AMEX 카드 브랜드", () => {
    it("AMEX 카드 번호를 올바른 형식(XXXX-XXXXXX-XXXXX)으로 포맷팅한다", () => {
      testCardNumberFormatting("341234567890123", "AMEX", "3412-345678-90123");
      testCardNumberFormatting("371234567890123", "AMEX", "3712-345678-90123");
    });
  });

  describe("Diners 카드 브랜드", () => {
    it("Diners 카드 번호를 올바른 형식(XXXX-XXXXXXX-XXXX)으로 포맷팅한다", () => {
      testCardNumberFormatting("36123456789012", "Diners", "3612-345678-9012");
    });
  });

  describe("Visa 카드 브랜드", () => {
    it("Visa 카드 번호를 올바른 형식(XXXX-XXXX-XXXX-XXXX)으로 포맷팅한다", () => {
      testCardNumberFormatting(
        "4234567890123456",
        "Visa",
        "4234-5678-9012-3456"
      );
    });
  });

  describe("MasterCard 카드 브랜드", () => {
    it("MasterCard 카드 번호를 올바른 형식(XXXX-XXXX-XXXX-XXXX)으로 포맷팅한다", () => {
      testCardNumberFormatting(
        "5112123412341234",
        "MasterCard",
        "5112-1234-1234-1234"
      );
      testCardNumberFormatting(
        "5512123412341234",
        "MasterCard",
        "5512-1234-1234-1234"
      );
    });
  });

  describe("UnionPay 카드 브랜드", () => {
    it("UnionPay 카드 번호를 올바른 형식(XXXX-XXXX-XXXX-XXXX)으로 포맷팅한다.", () => {
      testCardNumberFormatting(
        "6221261234567890",
        "UnionPay",
        "6221-2612-3456-7890"
      );
      testCardNumberFormatting(
        "6229251234567890",
        "UnionPay",
        "6229-2512-3456-7890"
      );

      testCardNumberFormatting(
        "6241261234567890",
        "UnionPay",
        "6241-2612-3456-7890"
      );
      testCardNumberFormatting(
        "6269251234567890",
        "UnionPay",
        "6269-2512-3456-7890"
      );

      testCardNumberFormatting(
        "6282261234567890",
        "UnionPay",
        "6282-2612-3456-7890"
      );
      testCardNumberFormatting(
        "6288251234567890",
        "UnionPay",
        "6288-2512-3456-7890"
      );
    });
  });
});
