import { CARD_INPUT_LENGTH, ERROR_MESSAGE } from "../../constants";
import { validateCardNetwork } from "../validateCardNetwork/validateCardNetwork";
import { validateCardNumber } from "./validateCardNumber";

describe(`cardNumber 기능검사`, () => {
  it("카드 번호가 정상적으로 들어왔을떄 에러메시지는 보여주지 않는다.", () => {
    const cardNumbers = ["4123", "1234", "1234", "1234"];
    const cardNetwork = validateCardNetwork(cardNumbers);
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      "",
      "",
      "",
    ]);
  });
});

describe("validateCardNumber", () => {
  it(`VISA: input값이 길이가 유효하지 않다면 에러 메시지를 반환한다`, () => {
    const cardNumbers = ["4123", "1234", "5678", "12"]; // 4-4-4-2
    const cardNetwork = "VISA";
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      "",
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][3]),
    ]);
  });

  it(`MASTER: input값이 길이가 유효하지 않다면 에러 메시지를 반환한다`, () => {
    const cardNumbers = ["5500", "12", "0000", "0004"];
    const cardNetwork = "MASTER";
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][1]),
      "",
      "",
    ]);
  });

  it(`DINERS: input값이 길이가 유효하지 않다면 에러 메시지를 반환한다`, () => {
    const cardNumbers = ["3612", "1234", "1234"];
    const cardNetwork = "DINERS";
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][1]),
      "",
      "",
    ]);
  });

  it(`AMEX: input값이 길이가 유효하지 않다면 에러 메시지를 반환한다`, () => {
    const cardNumbers = ["3412", "11", "1234"]; // 마지막 그룹 초과 (5자 → 6자)
    const cardNetwork = "AMEX";
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][1]),
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][2]),

      "",
    ]);
  });

  it(`UNIONPAY: input값이 길이가 유효하지 않다면 에러 메시지를 반환한다`, () => {
    const cardNumbers = ["6221", "123", "567", "1234"];
    const cardNetwork = "UNIONPAY";
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][1]),
      ERROR_MESSAGE.INVALID_LENGTH(CARD_INPUT_LENGTH[cardNetwork][2]),
      "",
    ]);
  });

  it('inputType이 "PENDING"이라면 에러 메시지를 반환하지 않는다.', () => {
    const cardNumbers = ["1234", "", "", ""];
    const cardNetwork = "PENDING";
    expect(validateCardNumber(cardNumbers, cardNetwork)).toEqual([
      "",
      "",
      "",
      "",
    ]);
  });
});
