import formatCardNumber from "./formatCardNumbers";

describe("카드 입력값에 대한 포맷팅 함수", () => {
  test("4로 시작하는 16자리의 카드 번호가 들어왔을때 Visa 카드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "4111111111111111";
    const type = "Visa";
    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("4111 1111 1111 1111");
  });

  test("앞자리 두자리가 51이상 55이하의 숫자이고 16자리라면 MasterCard 카드 브랜드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "5555555555554444";
    const type = "MasterCard";
    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("5555 5555 5555 4444");
  });

  test("앞자리가 34나 37로 시작하는 15자리의 숫자라면 AMEX 카드 브랜드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "378282246310005";
    const type = "AMEX";
    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("3782 822463 10005");
  });

  test("앞자리가 36으로 시작하는 14자리의 숫자라면 Diners 카드 브랜드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "36864585098035";
    const type = "Diners";
    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("3686 458509 8035");
  });

  test("앞자리 6자가 622126~622925 사이의 숫자이고 16자리라면, UnionPay 카드 브랜드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "6221558812340000";
    const type = "UnionPay";
    const formatted = formatCardNumber({ cardNumbers, type });

    expect(formatted).toBe("6221 5588 1234 0000");
  });

  test("앞자리 6자가 624~626 사이의 숫자이고 16자리라면, UnionPay 카드 브랜드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "6241111111111111";
    const type = "UnionPay";

    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("6241 1111 1111 1111");
  });

  test("앞자리 6자가 6282~6288 사이의 숫자이고 16자리라면, UnionPay 카드 브랜드에 맞는 포맷팅을 실행한다.", () => {
    const cardNumbers = "6241111111111111";
    const type = "UnionPay";

    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("6241 1111 1111 1111");
  });

  test("아무런 조건을 충족하지 못할시에 인자로 받은 카드번호를 그대로 반환한다.", () => {
    const cardNumbers = "8674436723572367";
    const type = "";

    const formatted = formatCardNumber({ cardNumbers, type });
    expect(formatted).toBe("8674436723572367");
  });
});
