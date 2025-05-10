import { CARD_NUMBER_LENGTH, ERROR_MESSAGE } from "../constants";
import { validateCardNumber } from "./validateCardNumber";

describe(`cardNumber 유효성 검사`, () => {
  it("카드 번호가 정상적으로 들어왔을떄 에러메시지는 보여주지 않는다.", () => {
    const cardNumbers = ["1234", "1234", "1234", "1234"];
    expect(validateCardNumber(cardNumbers)).toEqual(["", "", "", ""]);
  });
  it(`숫자가 아닌 카드 번호가 들어왔을떄, "${ERROR_MESSAGE.NOT_NUMERIC}"에러메세지를 보여준다.`, () => {
    const cardNumbers = ["1234", "1234", "1234", "123a"];
    expect(validateCardNumber(cardNumbers)).toEqual([
      "",
      "",
      "",
      ERROR_MESSAGE.NOT_NUMERIC,
    ]);
  });
  it(`카드번호가 16자가 아니면 "${ERROR_MESSAGE.INVALID_LENGTH(
    CARD_NUMBER_LENGTH
  )}"에러를 보여준다.`, () => {
    const cardNumbers = ["1234", "1234", "1234", "123"];
    expect(validateCardNumber(cardNumbers)).toEqual([
      "",
      "",
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_NUMBER_LENGTH),
    ]);
  });
});
