import { validateCardNetwork } from "./validateCardNetwork";

describe("cardNetwork 타입 검사", () => {
  it("앞자리가 4로 시작한다면 'VISA'를 반환한다.", () => {
    const cardNumbers = ["4123", "1234", "1234", "1234"];
    expect(validateCardNetwork(cardNumbers)).toBe("VISA");
  });

  it("앞자리가 51보다 크고 54보다 작다면 'MASTER'를 반환한다.", () => {
    const cardNumbers1 = ["5123", "1234", "1234", "1234"];
    const cardNumbers2 = ["5412", "1234", "1234", "1234"];
    expect(validateCardNetwork(cardNumbers1)).toBe("MASTER");
    expect(validateCardNetwork(cardNumbers2)).toBe("MASTER");
  });

  it("앞자리가 51보다 크고 54보다 작다면 'MASTER'를 반환한다.", () => {
    const cardNumbers1 = ["5123", "1234", "1234", "1234"];
    const cardNumbers2 = ["5412", "1234", "1234", "1234"];
    expect(validateCardNetwork(cardNumbers1)).toBe("MASTER");
    expect(validateCardNetwork(cardNumbers2)).toBe("MASTER");
  });

  it("앞자리가 36으로 시작하면 'DINERS'를 반환한다.", () => {
    const cardNumbers = ["3612", "3456", "7890", "1234"];
    expect(validateCardNetwork(cardNumbers)).toBe("DINERS");
  });

  it("앞자리가 34 또는 37로 시작하면 'AMEX'를 반환한다.", () => {
    const cardNumbers1 = ["3412", "3456", "7890", "1234"];
    const cardNumbers2 = ["3712", "3456", "7890", "1234"];
    expect(validateCardNetwork(cardNumbers1)).toBe("AMEX");
    expect(validateCardNetwork(cardNumbers2)).toBe("AMEX");
  });

  it("앞 6자리가 622126 ~ 622925, 624~626(3자리), 6282~6288(4자리)라면 'UNIONPAY'를 반환한다.", () => {
    const bin6 = ["622126", "3456", "7890", "1234"];
    const bin3 = ["6241", "5678", "9012", "3456"];
    const bin4 = ["6282", "5678", "9012", "3456"];
    expect(validateCardNetwork(bin6)).toBe("UNIONPAY");
    expect(validateCardNetwork(bin3)).toBe("UNIONPAY");
    expect(validateCardNetwork(bin4)).toBe("UNIONPAY");
  });

  it("카드 번호가 6자리 미만이면 'PENDING'을 반환한다.", () => {
    const cardNumbers = ["6221", ""];
    expect(validateCardNetwork(cardNumbers)).toBe("PENDING");
  });

  it("카드 브랜드가 판별이 되지 않는다면 'DEFAULT'를 반환한다.", () => {
    const cardNumbers = ["1234", "1234", "1234", "1234"];
    expect(validateCardNetwork(cardNumbers)).toBe("DEFAULT");
  });
});
