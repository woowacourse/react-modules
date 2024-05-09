import formatCardNumber, {
  calculateValidCardNumberLength,
} from "./formatCardNumber";

import { CardGlobalBrand } from "./identifyCardGLobalBrand";

describe("카드번호 포맷팅 테스트(formatCardNumber)", () => {
  const visaTestCases = [
    {
      cardNumber: "4123123412341234",
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedFormattedNumber: ["4123", "1234", "1234", "1234"],
    },
    {
      cardNumber: "412312341234123",
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedFormattedNumber: ["4123", "1234", "1234", "123"],
    },
    {
      cardNumber: "41231234123",
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedFormattedNumber: ["4123", "1234", "123", ""],
    },
  ];

  const masterTestCases = [
    {
      cardNumber: "5123123412341234",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedFormattedNumber: ["5123", "1234", "1234", "1234"],
    },
    {
      cardNumber: "512312341234123",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedFormattedNumber: ["5123", "1234", "1234", "123"],
    },
    {
      cardNumber: "5123123412341",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedFormattedNumber: ["5123", "1234", "1234", "1"],
    },
    {
      cardNumber: "51231",
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedFormattedNumber: ["5123", "1", "", ""],
    },
  ];

  const dinersTestCases = [
    {
      cardNumber: "36127897891324",
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedFormattedNumber: ["3612", "789789", "1324"],
    },
    {
      cardNumber: "36127897891",
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedFormattedNumber: ["3612", "789789", "1"],
    },
    {
      cardNumber: "36127897",
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedFormattedNumber: ["3612", "7897", ""],
    },
  ];

  const amexTestCases = [
    {
      cardNumber: "341245678912345",
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedFormattedNumber: ["3412", "456789", "12345"],
    },
    {
      cardNumber: "341245678912",
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedFormattedNumber: ["3412", "456789", "12"],
    },
    {
      cardNumber: "371245678",
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedFormattedNumber: ["3712", "45678", ""],
    },
  ];

  const unionTestCases = [
    {
      cardNumber: "6221265678901234",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6221", "2656", "7890", "1234"],
    },
    {
      cardNumber: "62212656789012",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6221", "2656", "7890", "12"],
    },
    {
      cardNumber: "622126567890",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6221", "2656", "7890", ""],
    },

    {
      cardNumber: "6245678901234123",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6245", "6789", "0123", "4123"],
    },
    {
      cardNumber: "6245679",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6245", "679", "", ""],
    },
    {
      cardNumber: "624",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["624", "", "", ""],
    },

    {
      cardNumber: "6282567901234123",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6282", "5679", "0123", "4123"],
    },
    {
      cardNumber: "6282",
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedFormattedNumber: ["6282", "", "", ""],
    },
  ];

  const testCases = [
    ...visaTestCases,
    ...masterTestCases,
    ...dinersTestCases,
    ...amexTestCases,
    ...unionTestCases,
  ];

  test.each(testCases)(
    `카드번호 $cardNumber와 카드사 $cardGlobalBrand를 입력받으면, $expectedFormattedNumber로 포맷팅한다.`,
    ({
      cardNumber,
      cardGlobalBrand,
      expectedFormattedNumber,
    }: {
      cardNumber: string;
      cardGlobalBrand: CardGlobalBrand;
      expectedFormattedNumber: string[];
    }) => {
      const formattedNumber = formatCardNumber(cardNumber, cardGlobalBrand);
      expect(formattedNumber).toEqual(expectedFormattedNumber);
    }
  );
});

describe("카드사의 유효한 카드번호의 길이 테스트 (calculateValidCardNumberLength)", () => {
  test.each([
    {
      cardGlobalBrand: CardGlobalBrand.VISA,
      expectedLength: 16,
    },
    {
      cardGlobalBrand: CardGlobalBrand.MASTER,
      expectedLength: 16,
    },
    {
      cardGlobalBrand: CardGlobalBrand.DINERS,
      expectedLength: 14,
    },
    {
      cardGlobalBrand: CardGlobalBrand.AMEX,
      expectedLength: 15,
    },
    {
      cardGlobalBrand: CardGlobalBrand.UNION_PAY,
      expectedLength: 16,
    },
    {
      cardGlobalBrand: CardGlobalBrand.NOT_IDENTIFIED,
      expectedLength: 16,
    },
  ])(
    "카드사가 $cardGlobalBrand일 때, 유효한 카드번호의 길이는 $expectedLength이다.",
    ({
      cardGlobalBrand,
      expectedLength,
    }: {
      cardGlobalBrand: CardGlobalBrand;
      expectedLength: number;
    }) => {
      const validLength = calculateValidCardNumberLength(cardGlobalBrand);
      expect(validLength).toBe(expectedLength);
    }
  );
});
