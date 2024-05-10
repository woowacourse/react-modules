import { CARD_BRAND } from "../constants/card-custom-hook";
import { decideCardBrand } from "./useCardNumber.utils";

describe("decideCardBrand 함수 동작 테스트", () => {
  it.each([
    ["4123123412341234", CARD_BRAND.visa],
    ["5123123412341234", CARD_BRAND.master],
    ["5523123412341234", CARD_BRAND.master],
    ["36121234561234", CARD_BRAND.diners],
    ["3412123451234", CARD_BRAND.amex],
    ["3712123451234", CARD_BRAND.amex],
    ["6241123412341234", CARD_BRAND.unionPay],
    ["6261123412341234", CARD_BRAND.unionPay],
    ["6282123412341234", CARD_BRAND.unionPay],
    ["6288123412341234", CARD_BRAND.unionPay],
    ["6221261212341234", CARD_BRAND.unionPay],
    ["6229251212341234", CARD_BRAND.unionPay],
  ])("%p로 카드 번호 입력이 주어질 경우, 카드 브랜드는 %p임을 판단할 수 있어야 한다.", (cardNumber, expectedCardBrand) => {
    const cardBrand = decideCardBrand(cardNumber);

    expect(cardBrand).toBe(expectedCardBrand);
  });

  const MASTER_CARD_BOUNDARY_VALUE_TEST_CASES = ["5012123412341234", "5612123412341234"];

  it.each(MASTER_CARD_BOUNDARY_VALUE_TEST_CASES)("master 카드 브랜드가 아닌 경계값을 입력할 경우, 카드 브랜드는 none이어야 한다.", (cardNumbers) => {
    const cardBrand = decideCardBrand(cardNumbers);

    expect(cardBrand).toBe(CARD_BRAND.none);
  });

  const AMEX_CARD_BOUNDARY_VALUE_TEST_CASES = ["331212341234123", "381212341234123"];

  it.each(AMEX_CARD_BOUNDARY_VALUE_TEST_CASES)("amex 카드 브랜드가 아닌 경계값을 입력할 경우, 카드 브랜드는 none이어야 한다.", (cardNumbers) => {
    const cardBrand = decideCardBrand(cardNumbers);

    expect(cardBrand).toBe(CARD_BRAND.none);
  });

  const UNIONPAY_BOUNDARY_VALUE_TEST_CASES = [
    "6231123412341234",
    "6271123412341234",
    "6281123412341234",
    "6289123412341234",
    "6221251212341234",
    "6229261212341234",
  ];

  it.each(UNIONPAY_BOUNDARY_VALUE_TEST_CASES)("unionPay 카드 브랜드가 아닌 경계값을 입력할 경우, 카드 브랜드는 none이어야 한다.", (cardNumbers) => {
    const cardBrand = decideCardBrand(cardNumbers);

    expect(cardBrand).toBe(CARD_BRAND.none);
  });
});
