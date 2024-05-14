import { CARD_BRAND } from "../constants/card-custom-hook";
import { decideCardBrand } from "./useCardNumber.utils";

describe("decideCardBrand", () => {
  describe("카드 브랜드 판단", () => {
    describe("visa", () => {
      it.each([["4" + "1".repeat(15), CARD_BRAND.visa]])("카드 번호가 %s일 경우, 카드 브랜드는 %s이다", (cardNumbers, expectedCardBrand) => {
        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).toBe(expectedCardBrand);
      });
    });

    describe("master", () => {
      it.each([
        ["51" + "1".repeat(14), CARD_BRAND.master],
        ["55" + "1".repeat(14), CARD_BRAND.master],
      ])("카드 번호가 %s일 경우, 카드 브랜드는 %s이다", (cardNumbers, expectedCardBrand) => {
        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).toBe(expectedCardBrand);
      });
    });

    describe("diners", () => {
      it.each([["36" + "1".repeat(12), CARD_BRAND.diners]])("카드 번호가 %s일 경우, 카드 브랜드는 %s이다", (cardNumbers, expectedCardBrand) => {
        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).toBe(expectedCardBrand);
      });
    });

    describe("amex", () => {
      it.each([
        ["34" + "1".repeat(13), CARD_BRAND.amex],
        ["37" + "1".repeat(13), CARD_BRAND.amex],
      ])("카드 번호가 %s일 경우, 카드 브랜드는 %s이다", (cardNumbers, expectedCardBrand) => {
        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).toBe(expectedCardBrand);
      });
    });

    describe("unionpay", () => {
      it.each([
        ["624" + "1".repeat(13), CARD_BRAND.unionPay],
        ["626" + "1".repeat(13), CARD_BRAND.unionPay],
        ["6282" + "1".repeat(12), CARD_BRAND.unionPay],
        ["6288" + "1".repeat(12), CARD_BRAND.unionPay],
        ["622126" + "1".repeat(10), CARD_BRAND.unionPay],
        ["622925" + "1".repeat(10), CARD_BRAND.unionPay],
      ])("카드 번호가 %s일 경우, 카드 브랜드는 %s이다", (cardNumbers, expectedCardBrand) => {
        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).toBe(expectedCardBrand);
      });
    });
  });

  describe("카드 브랜드 경계값 판단", () => {
    describe("visa", () => {
      it.each([
        ["3" + "1".repeat(15), "4로 시작하지 않는 값"],
        ["5" + "1".repeat(15), "4로 시작하지 않는 값"],
      ])("카드 번호가 %s인 경우, visa 카드가 아니다", (cardNumbers, description) => {
        console.log(description);

        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).not.toBe(CARD_BRAND.visa);
      });
    });

    describe("master", () => {
      it.each([
        ["50" + "1".repeat(14), "51로 시작하지 않는 값"],
        ["56" + "1".repeat(14), "55로 시작하지 않는 값"],
      ])("카드 번호가 %s인 경우, amex 카드가 아니다", (cardNumbers, description) => {
        console.log(description);

        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).not.toBe(CARD_BRAND.master);
      });
    });

    describe("diners", () => {
      it.each([["35" + "1".repeat(12), "36로 시작하지 않는 값"]])("카드 번호가 %s인 경우, visa 카드가 아니다", (cardNumbers, description) => {
        console.log(description);

        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).not.toBe(CARD_BRAND.diners);
      });
    });

    describe("amex", () => {
      it.each([
        ["33" + "1".repeat(13), "33으로 시작하지 않는 값"],
        ["38" + "1".repeat(13), "37로 시작하지 않는 값"],
      ])("카드 번호가 %s인 경우, amex 카드가 아니다", (cardNumbers, description) => {
        console.log(description);

        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).not.toBe(CARD_BRAND.amex);
      });
    });

    describe("union", () => {
      it.each([
        ["623" + "1".repeat(13), "624 - 626 범위를 벗어난 값"],
        ["627" + "1".repeat(13), "624 - 626 범위를 벗어난 값"],
        ["6281" + "1".repeat(12), "6282 - 6288 범위를 벗어난 값"],
        ["6289" + "1".repeat(12), "6282 - 6288 범위를 벗어난 값"],
        ["622125" + "1".repeat(10), "622126 - 622925 범위를 벗어난 값"],
        ["622926" + "1".repeat(10), "622126 - 622925 범위를 벗어난 값"],
      ])("카드 번호가 %s인 경우 union 카드가 아니다.", (cardNumbers, description) => {
        console.log(description);

        const cardBrand = decideCardBrand(cardNumbers);

        expect(cardBrand).not.toBe(CARD_BRAND.unionPay);
        expect(cardBrand).toBe(CARD_BRAND.none);
      });
    });
  });
});
