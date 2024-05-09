import identifyCardGlobalBrand, {
  CardGlobalBrand,
} from "./identifyCardGLobalBrand";

describe("카드사 식별 테스트(identifyCardGlobalBrand)", () => {
  const visaTestCases = [
    { cardNumber: "4011111111111111", expectedBrand: CardGlobalBrand.VISA },
    {
      cardNumber: "3011111111111111",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "5011111111111111",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
  ];

  const masterTestCases = [
    { cardNumber: "5112345678901234", expectedBrand: CardGlobalBrand.MASTER },
    { cardNumber: "5512345678901234", expectedBrand: CardGlobalBrand.MASTER },
    {
      cardNumber: "5012345678901234",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "5612345678901234",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
  ];

  const dinersTestCases = [
    {
      cardNumber: "36123456789012",
      expectedBrand: CardGlobalBrand.DINERS,
    },
    {
      cardNumber: "35123456789012",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "37123456789012",
      expectedBrand: CardGlobalBrand.AMEX,
    },
  ];

  const amexTestCases = [
    {
      cardNumber: "341234567890123",
      expectedBrand: CardGlobalBrand.AMEX,
    },
    {
      cardNumber: "371234567890123",
      expectedBrand: CardGlobalBrand.AMEX,
    },
    {
      cardNumber: "331234567890123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "351234567890123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "361234567890123",
      expectedBrand: CardGlobalBrand.DINERS,
    },
    {
      cardNumber: "381234567890123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
  ];

  const unionTestCases = [
    {
      cardNumber: "6221265678901234",
      expectedBrand: CardGlobalBrand.UNION_PAY,
    },
    {
      cardNumber: "6229255678901234",
      expectedBrand: CardGlobalBrand.UNION_PAY,
    },
    {
      cardNumber: "6221255678901234",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "6229265678901234",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },

    {
      cardNumber: "6245678901234123",
      expectedBrand: CardGlobalBrand.UNION_PAY,
    },
    {
      cardNumber: "6265678901234123",
      expectedBrand: CardGlobalBrand.UNION_PAY,
    },
    {
      cardNumber: "6235678901234123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "6275678901234123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },

    {
      cardNumber: "6282567901234123",
      expectedBrand: CardGlobalBrand.UNION_PAY,
    },
    {
      cardNumber: "6288567901234123",
      expectedBrand: CardGlobalBrand.UNION_PAY,
    },
    {
      cardNumber: "6281567901234123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
    {
      cardNumber: "6289567901234123",
      expectedBrand: CardGlobalBrand.NOT_IDENTIFIED,
    },
  ];

  const testCases = [
    ...visaTestCases,
    ...masterTestCases,
    ...dinersTestCases,
    ...amexTestCases,
    ...unionTestCases,
  ];

  testCases.forEach(({ cardNumber, expectedBrand }) => {
    test(`카드번호 ${cardNumber}를 입력받으면, ${expectedBrand}를 식별한다.`, () => {
      const brand = identifyCardGlobalBrand(cardNumber);
      expect(brand).toBe(expectedBrand);
    });
  });
});
