import {
  CARD_NETWORK_PATTERNS,
  TypeOfCardNetworkPatterns,
} from "../constants/cardNetworkPatterns";

type CardNumbers = {
  FIRST: string;
  SECOND: string;
  THIRD: string;
  FOURTH: string;
};

const CARD_NETWORK_ERROR_MESSAGE = "카드 길이가 올바르지 않습니다.";

export default function checkCardNetwork(
  cardNumbers: CardNumbers,
  userCardNetworkPatterns?: TypeOfCardNetworkPatterns
) {
  const fullCardNumber = `${cardNumbers.FIRST}${cardNumbers.SECOND}${cardNumbers.THIRD}${cardNumbers.FOURTH}`;
  const patterns = { ...CARD_NETWORK_PATTERNS, ...userCardNetworkPatterns };

  const matchedNetwork = Object.entries(patterns).find(([_, { PATTERN }]) =>
    PATTERN.test(fullCardNumber)
  );

  let cardNetwork = "";
  let isValidLegnth = false;
  let errorMessage = "";

  if (matchedNetwork) {
    const [parsedcardNetwork, { LENGTH }] = matchedNetwork;
    cardNetwork = parsedcardNetwork;
    isValidLegnth = fullCardNumber.length === LENGTH;
  }

  if (!isValidLegnth) errorMessage = CARD_NETWORK_ERROR_MESSAGE;
  else errorMessage = "";

  return {
    cardNetwork,
    error: !isValidLegnth,
    errorMessage: errorMessage,
  };
}

// - Diners: 36으로 시작하는 14자리 숫자
//   - 예시: 3612 345678 9012
// - AMEX: 34, 37로 시작하는 15자리 숫자
//   - 예시 (34로 시작): 3412 345678 90123
//   - 예시 (37로 시작): 3712 345678 90123
// - 유니온페이: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
//   - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
//   - 624~626로 시작하는 경우: 6240 1234 5678 9012
//   - 6282~6288로 시작하는 경우: 6282 1234 5678 9012
// - Visa: 4로 시작하는 16자리 숫자
// - MasterCard: 51~55로 시작하는 16자리 숫자
