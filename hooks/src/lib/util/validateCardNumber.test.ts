import { ERROR_MESSAGE } from "../constants";
import { validateCardNetwork, validateCardNumber } from "./validateCardNumber";

describe(`cardNumber 유효성 검사`, () => {
  it("카드 번호가 정상적으로 들어왔을떄 에러메시지는 보여주지 않는다.", () => {
    const cardNumber = "1111444433334444";
    expect(validateCardNumber(cardNumber)).toBe("");
  });
  it(`숫자가 아닌 카드 번호가 들어왔을떄, "${ERROR_MESSAGE.NOT_NUMERIC}"에러메세지를 보여준다.`, () => {
    const cardNumber = "111144443333444a";
    expect(validateCardNumber(cardNumber)).toBe(ERROR_MESSAGE.NOT_NUMERIC);
  });
  it(`카드번호가 16자가 아니면 "${ERROR_MESSAGE.INVALID_CARD_LENGTH}"에러를 보여준다.`, () => {
    const cardNumber = "11114444333344";
    expect(validateCardNumber(cardNumber)).toBe(
      ERROR_MESSAGE.INVALID_CARD_LENGTH
    );
  });
});

describe("cardNetwork 타입 검사", () => {
  it("앞자리가 4로 시작한다면 'VISA'를 반환한다.", () => {
    const cardNumber = "4444555566667777";
    expect(validateCardNetwork(cardNumber)).toBe("VISA");
  });
  it("앞자리가 51보다 크고 54보다 작다면 'MASTER'를 반환한다.", () => {
    const cardNumber1 = "5111222233334444";
    const cardNumber2 = "5411222233334444";
    expect(validateCardNetwork(cardNumber1)).toBe("MASTER");
    expect(validateCardNetwork(cardNumber2)).toBe("MASTER");
  });
  it("VISA 또는 MASTER 카드가 아니라면 'DEFAULT'를 반환한다.", () => {
    const cardNumber = "1111222233334444";
    expect(validateCardNetwork(cardNumber)).toBe("DEFAULT");
  });
});
