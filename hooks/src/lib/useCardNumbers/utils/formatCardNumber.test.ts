import { CardGlobalBrand } from "./identifyCardGLobalBrand";
import formatCardNumber from "./formatCardNumber";

describe("카드번호 포맷팅 테스트(formatCardNumber)", () => {
  const visaTestCases = [
    {
      cardNumber: "4123123412341234",
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedBrand: ["4123", "1234", "1234", "1234"],
    },
    {
      cardNumber: "412312341234123",
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedBrand: ["4123", "1234", "1234", "123"],
    },
    {
      cardNumber: "41231234123",
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedBrand: ["4123", "1234", "123", ""],
    },
  ];

  const masterTestCases = [
    {
      cardNumber: "5123123412341234",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedBrand: ["5123", "1234", "1234", "1234"],
    },
    {
      cardNumber: "512312341234123",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedBrand: ["5123", "1234", "1234", "123"],
    },
    {
      cardNumber: "5123123412341",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedBrand: ["5123", "1234", "1234", "1"],
    },
    {
      cardNumber: "51231",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedBrand: ["5123", "1", "", ""],
    },
  ];

  const dinersTestCases = [
    {
      cardNumber: "36127897891324",
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedBrand: ["3612", "789789", "1324"],
    },
    {
      cardNumber: "36127897891",
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedBrand: ["3612", "789789", "1"],
    },
    {
      cardNumber: "36127897",
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedBrand: ["3612", "7897", ""],
    },
  ];

  const amexTestCases = [
    {
      cardNumber: "341245678912345",
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedBrand: ["3412", "456789", "12345"],
    },
    {
      cardNumber: "341245678912",
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedBrand: ["3412", "456789", "12"],
    },
    {
      cardNumber: "371245678",
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedBrand: ["3712", "45678", ""],
    },
  ];

  const unionTestCases = [
    {
      cardNumber: "6221265678901234",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6221", "2656", "7890", "1234"],
    },
    {
      cardNumber: "62212656789012",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6221", "2656", "7890", "12"],
    },
    {
      cardNumber: "622126567890",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6221", "2656", "7890", ""],
    },

    {
      cardNumber: "6245678901234123",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6245", "6789", "0123", "4123"],
    },
    {
      cardNumber: "6245679",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6245", "679", "", ""],
    },
    {
      cardNumber: "624",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["624", "", "", ""],
    },

    {
      cardNumber: "6282567901234123",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6282", "5679", "0123", "4123"],
    },
    {
      cardNumber: "6282",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedBrand: ["6282", "", "", ""],
    },
  ];

  const testCases = [
    ...visaTestCases,
    ...masterTestCases,
    ...dinersTestCases,
    ...amexTestCases,
    ...unionTestCases,
  ];

  testCases.forEach(({ cardNumber, cardGlobalBrand, expectedBrand }) => {
    test(`카드번호 ${cardNumber}와 카드사 ${cardGlobalBrand}를 입력받으면, ${expectedBrand}로 포맷팅한다.`, () => {
      const formattedNumber = formatCardNumber(cardNumber, cardGlobalBrand);
      expect(formattedNumber).toEqual(expectedBrand);
    });
  });
});
