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

const CARD_FORMATTER_ERROR_MESSAGE = "카드 번호를 포맷팅할 수 없습니다.";

export default function formatCardNumber(
  cardNumbers: CardNumbers,
  userCardNetworkFormatter?: TypeOfCardNetworkPatterns
) {
  const fullCardNumber =
    `${cardNumbers.FIRST}${cardNumbers.SECOND}${cardNumbers.THIRD}${cardNumbers.FOURTH}`.replace(
      /\D/g,
      ""
    );
  const patterns = { ...CARD_NETWORK_PATTERNS, ...userCardNetworkFormatter };

  const matchedNetwork = Object.entries(patterns).find(([_, { PATTERN }]) =>
    PATTERN.test(fullCardNumber)
  );

  if (!matchedNetwork)
    return {
      formattedCardNumbers: "",
      error: true,
      errorMessage: CARD_FORMATTER_ERROR_MESSAGE,
    };

  const [_, { FORMAT_PATTERN, LENGTH, FORMAT_TEMPLATE }] = matchedNetwork;

  if (fullCardNumber.length < LENGTH)
    return {
      formattedCardNumbers: "",
      error: true,
      errorMessage: CARD_FORMATTER_ERROR_MESSAGE,
    };

  const formattedCardNumbers = fullCardNumber.replace(
    FORMAT_PATTERN,
    FORMAT_TEMPLATE
  );

  return {
    formattedCardNumbers: formattedCardNumbers,
    error: false,
    errorMessage: "",
  };
}
