import { setupCardNumberTest } from "./useCardNumber.basic.test";

describe("useCardNumbers 회사별 포매팅", () => {
  it("VISA: 포매팅이 [4, 4, 4, 4]형식으로 이루어진다.", () => {
    const visaCardNumber = "4321123412341234";
    const formattedVisaCardNumber = "4321 1234 1234 1234";

    const result = setupCardNumberTest(visaCardNumber);

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedVisaCardNumber
    );
  });
  it("MASTER: 포매팅이 [4, 4, 4, 4]형식으로 이루어진다.", () => {
    const masterCardNumber = "5121123412341234";
    const formattedMasterCardNumber = "5121 1234 1234 1234";

    const result = setupCardNumberTest(masterCardNumber);

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedMasterCardNumber
    );
  });

  it("DINERS: 포매팅이 [4, 6, 4]형식으로 이루어진다.", () => {
    const dinersCardNumber = "36123456789012";
    const formattedDinersCardNumber = "3612 345678 9012";

    const result = setupCardNumberTest(dinersCardNumber);

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedDinersCardNumber
    );
  });

  it("AMEX: 포매팅이 [4, 6, 5]형식으로 이루어진다.", () => {
    const amexCardNumber = "341234567890123";
    const formattedAmexCardNumber = "3412 345678 90123";

    const result = setupCardNumberTest(amexCardNumber);

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedAmexCardNumber
    );
  });

  it("UNION: 포매팅이 [4, 4, 4, 4]형식으로 이루어진다.", () => {
    const unionCardNumber = "6282123456789012";
    const formattedUnionCardNumber = "6282 1234 5678 9012";

    const result = setupCardNumberTest(unionCardNumber);

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedUnionCardNumber
    );
  });
});
